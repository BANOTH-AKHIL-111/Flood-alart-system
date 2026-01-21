from flask import Flask, request, jsonify
from flask_cors import CORS
import bcrypt, random
from db import conn, cursor


app = Flask(__name__)
CORS(app)

# ---------------- OTP GENERATOR ----------------
def generate_otp():
    return str(random.randint(100000, 999999))


# ---------------- SIGNUP ----------------
@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    phone = data["phone"]
    password = data["password"]

    if not phone.isdigit() or len(phone) != 10:
        return jsonify({"error": "Invalid phone number"}), 400

    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    otp = generate_otp()

    try:
        cursor.execute("""
            INSERT INTO users (phone, password, otp)
            VALUES (%s, %s, %s)
        """, (phone, hashed.decode(), otp))
        conn.commit()

        print("OTP (testing):", otp)
        return jsonify({"message": "OTP sent successfully"})

    except:
        return jsonify({"error": "User already exists"}), 409


# ---------------- VERIFY OTP ----------------
@app.route("/verify-otp", methods=["POST"])
def verify_otp():
    data = request.json
    phone = data["phone"]
    otp = data["otp"]

    cursor.execute(
        "SELECT otp FROM users WHERE phone=%s", (phone,)
    )
    user = cursor.fetchone()

    if user and user[0] == otp:
        cursor.execute("""
            UPDATE users SET otp_verified=TRUE WHERE phone=%s
        """, (phone,))
        conn.commit()
        return jsonify({"message": "OTP verified successfully"})

    return jsonify({"error": "Invalid OTP"}), 400


# ---------------- LOGIN ----------------
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    phone = data["phone"]
    password = data["password"]

    cursor.execute("""
        SELECT password, otp_verified
        FROM users WHERE phone=%s
    """, (phone,))
    user = cursor.fetchone()

    if not user:
        return jsonify({"error": "User not found"}), 404

    if not user[1]:
        return jsonify({"error": "OTP not verified"}), 403

    if bcrypt.checkpw(password.encode(), user[0].encode()):
        return jsonify({"message": "Login successful"})

    return jsonify({"error": "Wrong password"}), 401


@app.route("/")
def home():
    return "Flood Alert System Backend Running"

@app.route("/test-db")
def test_db():
    try:
        cursor.execute("SELECT 1")
        return jsonify({
            "status": "success",
            "message": "Database connected successfully"
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

if __name__ == "__main__":
    app.run()
