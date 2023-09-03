const container = document.querySelector("#container");
const loginInput = document.querySelector("#id_input");
const password = document.querySelector("#password_input");
const passwordOk = document.querySelector("#passwordOk_input");
const name1 = document.querySelector("#name_input");
const email = document.querySelector("#email_input");
const birth = document.querySelector("#birth_input");
const greeting = document.querySelector("#greeting");
const main_btn = document.querySelector("#main_btn");
const okBtn = document.querySelector("#btn_idOk");
const loginBtn = document.querySelector("#btn_enter");

const Hidden = "hidden";

let ok = 0;
function idCheck(event) {
  event.preventDefault();
  const saved_ID = localStorage.getItem("userId");
  if (saved_ID == loginInput.value) {
    alert("중복된 아이디 입니다. 다른 아이디를 입력하세요");
    return;
  } else {
    alert("사용 가능한 아이디 입니다.");
    ok = 1;
  }
}

function chekForm() {
  const userId = loginInput.value;
  const userPassword = password.value;
  const userPasswordOk = passwordOk.value;
  const userName = name1.value;
  const userEmail = email.value;
  const userBirth = birth.value;

  if (ok == 0) {
    alert("아이디를 중복을 확인하세요");
    return;
  }
  if (ok != 1) {
    alert("중복된 아이디 입니다. 다른 아이디를 입력하세요");
    return;
  } else if (userId == "") {
    alert("아이디를 입력하세요");
    return;
  } else if (userPassword == "") {
    alert("비밀번호를 입력하세요");
    return;
  } else if (userPasswordOk == "") {
    alert("비밀번호 확인을 입력하세요");
    return;
  } else if (userName == "") {
    alert("이름을 입력하세요");
    return;
  } else if (userEmail == "") {
    alert("이메일을 입력하세요");
    return;
  } else if (userBirth == "") {
    alert("생년월일을 입력하세요");
    return;
  } else if (userPasswordOk != userPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  } else if (userBirth.length != 6) {
    alert("주민번호 앞 6자리를 입력해주세요.");
    return;
  }
  return 1;
}

function onLoginSubmit(event) {
  event.preventDefault();
  const checkNum = chekForm();
  if (checkNum != 1) {
    return;
  }
  const userId = loginInput.value;
  const userPassword = password.value;
  const userName = name1.value;
  container.classList.add(Hidden);
  container.removeAttribute("id");
  localStorage.setItem("userName", userName);
  localStorage.setItem("userId", userId);
  localStorage.setItem("userPassword", userPassword);
  localStorage.setItem("loginState", 0);
  greeting.innerText = `회원가입이 완료되었습니다.`;
  greeting.classList.remove(Hidden);
  main_btn.classList.remove(Hidden);
}

okBtn.addEventListener("click", idCheck);
loginBtn.addEventListener("click", onLoginSubmit);
