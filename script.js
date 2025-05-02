document.getElementById("form-container").addEventListener("submit",function(event)
{
 
    event.preventDefault();
const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Simple validation
  if (email === "test@example.com" && password === "12345") {
    alert("Login successful!");
    error.textContent = "";
  } else {
    error.textContent="invalidemail or password";
  }
});