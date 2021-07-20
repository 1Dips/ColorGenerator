let firstTime = true;

document.addEventListener("DOMContentLoaded", function () {
  changeFirstTime();
});

window.addEventListener("beforeunload", (event) => {
  handleCookieSave();
});

const genRanHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

document.getElementById("changeButton").addEventListener("click", (ev) => {
  ev.preventDefault();
  console.log("Clicked!");

  document.body.style.backgroundColor = document.getElementById("input").value;

  setTextColors(document.getElementById("input").value);
});

function handleCookieSave() {
  setCookie(document.getElementById("input").value);
}

document.getElementById("generator").addEventListener("click", (ev) => {
  generateColor(ev);
});

document.body.addEventListener("keypress", (ev) => {
  console.log(ev.code);
  if (ev.code == "Space") {
    generateColor(ev);
  }
});

const setCookie = (value) => {
  document.cookie = `${value}`;
  console.log(`Cookie: ${value}`);
};

const loadCookie = () => {
  document.body.style.backgroundColor = document.cookie;
  document.getElementById("input").value = document.cookie;
  setTextColors(document.cookie);
};

const changeFirstTime = () => {
  firstTime = false;
  loadCookie();
};

const generateColor = (ev) => {
  console.log("Generator Ran");
  ev.preventDefault();
  console.log("Clicked!");
  let newColor = "#" + genRanHex(6);
  console.log(newColor);
  document.getElementById("input").value = newColor;
  document.body.style.backgroundColor = newColor;
  console.log(document.querySelectorAll("button"));
  setTextColors(newColor);
};

const setTextColors = (color) => {
  let results = document.querySelectorAll("button");

  for (let i = 0; i < results.length; i++) {
    document.querySelectorAll("button")[i].style.color = color;
  }
  document.getElementById("input").style.color = color;
};
