const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");
const link = document.querySelector("a");
const HIDDEN_CLASS = "hidden";
const USER_NAME_KEY = "username";


function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USER_NAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASS);
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello ${userName}`;
  console.log(`Hello ${userName}`);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("clicked");
}

link.addEventListener("click", handleLinkClick);

const savedUserName = localStorage.getItem(USER_NAME_KEY);

window.addEventListener("load", function() {
  if(savedUserName === null) {
    greeting.classList.add(HIDDEN_CLASS);
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    const userName = localStorage.getItem(USER_NAME_KEY);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASS);
    loginForm.classList.add(HIDDEN_CLASS);
  }
});
