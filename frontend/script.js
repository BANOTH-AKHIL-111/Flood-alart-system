const API = "https://flood-alert-api.onrender.com";

function signup() {
  fetch(API + "/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      phone: phone.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => msg.innerText = data.message || data.error);
}

function verifyOtp() {
  fetch(API + "/verify-otp", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      phone: phone.value,
      otp: otp.value
    })
  })
  .then(res => res.json())
  .then(data => msg.innerText = data.message || data.error);
}

function login() {
  fetch(API + "/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      phone: phone.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => msg.innerText = data.message || data.error);
}
