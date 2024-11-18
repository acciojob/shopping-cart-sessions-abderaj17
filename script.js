// This is the boilerplate code given for you
// You can modify this code
// Product data
	let cart = [];
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	const cartList = document.getElementById("cart-list");

	cartList.innerHTML ='';
	cart.forEach((productId)=>{
		const product = products.find((product)=> product.id== productId);

		const li = document.createElement("li");
		li.innerHTML = `${product.name} - $${product.price} <button class="remove-from-cart-btn" data-id="${product.id}">Remove</button>`;

		cartList.appendChild(li);
	});
	let buttons = document.getElementsByClassName('remove-from-cart-btn');
	for(let i = 0; i<buttons.length; i++){
		buttons[i].addEventListener('click', function(){
	let productId = this.getAttribute('data-id');
			removeFromCart(productId);
		})
	}
}

// Add item to cart
function addToCart() {
	let buttons = document.getElementsByClassName('add-to-cart-btn');
	for(let i = 0; i<buttons.length; i++){
		buttons[i].addEventListener('click', function(){
			let productId = this.getAttribute('data-id');
			const ulList = document.getElementById('cart-list');
				console.log(`Product ${productId} added to cart.`)
			cart.push(productId);
			renderCart();
		});
	}
} 

// Remove item from cart
function removeFromCart(productId) {
	// renderCart();
	let index = cart.indexOf(productId);

	if(index !== -1){
		cart.splice(index, 1);
	}
	renderCart();
	
}

// Clear cart
function clearCart() {
	const clearBtn = document.getElementById('clear-cart-btn');
	clearBtn.addEventListener('click', ()=>{
		cart=[];
		renderCart();		
	})
}

// Initial render

renderProducts();
addToCart();
renderCart();
clearCart();
