// ===== 加入購物車 =====
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const found = cart.find(item => item.id === product.id);
  
    if (found) {
      found.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('已加入購物車');
}
  
// ===== 讀取購物車 =====
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ===== 更新購物車 =====
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
