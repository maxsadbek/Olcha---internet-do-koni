'use strict';
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('menu');
const menuBtn = document.querySelector(".menuBtn")
const closeBtn = document.querySelector(".close")
const section = document.querySelector(".Cadr_slider_parent");
const parentSection = document.querySelector(".parent")
const containerClass = document.querySelector(".parent.container");
const language = document.querySelector(".language")
const rus = document.querySelector('#rus')
const menuMobile = document.querySelector("#menu2 i")
const ulDropdowns = document.querySelector(" #ulDropdowns")
const dropdownIcon = document.querySelector("#dropdownIcon")
const ulDropdowns2 = document.querySelector(" #ulDropdowns2")
const dropdownIcon2 = document.querySelector("#dropdownIcon2")
const dropdown_menu2 = document.querySelector("#dropdown_menu")
const dropdonwBtn2 = document.querySelector("#dropdonwBtn2")
const mobileMenu = document.querySelector("#closeMobile")
let mobileMenuBtn = document.querySelector("#mobileMenu")
let heart = document.querySelectorAll(".heart i")
let cradSection = document.querySelector(".cradSection")
let checkIcon = document.querySelectorAll(".checkIcon i")
let btn1 = document.querySelectorAll(".btn1")
let noPlus = document.querySelectorAll(".no")
let cart = [];
let count = 0;
const cartCount = document.getElementById("cartCount");
const cartIcon = document.getElementById("cartIcon");
const cartModal = document.getElementById("cartModal");
const closeModal = document.getElementById("closeModal");
const cartItems = document.getElementById("cartItems");
const clear = document.querySelector("#clear")
const likeCount = document.querySelector("#likeCount")


// navbar
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
// card
const card = [
    {
        id: crypto.randomUUID(),
        theProductName: "Televizor,foto-video va audio",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png",
        productIages: "https://olcha.uz/image/original/category_slider/cdn_1/2024-06-26/F7xjxetcSzEh5MX3EZWl6VnNnEbHJmbrI2S5WDmZCmJVPxJYBVxOtRRxfsfd.jpg",
        text: "This is TV img",
        img: "https://olcha.uz/image/150x150/category/qdVTBaQHAIBKWX7Zmtnqyt41UiGfCsBuQI7b2T33svLTTu40fF83RVO6u4Q4.png",
        text: "Televizorlar",
        img: "https://olcha.uz/image/150x150/category/MFGlVLSgqFhWAAD20AG8rhl6bqpdxnPH4E4iRcu86AAI3BCelhntarOz1OP3.png",
        text: "Audio",
        img: "https://olcha.uz/image/150x150/category/yw3vCbU0YmfBnMTOjLKSddHwCPWCfgqyQStWCEfPyi4G2jx5Uf61tYpvMXvC.png",
        text: "Videotexnika",
        img: "https://olcha.uz/image/150x150/category/VHfLdXIi8WVvhYGxrhdQUVpA2N11hgJEcA4C8uf4sSk4EejpDg1Qhx2lslTF.png",
        text: "Media Player",
        img: "https://olcha.uz/image/150x150/category/tChE7EcMi1DV853t4a54pGU2pZEiw42ELhvqz7lkOuq2E1O93Bwz2XNeslbc.png",
        text: "Diktafonlar",
        img: "https://olcha.uz/image/150x150/category/v36bvXhA1ohp1Ln4w5ZzTA5sd1XZfifKjjFQ6b3q007hWS3TlyWEZYg0PzdZ.png",
        text: "Foto, video",
        img: "https://olcha.uz/image/150x150/category/xQgtxsKDXISSlQ7jXuqLwYdSxKlJx5T8Q2atJyMBS7DJHwQ9xBVGBynxbwrm.",
        text: "O'yin konsollari",
        img: "https://olcha.uz/image/150x150/category/XlECBHaLlFkVoeUhCOeyEj7ajluhi08Ry80o97ynQHiiTFKHzH0qAdYaNntN.png",
        text: "Kronshteynlar"
    },
    {
        id: crypto.randomUUID(),
        theProductName: "Noutbook,printer,  kompyuterlar",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png",
        checkIcon: "<i class='ri-check-double-line'></i>"

    }, {
        id: crypto.randomUUID(),
        theProductName: "Smartfon,telefon, gadjet, aksessuarlar",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/K83YTs4SqPeI3Ohx1lN0bDnbiV1Z9EnwZHMr2HsjIlDhmT48cBgn4C0Ve9Br.png",
        checkIcon: "<i class='ri-check-double-line'></i>"

    }, {
        id: crypto.randomUUID(),
        theProductName: "Maishiy texnika",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/yfGs0HUuX5wKnXwPbOyEswpZFzzGhmHdpptTriBTKm01HUxMqTBEg1QA2CQr.png",
        checkIcon: "<i class='ri-check-double-line'></i>"

    }, {
        id: crypto.randomUUID(),
        theProductName: "Barchasi oshxona uchun",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/eCJj0q3ixqzqS3xvZhnMSQnYC1SLTnLB475I5l5ltz6rxi9rUmYauATe5Pa6.png",
        checkIcon: "<i class='ri-check-double-line'></i>"

    }, {
        id: crypto.randomUUID(),
        theProductName: "Sport anjomlari",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/D1UNIE2gMBYHkx9XQl452O6I2jtQOpD4kvhOWQCtr9fuPliQWVSAkN9YXjiQ.png",
        checkIcon: "<i class='ri-check-double-line'></i>"
    },
    {
        id: crypto.randomUUID(),
        theProductName: "Go'zallik va salomatlik",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/Lio8FefcAG352o0hPeqHDkd7TVlr2NQ4ljQAQziRlTjWOz08RiB1fncFbe2D.png",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }, {
        id: crypto.randomUUID(),
        theProductName: "Avto jihozlari",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/xrGNIS4zILNfb5qMXC0nvDLo09QuwdrdXYEKqn7UOEI9PndrjYR1BNX6CQbA.png",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }, {
        id: crypto.randomUUID(),
        theProductName: "Barchasi ofis, uy va bog' uchun",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ZiWkDeTfCnCNHDWZnu0xXtxwkZ6Qe3embHveXzJVRXfdnaJB5sRsnJiU22vS.png",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }, {
        id: crypto.randomUUID(),
        theProductName: "Bolalar uchun o'yinchoqlar va mahsulotlar",
        productImg: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/e6S4NLdIceYAv1zDvwHPVHFWSEMMgUxMwbOjThhsguSxVUKTY6yKbXvwOJ6M.png",
        checkIcon: "<i class='ri-check-double-line'></i>"
    },

]

