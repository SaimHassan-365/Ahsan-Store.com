// Carts for each shop
let mobilesCart = [];
let clothesCart = [];
let stationaryCart = [];

// Function to add product to cart
function addToCart(productName, shop) {
  if (shop === 'mobiles') {
    mobilesCart.push(productName);
    alert(`${productName} added to Mobiles Cart`);
  } else if (shop === 'clothes') {
    clothesCart.push(productName);
    alert(`${productName} added to Clothes Cart`);
  } else if (shop === 'stationary') {
    stationaryCart.push(productName);
    alert(`${productName} added to Stationary Cart`);
  }
}