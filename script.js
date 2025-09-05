'use strict';
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('menu');
const menuBtn = document.querySelector(".menuBtn")
const closeBtn = document.querySelector(".close")
const section = document.querySelector(".Cadr_slider_parent");

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



card.forEach(item => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("cradSlider");

    cardEl.innerHTML = `
    <div>
      <img src="${item.productImg}" alt="${item.theProductName}">
    </div>
    <h3>${item.theProductName}</h3>
  `;

    section.appendChild(cardEl);
});

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


btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('show');
    btn.classList.toggle('open');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('show');
    btn.classList.remove('open');
});

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
    let timer = null; const interval = 3500; const threshold = 40; // px


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


    function start() { stop(); timer = setInterval(() => step(1), interval); }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    autoplayToggle.addEventListener('change', () => autoplayToggle.checked ? start() : stop());
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', () => autoplayToggle.checked && start());


    update();
    if (autoplayToggle.checked) start();


    window.sliderAPI = { go, next: () => step(1), prev: () => step(-1), pause: stop, play: start };

})();