const products = [
    {
        id: "p1",
        type: "gridChild",
        badge: "-18%",
        img: "https://olcha.uz/image/700x700/products/fvj1vT8wb3D3Fn9eG654PL9rKdvSnFmoYcaYlI4TR70VQbfxowBvzrEN05hy.jpg",
        title: "Redmi 13C (ikkinchi qo'l)",
        oldPrice: "1 742 000 so'm",
        price: "1 428 440 so'm",
        installment: "168 000 so'm x 12oy"
    },
    {
        id: "p2",
        type: "gridChild",
        badge: "-18%",
        img: "https://olcha.uz/image/700x700/products/supplier/stores/1/2023-09-05/ET18UK96Uz4hpSuE9xUIQoKTcoVeT9dXqkTcdOROl4dWqlJhRi3bGhmbpD1K.jpg",
        title: "Huawei nova 11 8/256",
        oldPrice: "1 742 000 so'm",
        price: "1 428 440 so'm",
        installment: "168 000 so'm x 12oy",
        extraClass: "c2"
    },
    {
        id: "p3",
        type: "grid3",
        badge: "-17%",
        img: "https://olcha.uz/image/700x700/products/supplier/stores/1/2023-09-05/t8jAi1x9RKa6pWGEajlnj6qIYjxEdGn8pgTAxGv0POcJeATULnwVyqkUKzw5.jpg",
        title: "Huawei nova 11 8/256 GB Green",
        price: "3 240 000 so'm",
        oldPrice: "3 900 000 so'm",
        installment: "380 000 so'm x 12oy"
    },
    {
        id: "p4",
        type: "grid3",
        badge: "-17%",
        img: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-09-05/vq48GipBCKRQuYab0CmVscCkz94mMPUk3q3uowg9XUN18dIOXKXVK2T2ymTa.jpg",
        title: "Huawei nova 11 8/256 GB Green",
        price: "3 240 000 so'm",
        oldPrice: "3 900 000 so'm",
        installment: "380 000 so'm x 12oy"
    },
    {
        id: "p5",
        type: "grid3",
        badge: "-17%",
        img: "https://olcha.uz/image/700x700/products/supplier/stores/1/2023-09-05/t8jAi1x9RKa6pWGEajlnj6qIYjxEdGn8pgTAxGv0POcJeATULnwVyqkUKzw5.jpg",
        title: "Huawei nova 11 8/256 GB Green",
        price: "3 240 000 so'm",
        oldPrice: "3 900 000 so'm",
        installment: "380 000 so'm x 12oy"
    },
    {
        id: "p6",
        type: "grid3",
        badge: "-17%",
        img: "https://olcha.uz/image/700x700/products/supplier/stores/1/2023-09-05/t8jAi1x9RKa6pWGEajlnj6qIYjxEdGn8pgTAxGv0POcJeATULnwVyqkUKzw5.jpg",
        title: "Huawei nova 11 8/256 GB Green",
        price: "3 240 000 so'm",
        oldPrice: "3 900 000 so'm",
        installment: "380 000 so'm x 12oy"
    }
];

