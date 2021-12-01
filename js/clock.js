const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  // const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  // const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  // console.log(`${hours}:${minutes}:${seconds}`);

  // console.log(`${hours}:${minutes}:${seconds}`);
}

window.addEventListener("load", getClock);

setInterval(getClock, 1000);