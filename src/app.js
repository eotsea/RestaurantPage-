"use-strict";
import "./styles.css";
import { luffy, zoro, sanji } from "./eater.js";
const content = document.getElementById("content");
const menu = document.querySelector(".menu");
const main = document.getElementById("main");

[...menu.children].forEach((e) =>
  e.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    changeContent(e.target.innerText);
  })
);

const changeContent = (menuTag) => {
  switch (menuTag) {
    case "Luffy":
      main.innerHTML = luffy.div.innerHTML;
      break;
    case "Zoro":
      main.innerHTML = zoro.div.innerHTML;
      break;
    case "Sanji":
      main.innerHTML = sanji.div.innerHTML;
      break;
    default:
      break;
  }
};

window.onload = ()=>{
  changeContent("Luffy");
  console.log("loaded");
}