const cards = [
    {
        id: crypto.randomUUID(),
        cardImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-29/v7EZI19OSbVEPuFg3F3xS5iRIjNAjnYsATd8HmHQKrMXvIU4RpwlKiISLVd8.jpg",
        cradHeart: "ri-heart-line",
        cardTables: "ri-bar-chart-line tablitsa",
        cardText: "Xiaomi Redmi Note 14 Pro",
        cardPrice: "3 532 000 so'm",
        cardMonth: "414 000 so'm x 12 oy",
        cardBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }, {
        id: crypto.randomUUID(),
        cardImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-11-28/PK439EIN2oVAvX6ezVPJYOJF8X5v1kzGlRvGhIRy7Nwht9h7qbyRFx89dDVn.png",
        cradHeart: "ri-heart-line",
        cardTables: "ri-bar-chart-line tablitsa",
        cardText: "Apple IPhone 15 Pro Max",
        cardPrice: "16 295 000 so'm",
        cardMonth: "1 909 000 so'm x 12 oy",
        cardBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }, {
        id: crypto.randomUUID(),
        cardImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-03-11/RX3I5bViXa5VL5q2I3h4UlHmlUnianu3RJLG0H99inmN63k2CJ0pxJX168UZ.jpg",
        cradHeart: "ri-heart-line",
        cardTables: "ri-bar-chart-line tablitsa",
        cardText: "Sony PlayStation PS5 Digital",
        cardPrice: "6 365 000 so'm",
        cardMonth: "746 000 so'm x 12 oy",
        cardBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }, {
        id: crypto.randomUUID(),
        cardImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-29/OY5ohuZDkmuAxX40VGTlmr5cDP5HAR64EKCzNmOtXJqdA6rv9N7QkDmCghj9.jpg",
        cradHeart: "ri-heart-line",
        cardTables: "ri-bar-chart-line tablitsa",
        cardText: "Xiaomi Redmi Note 14",
        cardPrice: "2 319 000 so'm",
        cardMonth: "272 000 so'm x 12 oy",
        cardBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }, {
        id: crypto.randomUUID(),
        cardImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-29/97ckzjNsRYY2xIFDrv7C6SYqD84nq4iXBjwlg2ILGVVgjiOYkCcu0zuc793S.jpg",
        cradHeart: "ri-heart-line",
        cardTables: "ri-bar-chart-line tablitsa",
        cardText: "Samsung Galaxy A55",
        cardPrice: "4 553 800 so'm",
        cardMonth: "534 000 so'm x 12 oy",
        cardBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov"
    }, {
        cardImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-29/iupANfMv7Z23H8WOmxokqdIP1xRaJpfex9wn7dBo6Rx7D0LNfJOo5umxEeHV.jpg",
        cradHeart: "ri-heart-line",
        cardTables: "ri-bar-chart-line tablitsa",
        cardText: "Xiaomi Redmi 14C",
        cardPrice: "1 522 000 so'm",
        cardMonth: "179 000 so'm x 12 oy",
        cardBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }, {
        id: crypto.randomUUID(),
        cardImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-04-23/ABacr2NI4l5hkxlswKgANn8aBCZ0oU1cvb8eYW4AX5GS7AxrmJP4NbSVYAyi.jpg",
        cradHeart: "ri-heart-line",
        cardTables: "ri-bar-chart-line tablitsa",
        cardText: "Apple IPhone 16Pro Max",
        cardPrice: "18 444 000 so'm",
        cardMonth: "2 160 000 so'm x 12 oy",
        cardBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }, {
        id: crypto.randomUUID(),
        cardImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-29/aC7oCEK8puWMKfaKeSLXA1lYrhL4YzMZlielrLpFr7CEjHvtsg5GLto7Q4CS.jpg",
        cradHeart: "ri-heart-line",
        cardTables: "ri-bar-chart-line tablitsa",
        cardText: "Samsung Galaxy A16",
        cardPrice: "2 199 000 so'm",
        cardMonth: "258 000 so'm x 12 oy",
        cardBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }, {
        id: crypto.randomUUID(),
        cardImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-29/pmb1oRujJ6jborxYlx6LMVTAey54qGYSQWrae3oUN9BKYccclwfX5MZkGkjj.jpg",
        cradHeart: "ri-heart-line",
        cardTables: "ri-bar-chart-line tablitsa",
        cardText: "Samsung Galaxy A06",
        cardPrice: "1 865 000 so'm",
        cardMonth: "219 000 so'm x 12 oy",
        cardBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }, {
        id: crypto.randomUUID(),
        cardImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-29/v7EZI19OSbVEPuFg3F3xS5iRIjNAjnYsATd8HmHQKrMXvIU4RpwlKiISLVd8.jpg",
        cradHeart: "ri-heart-line",
        cardTables: "ri-bar-chart-line tablitsa",
        cardText: "Xiaomi Redmi Note 14 Pro",
        cardPrice: "3 532 000 so'm",
        cardMonth: "414 000 so'm x 12 oy",
        cardBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    },
]

