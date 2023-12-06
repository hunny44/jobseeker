document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "shakti" && password === "thakur") {
    alert("Login successful!");
  } else {
    const errorMessage = document.getElementById("error-msg");
    errorMessage.textContent = "Invalid username or password";
    errorMessage.style.display = "block";
  }
});
