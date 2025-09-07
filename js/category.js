"use strict"
const text = document.querySelector("#text")
const textDiv = document.querySelector("#textDiv")
const section = document.querySelector("#section");

const product = JSON.parse(localStorage.getItem("card"));
console.log(product)

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

const cardImag = [
    {
        productIages: "https://olcha.uz/image/original/category_slider/cdn_1/2024-06-26/F7xjxetcSzEh5MX3EZWl6VnNnEbHJmbrI2S5WDmZCmJVPxJYBVxOtRRxfsfd.jpg",
        theProductName: "This is TV img"
    }
]

const miniCard = [
    {
        img: "https://olcha.uz/image/150x150/category/qdVTBaQHAIBKWX7Zmtnqyt41UiGfCsBuQI7b2T33svLTTu40fF83RVO6u4Q4.png",
        text: "Televizorlar"
    }, {
        img: "https://olcha.uz/image/150x150/category/MFGlVLSgqFhWAAD20AG8rhl6bqpdxnPH4E4iRcu86AAI3BCelhntarOz1OP3.png",
        text: "Audio"
    }, {
        img: "https://olcha.uz/image/150x150/category/yw3vCbU0YmfBnMTOjLKSddHwCPWCfgqyQStWCEfPyi4G2jx5Uf61tYpvMXvC.png",
        text: "Videotexnika"
    }, {
        img: "https://olcha.uz/image/150x150/category/VHfLdXIi8WVvhYGxrhdQUVpA2N11hgJEcA4C8uf4sSk4EejpDg1Qhx2lslTF.png",
        text: "Media Player"
    }, {
        img: "https://olcha.uz/image/150x150/category/tChE7EcMi1DV853t4a54pGU2pZEiw42ELhvqz7lkOuq2E1O93Bwz2XNeslbc.png",
        text: "Diktafonlar"
    }, {
        img: "https://olcha.uz/image/150x150/category/v36bvXhA1ohp1Ln4w5ZzTA5sd1XZfifKjjFQ6b3q007hWS3TlyWEZYg0PzdZ.png",
        text: "Foto, video"
    }, {
        img: "https://olcha.uz/image/150x150/category/xQgtxsKDXISSlQ7jXuqLwYdSxKlJx5T8Q2atJyMBS7DJHwQ9xBVGBynxbwrm.",
        text: "O'yin konsollari"
    }, {
        img: "https://olcha.uz/image/150x150/category/XlECBHaLlFkVoeUhCOeyEj7ajluhi08Ry80o97ynQHiiTFKHzH0qAdYaNntN.png",
        text: "Kronshteynlar"
    },
]

const wrapper = document.createElement("div");
wrapper.className = "CardPArent";

cardImag.forEach(item => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("sectionCardParent");

    cardEl.innerHTML = `
    <div>
      <img src="${item.productIages}" alt="${item.theProductName}">
    </div>
  `;

    cardEl.addEventListener("click", () => {
        window.location.href = "../html/category.html";
    });

    wrapper.appendChild(cardEl);
});

miniCard.forEach(item => {
    const miniCardEl = document.createElement("div");
    miniCardEl.classList.add("sectionCard");

    miniCardEl.innerHTML = `
    <div>
      <img src="${item.img}" alt="${item.theProductName}">
    </div>
    <h3>${item.text}</h3>
  `;

    miniCardEl.addEventListener("click", () => {
        window.location.href = "../html/category.html";
    });

    wrapper.appendChild(miniCardEl);
});

section.appendChild(wrapper);

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


