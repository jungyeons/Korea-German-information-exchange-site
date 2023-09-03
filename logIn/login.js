const login_banner = document.querySelector("#login_banner");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const greeting = document.querySelector("#greeting");
const main_btn = document.querySelector("#main_btn");

const Hidden = "hidden";

function loginCheck(event) {
  const loginState = localStorage.getItem("loginState");
  const userName = localStorage.getItem("userName");
  if (loginState == 1) {
    login_banner.classList.add(Hidden);
    login_banner.removeAttribute("id");
    greeting.innerText = `안녕하세요 ${userName}님`;
    greeting.classList.remove(Hidden);
    main_btn.classList.remove(Hidden);
  } else {
    return;
  }
}

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = localStorage.getItem("userName");
  const savedUserId = localStorage.getItem("userId");
  const savedUserPassword = localStorage.getItem("userPassword");
  const nowUserId = username.value;
  const nowPassword = password.value;

  if (savedUserId == nowUserId && savedUserPassword == nowPassword) {
    login_banner.classList.add(Hidden);
    login_banner.removeAttribute("id");
    greeting.innerText = `안녕하세요 ${userName}님`;
    greeting.classList.remove(Hidden);
    main_btn.classList.remove(Hidden);
    localStorage.setItem("loginState", 1);
  } else {
    localStorage.setItem("loginState", 0);
    alert("아이디나 비밀번호가 틀렸습니다.");
  }
}

loginCheck();
login_form.addEventListener("submit", onLoginSubmit);
