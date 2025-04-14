
// Registro
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Simular guardado local
    localStorage.setItem("qrediUser", JSON.stringify({ email, password }));
    alert("¡Cuenta creada con éxito!");
    window.location.href = "login.html";
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const savedUser = JSON.parse(localStorage.getItem("qrediUser"));

    if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
      alert("Credenciales incorrectas");
      return;
    }

    alert("¡Bienvenido!");
    window.location.href = "index.html"; // Redirige al simulador
  });
}