const cardTexnik = [
    {
        id: crypto.randomUUID(),
        texnikImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-16/CyLviu6FztS1boze9sPutiFk7mBmUwaAhiq90SJfrmGEAyBH5DX1sNL36vJj.jpg",
        texnikHeart: "ri-heart-line",
        texnikTables: "ri-bar-chart-line tablitsa",
        texnikText: "Namlagich va aromadiffuzod 2b1 Hoco HX30",
        texnikPrice: "180 000 so'm",
        texnikMonth: "22 000 so'm x 12 oy",
        texnikBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    },
    {
        id: crypto.randomUUID(),
        texnikImg: "https://olcha.uz/image/700x700/products/67MUFURwbTj1C0y3fbtYD0RZbGlwRXzmM3pOs6SpUNMKsFhcyOqev1xNJNTG.jpg",
        texnikHeart: "ri-heart-line",
        texnikTables: "ri-bar-chart-line tablitsa",
        texnikText: "Namlangan Xiaomi Mi Smart Stelirizator Humidifier S",
        texnikPrice: "1 511 900 so'm",
        texnikMonth: "178 000 so'm x 12 oy",
        texnikBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    },
    {
        id: crypto.randomUUID(),
        texnikImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-10/2fTEtfD4m0ytLgCy0mCxlNdZlwvtGp1bW9fdxQjTCpxOgEAiJ6LRwQOMc0nh.jpg",
        texnikHeart: "ri-heart-line",
        texnikTables: "ri-bar-chart-line tablitsa",
        texnikText: "Konditsaner Artel Everest 12 Inverter ARTIS3AW12BE",
        texnikPrice: "4 872 000 so'm",
        texnikMonth: "573 000 so'm x 12 oy",
        texnikBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    },
    {
        id: crypto.randomUUID(),
        texnikImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-10/2fTEtfD4m0ytLgCy0mCxlNdZlwvtGp1bW9fdxQjTCpxOgEAiJ6LRwQOMc0nh.jpg",
        texnikHeart: "ri-heart-line",
        texnikTables: "ri-bar-chart-line tablitsa",
        texnikText: "Konditsaner Artel Everest 12 Inverter ARTIS3AW12BE (09)",
        texnikPrice: "4 892 000 so'm",
        texnikMonth: "573 000 so'm x 12 oy",
        texnikBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    },
    {
        id: crypto.randomUUID(),
        texnikImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-10/2fTEtfD4m0ytLgCy0mCxlNdZlwvtGp1bW9fdxQjTCpxOgEAiJ6LRwQOMc0nh.jpg",
        texnikHeart: "ri-heart-line",
        texnikTables: "ri-bar-chart-line tablitsa",
        texnikText: "Konditsaner Rulls Sirius 12 Inverter",
        texnikPrice: "3 578 000 so'm",
        texnikMonth: "420 000 so'm x 12 oy",
        texnikBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    },
    {
        id: crypto.randomUUID(),
        texnikImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-10/2fTEtfD4m0ytLgCy0mCxlNdZlwvtGp1bW9fdxQjTCpxOgEAiJ6LRwQOMc0nh.jpg",
        texnikHeart: "ri-heart-line",
        texnikTables: "ri-bar-chart-line tablitsa",
        texnikText: "Konditsaner Ziffler Vigo 12 Inverter",
        texnikPrice: "4 064 000 so'm",
        texnikMonth: "476 000 so'm x 12 oy",
        texnikBtn: "<i class='ri-shopping-cart-line'></i>",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "<i class='ri-check-double-line'></i>"
    }
];

