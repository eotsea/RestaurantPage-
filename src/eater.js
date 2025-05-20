import luffyImage  from "./luffy.jpg";
import zoroImage  from "./zoro.png";
import sanjiImage  from "./sanji.png";



const section = (name, sectionContent) => {
  const div = document.createElement("div");
  const Eatername = name;
  div.innerHTML = sectionContent;
  return { Eatername, div };
};

export const luffy = section(
  "luffy",
  `<div class="eater">
            <img src="${luffyImage}" alt="${"luffy"}">
            <p>He eat everything but usually MEAT!</p>
        </div>`
);

export const zoro = section(
  "zoro",
  `
    <div class="eater">
            <img src="${zoroImage}" alt="swordmaster">
            <p>Sake Freak! MEAT!</p>
        </div>`
);

export const sanji = section(
  "sanji",
  `
    <div class="eater">
            <img src="${sanjiImage}" alt="henta!">
            <p>IRON CHEFF</p>
        </div>`
);
