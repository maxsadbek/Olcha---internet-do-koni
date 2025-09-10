const product = JSON.parse(localStorage.getItem("selectedProduct"));
const container = document.querySelector(".product-details");
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

const navs = document.createElement("div");
navs.className = "container";

navs.appendChild(navbar);
document.body.prepend(navs);

document.body.prepend(navbar);

// menu btn
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
  btn.classList.toggle("open");
});


if (product) {
  container.innerHTML = `
            <h2 class="productDetailTetx">${product.cardText}</h2>
            <img src="${product.cardImg}" alt="" class="productImg">
            <p>${product.cardPrice}</p>
            <small>${product.cardMonth}</small>
        `;
} else {
  container.innerHTML = "<p>Mahsulot topilmadi </p>";
}

setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
}, 1000);