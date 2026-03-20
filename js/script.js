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

const slider = document.querySelector(".music-container");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("dragging");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("dragging");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("dragging");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5; // 🔥 속도 조절
  slider.scrollLeft = scrollLeft - walk;
});

let isDragging = false;

slider.addEventListener("mousemove", () => {
  if (isDown) isDragging = true;
});

slider.addEventListener("mouseup", () => {
  setTimeout(() => (isDragging = false), 0);
});

document.querySelectorAll(".music-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (isDragging) e.preventDefault();
  });
});

document.querySelectorAll(".playlist-summary").forEach((summary) => {
  summary.addEventListener("click", () => {
    const card = summary.parentElement;

    card.classList.toggle("active"); /* 🔥 이게 핵심 */
  });
});
