document.addEventListener("DOMContentLoaded", () => {
  const productData = localStorage.getItem("selectedProduct");
  if (productData) {
    const product = JSON.parse(productData);
    document.querySelector(".product-title").textContent = product.cardText;
    document.querySelector(".product-price").textContent = product.cardPrice;
    document.querySelector(".product-img").src = product.cardImg;
  }
});