const radarCard = [
    {
        radarID: crypto.randomUUID(),
        btn: "-38%",
        radarImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-07/jdQQlLwyBqRwbfHoKtBSGjkM0CvG5roLC3RGBCHlo2zjCH7mzb82ODbB3He3.jpg",
        heartIcon: "ri-heart-line",
        tableIcon: "ri-bar-chart-line",
        radarText: "Radar-detektor X-COP 7700s Black",
        priceRadar: "1 968 000 so'm",
        oldPriceRadar: "2 968 000 so'm",
        markRadar: "231 000 so'm x 12 oy",
        texnikBtn: "ri-shopping-cart-line",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "ri-check-double-line"
    },
    {
        radarID: crypto.randomUUID(),
        btn: "-43%",
        radarImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-07/RdJxc6HJoXodAUp98xd1u2QXUxEuEZgRlijMpjej9CIiY5j4rSwQMGHZO8Mx.jpg",
        heartIcon: "ri-heart-line",
        tableIcon: "ri-bar-chart-line",
        radarText: "Radar detektor Neoline X-COP 7800s WiFi Black",
        priceRadar: "2 214 000 so'm",
        oldPriceRadar: "3 852 000 so'm",
        markRadar: "260 000 so'm x 12 oy",
        texnikBtn: "ri-shopping-cart-line",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "ri-check-double-line"
    },
    {
        radarID: crypto.randomUUID(),
        btn: "-35%",
        radarImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-07/BNZKWUc7H81qHbWjaoQqForyXrKLI8L18FWOHEbhW4YQuquOIrcanzhyhLVo.jpg",
        heartIcon: "ri-heart-line",
        tableIcon: "ri-bar-chart-line",
        radarText: "Radar-detektor SHO-ME G-1000 Signature Black",
        priceRadar: "1 540 000 so'm",
        oldPriceRadar: "2 360 000 so'm",
        markRadar: "190 000 so'm x 12 oy",
        texnikBtn: "ri-shopping-cart-line",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "ri-check-double-line"
    },
    {
        radarID: crypto.randomUUID(),
        btn: "-40%",
        radarImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-07/WpQah1iCO6puwPxVAT0PVM6t1YyQmapW1YaEl0aCy4TI5Pb0TTEhrciMJluL.jpg",
        heartIcon: "ri-heart-line",
        tableIcon: "ri-bar-chart-line",
        radarText: "Radar-detektor StreetStorm STR-9900EX Black",
        priceRadar: "2 940 000 so'm",
        oldPriceRadar: "4 900 000 so'm",
        markRadar: "367 000 so'm x 12 oy",
        texnikBtn: "ri-shopping-cart-line",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "ri-check-double-line"
    },
    {
        radarID: crypto.randomUUID(),
        btn: "-33%",
        radarImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-07/6BbzlC3vRAlX25Z10j3IK9R1egNtG61Um3xO5m4snkM3L3XF5jYPyKuuuyqf.jpg",
        heartIcon: "ri-heart-line",
        tableIcon: "ri-bar-chart-line",
        radarText: "Radar-detektor Supra DRS-iG77VST Black",
        priceRadar: "1 328 000 so'm",
        oldPriceRadar: "1 980 000 so'm",
        markRadar: "166 000 so'm x 12 oy",
        texnikBtn: "ri-shopping-cart-line",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "ri-check-double-line"
    },
    {
        radarID: crypto.randomUUID(),
        btn: "-37%",
        radarImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-07/VVchpHMms7wk82m6sn9Rm24MHKtF930CW9Zk1HQvIEwHU6Fp6yqjdVlSSACF.jpg",
        heartIcon: "ri-heart-line",
        tableIcon: "ri-bar-chart-line",
        radarText: "Radar-detektor Neoline X-COP 9700 Black",
        priceRadar: "3 150 000 so'm",
        oldPriceRadar: "5 000 000 so'm",
        markRadar: "392 000 so'm x 12 oy",
        texnikBtn: "ri-shopping-cart-line",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "ri-check-double-line"
    },
    {
        radarID: crypto.randomUUID(),
        btn: "-30%",
        radarImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-07/PZVlUORpAsYIS0nYE8flS9JmMbqJLV0fscTXsnANIImkmJZDDFZKC6TxGvO9.jpg",
        heartIcon: "ri-heart-line",
        tableIcon: "ri-bar-chart-line",
        radarText: "Radar-detektor Cobra RAD 480i Black",
        priceRadar: "1 820 000 so'm",
        oldPriceRadar: "2 600 000 so'm",
        markRadar: "227 000 so'm x 12 oy",
        texnikBtn: "ri-shopping-cart-line",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "ri-check-double-line"
    },
    {
        radarID: crypto.randomUUID(),
        btn: "-41%",
        radarImg: "https://olcha.uz/image/400x400/products/cdn_1/supplier/stores/1/2025-07-07/nI4JjB74J3Pfydk4fFfY40AQAksrrxBYx5U0fjWH6LPf6Ea9NXHenRzJY8kj.jpg",
        heartIcon: "ri-heart-line",
        tableIcon: "ri-bar-chart-line",
        radarText: "Radar-detektor PlayMe P570 Black",
        priceRadar: "1 670 000 so'm",
        oldPriceRadar: "2 830 000 so'm",
        markRadar: "208 000 so'm x 12 oy",
        texnikBtn: "ri-shopping-cart-line",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "ri-check-double-line"
    },
    {
        radarID: crypto.randomUUID(),
        btn: "-29%",
        radarImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-07/Fkl4isDetRXYOGEz4k10lNnneUXRQKSdPGw2Asafe2ydLno5cy8xrbt0W2q2.jpg",
        heartIcon: "ri-heart-line",
        tableIcon: "ri-bar-chart-line",
        radarText: "Radar-detektor Beltronics GT-360 Black",
        priceRadar: "4 200 000 so'm",
        oldPriceRadar: "5 900 000 so'm",
        markRadar: "525 000 so'm x 12 oy",
        texnikBtn: "ri-shopping-cart-line",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "ri-check-double-line"
    },
    {
        radarID: crypto.randomUUID(),
        btn: "-32%",
        radarImg: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-07-07/1aP6S6rQt1UStZTJXpXzZ0Ydsf3HZte6C3P1MYLzcRGC5WRNPuZ8vmt45gwh.jpg",
        heartIcon: "ri-heart-line",
        tableIcon: "ri-bar-chart-line",
        radarText: "Radar-detektor Escort MAX 3 Black",
        priceRadar: "5 500 000 so'm",
        oldPriceRadar: "8 100 000 so'm",
        markRadar: "687 000 so'm x 12 oy",
        texnikBtn: "ri-shopping-cart-line",
        cardBtn2: "Muddatli to'lov",
        checkIcon: "ri-check-double-line"
    }
];



