const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

function goHome() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function goTicket() {
  alert("이용권 구매 페이지 입니다.");
}

function goLogin() {
  alert("로그인 페이지 입니다.");
}

function goSetting() {
  alert("환경설정 페이지 입니다.");
}
