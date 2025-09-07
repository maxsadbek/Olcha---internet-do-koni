"use strict"
const text = document.querySelector("#text")
const textDiv = document.querySelector("#textDiv")
const section = document.querySelector("#section");

const navItems = [
    { tag: "button", text: "0% Muddatli to'lov", class: "btn light" },
    { tag: "button", text: "Chegirmalar", class: "btn chgirma" },
    { tag: "button", text: "Yutuqli o'yinlar", class: "btn" },
    { tag: "span", text: "Sayt xaritasi", class: "spanNav" },
    { tag: "span", text: "+998 (71) 202 202 1", class: "phone" },
    { tag: "button", text: "olcha da soting", class: "btn outlined" },
    { tag: "span", text: "Ўзб" },
    { tag: "span", text: "O'z", class: "active" },
    { tag: "span", text: "Рус" },
];


// navbar
const navbar = document.createElement("div");
navbar.className = "header";
navItems.forEach(item => {
    const el = document.createElement(item.tag);
    el.textContent = item.text;
    if (item.class) el.className = item.class;
    navbar.appendChild(el);
});

const container = document.createElement("div");
container.className = "container";

container.appendChild(navbar);
document.body.prepend(container);

document.body.prepend(navbar);

const id = crypto.randomUUID();

localStorage.setItem("id", JSON.stringify(id));

const product = JSON.parse(localStorage.getItem("id"));
console.log(product);;

