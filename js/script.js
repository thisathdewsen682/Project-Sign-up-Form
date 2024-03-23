const btn = document.getElementById("register-btn");

console.log(btn);

btn.addEventListener("click", function (e) {
  let msg = "";
  let errorMsg = document.getElementById("error-msg");
  let password = document.getElementById("password").value;

  let confirmPassword = document.getElementById("confirmpassword").value;

  if (password == confirmPassword) {
    msg = "Password matched";
    errorMsg.innerText = "";
    //errorMsg.innerText = msg;
  } else {
    msg = "Password Field Didnt Matched";

    errorMsg.innerText = msg;
  }
});
