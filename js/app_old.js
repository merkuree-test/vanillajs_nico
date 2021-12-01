const title = document.querySelector("h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  title.classList.toggle(clickedClass);
  // if(title.classList.contains(clickedClass)) {
  //   title.classList.remove(clickedClass);
  // } else {
  //   title.classList.add(clickedClass);
  // }
  // if(title.className === clickedClass) {
  //   title.removeAttribute("class");
  // } else {
  //   title.className = clickedClass;
  // }
}

function handleMouseEnter() {
  title.innerText = "mouse is here";
}
function handleMouseLeave() {
  title.innerText = "mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copied");
}

function handWindowOffLine() {
  alert("offline");
}

function handWindowOnLine() {
  alert("online");
}

console.dir(title);

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
console.log(title.innerHTML);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handWindowOffLine);
window.addEventListener("online", handWindowOnLine);