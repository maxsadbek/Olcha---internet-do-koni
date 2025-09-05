'use strict';
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('menu');
const menuBtn = document.querySelector(".menuBtn")
const closeBtn = document.querySelector(".close")

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