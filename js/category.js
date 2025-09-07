"use strict"
const text = document.querySelector("#text")
const textDiv = document.querySelector("#textDiv")
const section = document.querySelector("#section");

const product = JSON.parse(localStorage.getItem("id"));

product.forEach(item => {
    section.innerHTML =
     `<h1>${item.theProductName}</h1>`;
});

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

const card = [
    {
        id: crypto.randomUUID(),
        theProductName: "Televizor,foto-video va audio",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png",

    },
    {
        id: crypto.randomUUID(),
        theProductName: "Noutbook,printer,  kompyuterlar",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png",

    }, {
        id: crypto.randomUUID(),
        theProductName: "Smartfon,telefon, gadjet, aksessuarlar",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/K83YTs4SqPeI3Ohx1lN0bDnbiV1Z9EnwZHMr2HsjIlDhmT48cBgn4C0Ve9Br.png",

    }, {
        id: crypto.randomUUID(),
        theProductName: "Maishiy texnika",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/yfGs0HUuX5wKnXwPbOyEswpZFzzGhmHdpptTriBTKm01HUxMqTBEg1QA2CQr.png",

    }, {
        id: crypto.randomUUID(),
        theProductName: "Barchasi oshxona uchun",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/eCJj0q3ixqzqS3xvZhnMSQnYC1SLTnLB475I5l5ltz6rxi9rUmYauATe5Pa6.png",

    }, {
        id: crypto.randomUUID(),
        theProductName: "Sport anjomlari",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/D1UNIE2gMBYHkx9XQl452O6I2jtQOpD4kvhOWQCtr9fuPliQWVSAkN9YXjiQ.png",
    },
    {
        id: crypto.randomUUID(),
        theProductName: "Go'zallik va salomatlik",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/Lio8FefcAG352o0hPeqHDkd7TVlr2NQ4ljQAQziRlTjWOz08RiB1fncFbe2D.png",
    }, {
        id: crypto.randomUUID(),
        theProductName: "Avto jihozlari",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/xrGNIS4zILNfb5qMXC0nvDLo09QuwdrdXYEKqn7UOEI9PndrjYR1BNX6CQbA.png",
    }, {
        id: crypto.randomUUID(),
        theProductName: "Barchasi ofis, uy va bog' uchun",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ZiWkDeTfCnCNHDWZnu0xXtxwkZ6Qe3embHveXzJVRXfdnaJB5sRsnJiU22vS.png",
    }, {
        id: crypto.randomUUID(),
        theProductName: "Bolalar uchun o'yinchoqlar va mahsulotlar",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/e6S4NLdIceYAv1zDvwHPVHFWSEMMgUxMwbOjThhsguSxVUKTY6yKbXvwOJ6M.png",
    },

]

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


