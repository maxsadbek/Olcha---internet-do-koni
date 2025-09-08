const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(p => p.id === productId);

const container = document.querySelector(".gridParent");

if (!product) {
    container.innerHTML = "<h2>Mahsulot topilmadi 😢</h2>";
} else {
    container.innerHTML = `
    <div class="product-detail">
      <img src="${product.img}" alt="${product.title}">
      <h1>${product.title}</h1>
      <p class="old-price">${product.oldPrice}</p>
      <h2 class="price">${product.price}</h2>
      <p class="installment">${product.installment}</p>
      <span class="badge">${product.badge}</span>
    </div>
  `;
}