document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn3")) {
        const productId = e.target.dataset.id;
        const product = cards.find(c => c.id === productId);

        if (product) {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            console.log("Saqlangan product:", product);
            window.location.href = "../html/product_details.html";
        }
    }
});

document.addEventListener("click", (e) => {
    const heart = e.target.closest(".heart");
    if (!heart) return;
    heart.classList.toggle("activs");
    heart.classList.toggle("ri-heart-line");
    heart.classList.toggle("ri-heart-fill");
});

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn1");
    if (!btn) return;

    const checkBtn = btn.parentElement.querySelector(".checkBtn");

    btn.classList.add("none");

    checkBtn.classList.remove("none");
    checkBtn.classList.add("activeBtn");
    noPlus.textContent = +1;
    i++
});


language.addEventListener("click", () => {
    rus.classList.toggle("active")
})

dropdownIcon.addEventListener("click", () => {
    ulDropdowns.classList.toggle("activeDrop")
})

dropdownIcon2.addEventListener("click", () => {
    ulDropdowns2.classList.toggle("activeDrop")
})

dropdown_menu2.addEventListener("click", () => {
    dropdonwBtn2.classList.toggle("activeBtn")
})

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("active")
    btn.classList.toggle("open");
})

mobileMenu.addEventListener("click", () => {
    menu.classList.remove("active")
    btn.classList.remove("open");
})


// cardlar
card.forEach(item => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("cradSlider");

    cardEl.innerHTML = `
    <div>
      <img src="${item.productImg}" alt="${item.theProductName}">
    </div>
    <h3>${item.theProductName}</h3>
  `;

    cardEl.addEventListener("click", () => {
        window.location.href = `../html/category.html?img=${encodeURIComponent(item.productImg)}&name=${encodeURIComponent(item.theProductName)}`;
    });

    section.appendChild(cardEl);
});


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

// menu btn
btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    btn.classList.toggle("open");
});

