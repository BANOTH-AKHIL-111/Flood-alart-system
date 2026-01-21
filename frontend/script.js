const BASE_URL = "https://flood-alert-system.onrender.com";

// LOGIN
async function login() {
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!/^\d{10}$/.test(phone)) {
    alert("Enter valid 10-digit phone number");
    return;
  }

  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, password })
  });

  const data = await res.json();

  if (res.ok) {
    alert("Login successful");
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
  } else {
    alert(data.message);
  }
}

// SIGNUP
async function signup() {
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!/^\d{10}$/.test(phone)) {
    alert("Enter valid phone number");
    return;
  }

  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, password })
  });

  const data = await res.json();
  alert(data.message);
}

// LOGOUT
function logout() {
  location.reload();
}