function createGridBox(items) {
    const box = document.createElement("div");
    box.classList.add("GridBox");

    items.forEach(item => {
        const child = document.createElement("div");
        child.classList.add("gridChild");
        if (item.extraClass) child.classList.add(item.extraClass);

        child.innerHTML = `
          <div>
            <button>${item.badge}</button>
          </div>
          <img src="${item.img}" alt="product image">
          <div class="gridBOx2">
            <div class="gridMini gridPhone">
              <p>${item.title}</p>
              <i class="ri-heart-line"></i>
            </div>
            <div class="gridMini2">
              <p>${item.oldPrice}</p>
              <i class="ri-bar-chart-line"></i>
            </div>
            <h3>${item.price}</h3>
            <p class="math">${item.installment}</p>
          </div>

        `;

        box.appendChild(child);
    });

    return box;
}

function createGrid3(item) {
    const card = document.createElement("div");
    card.classList.add("grid3");

    card.innerHTML = `
      <i class="heart ri-heart-line"></i>
      <span class="price">${item.badge}</span>
      <img src="${item.img}" alt="product image">
      <div class="gridBOx2">
        <div class="gridMini gridPhone">
          <p>${item.title}</p>
        </div>
        <div class="gridMini2">
        <p>${item.oldPrice}</p>
        <i class="ri-bar-chart-line tablitsa"></i>
        </div>
        <h3>${item.price}</h3>
        <p class="math">${item.installment}</p>
      </div>
            <div class="gridBtn">
                <button class="btn1"><i class="ri-shopping-cart-line"></i></button>
                <button class="checkBtn none"><i class="ri-check-double-line"></i></button>
                <a href="../html/product_details.html"><button class="btn3">Muddatli to'lov</button></a>
          </div>
    `;



    return card;
}

function creatCard(item) {
    const cardGrid = document.createElement("div");
    cardGrid.classList.add("cardDiv");

    cardGrid.innerHTML = `
        <div class="cardImg">
            <img src="${item.cardImg}" alt="${item.cardText}">
            <div class="icons">
                <i class="heart ${item.cradHeart}"></i>
                <i class="${item.cardTables}"></i>
            </div>
        </div>
        <h2>${item.cardText}</h2>
        <p>${item.cardPrice}</p>
        <mark>${item.cardMonth}</mark>
        <br /><br /><br />
        <div class="cardBtn">
            <button class="btn1">${item.cardBtn}</button>
            <button class="checkBtn none"><i class="ri-check-double-line"></i></button>
            <button class="btn3" data-id="${item.id}">${item.cardBtn2}</button>
        </div>
    `;

    document.querySelector(".cradSection").appendChild(cardGrid);
}

cards.forEach(item => creatCard(item));

function texnikCard(item) {
    const texnikDiv = document.createElement("div");
    texnikDiv.classList.add("texnikaCard");

    texnikDiv.innerHTML = `
        <img src="${item.texnikImg}" alt="${item.texnikText}">
        <div class="icons">
            <i class="heart ${item.texnikHeart}"></i>
            <i class="${item.texnikTables}"></i>
        </div>
        <p>${item.texnikText}</p>
        <p>${item.texnikPrice}</p>
        <mark class="mark">${item.texnikMonth}</mark>
        <br /><br /><br />
        <div class="texnikbtn">
            <button class="btn1">${item.texnikBtn}</button>
                <button class="checkBtn none"><i class="ri-check-double-line"></i></button>
            <button class="btn3" data-id="${item.id}">Muddatli to'lov</button>
        </div>
    `;

    document.querySelector(".texnika").appendChild(texnikDiv);
}

cardTexnik.forEach(item => texnikCard(item));


function radarcard(item) {
    const radarDiv = document.createElement("div");
    radarDiv.classList.add("texnikaCard", "cardDiv");

    radarDiv.innerHTML = `
      <div class="chegirma">
          <button>${item.btn}</button>
      </div>
      <img src="${item.radarImg}" alt="${item.radarText}">
      <div class="icon">
          <i class="${item.heartIcon} heart"></i>
          <i class="${item.tableIcon} tablitsa"></i>
      </div>
      <p>${item.radarText}</p>
      <div class="priceRadar">
          <h3>${item.priceRadar}</h3>
          <h4>${item.oldPriceRadar}</h4>
      </div>
      <mark class="mark">${item.markRadar}</mark>
      <br><br><br>
      <div>
          <button class="btn1"><i class="${item.texnikBtn}"></i></button>
          <button class="checkBtn none"><i class="${item.checkIcon}"></i></button>
          <button class="btn3" data-id="${item.radarID}">${item.cardBtn2}</button>
      </div>
  `;

    document.querySelector(".radarCard").appendChild(radarDiv);
}

radarCard.forEach(item => radarcard(item));


function renderProducts(containerSelector = ".container.gridParent") {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error("Container topilmadi:", containerSelector);
        return;
    }

    container.innerHTML = "";

    const firstTwo = products.filter(p => p.type === "gridChild").slice(0, 2);
    if (firstTwo.length) {
        const gridBox = createGridBox(firstTwo);
        container.appendChild(gridBox);
    }

    const rest = products.filter(p => p.type === "grid3");
    rest.forEach(item => {
        const el = createGrid3(item);
        container.appendChild(el);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});

// slider
(function () {
    const root = document.getElementById('slider');
    const track = root.querySelector('.slides');
    const slides = Array.from(root.querySelectorAll('.slide'));
    const prevBtn = root.querySelector('[data-dir="-1"]');
    const nextBtn = root.querySelector('[data-dir="1"]');
    const dotsWrap = root.querySelector('.dots');
    const autoplayToggle = document.getElementById('autoplayToggle');


    let i = 0;
    let x0 = null, dx = 0, isDown = false;
    let timer = null; const interval = 3500; const threshold = 40;


    // build dots
    slides.forEach((_, idx) => {
        const b = document.createElement('button');
        b.className = 'dot' + (idx === 0 ? ' active' : '');
        b.setAttribute('aria-label', `Go to slide ${idx + 1}`);
        b.addEventListener('click', () => go(idx));
        dotsWrap.appendChild(b);
    });


    function update() {
        track.style.transform = `translateX(${-i * 100}%)`;
        dotsWrap.querySelectorAll('.dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
    }
    function clamp(n) { return (n + slides.length) % slides.length }
    function go(n) { i = clamp(n); update(); }
    function step(dir) { go(i + dir) }


    prevBtn.addEventListener('click', () => step(-1));
    nextBtn.addEventListener('click', () => step(1));


    root.tabIndex = 0;
    root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
    });


    const viewport = root.querySelector('.viewport');
    viewport.addEventListener('pointerdown', (e) => { isDown = true; x0 = e.clientX; dx = 0; viewport.setPointerCapture(e.pointerId); track.style.transition = 'none'; });
    viewport.addEventListener('pointermove', (e) => {
        if (!isDown) return; dx = e.clientX - x0; track.style.transform = `translateX(calc(${-i * 100}% + ${dx}px))`;
    });
    viewport.addEventListener('pointerup', finish); viewport.addEventListener('pointercancel', finish);
    function finish() {
        if (!isDown) return; isDown = false; track.style.removeProperty('transition');
        if (Math.abs(dx) > threshold) step(dx < 0 ? 1 : -1); else update(); dx = 0;
    }
})();

localStorage.setItem("card", JSON.stringify(card));

const savedCard = JSON.parse(localStorage.getItem("card"));

const selectedId = "shuIDniOling";
const selectedCard = savedCard.find(item => item.id === selectedId);

function goToProduct(id) {
    console.log("Go to:", id);
    window.location.href = "../html/product_details.html?id=" + id;
}

setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
}, 1000);

// time
function clock() {
    var date = new Date()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    if (hour < 12) {
        hour -= 12
    }

    document.querySelector("#hours").innerHTML = hour
    document.querySelector("#minutes").innerHTML = minute
    document.querySelector("#seconds").innerHTML = second
}
function addToCart(item) {
    cart.push(item);
    count++;
    cartCount.textContent = count;
}

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn1");
    if (!btn) return;

    const parent = btn.closest(".gridChild, .grid3, .cardDiv, .texnikaCard", "radarCard");
    if (!parent) return;

    const product = {
        title: parent.querySelector("p, h2")?.textContent || "No name",
        price: parent.querySelector("h3, .cardPrice, .texnikPrice")?.textContent || "",
        img: parent.querySelector("img")?.src || ""
    };

    addToCart(product);

    btn.classList.add("none");
    const checkBtn = parent.querySelector(".checkBtn");
    if (checkBtn) checkBtn.classList.remove("none");
});

cartIcon.addEventListener("click", () => {
    cartModal.style.display = "flex";
    cartItems.innerHTML = "";

    cart.forEach(item => {
        cartItems.innerHTML += `
      <div class="cartItem">
        <img src="${item.img}" width="50">
        <p>${item.title} - ${item.price}</p>
      </div>
    `;
    });
});

closeModal.addEventListener("click", () => {
    cartModal.style.display = "none";
});

clear.addEventListener("click", () => {
    cart = [];
    cartItems.innerHTML = "";
    cartCount.innerHTML = 0
});

renderRadarCards();

