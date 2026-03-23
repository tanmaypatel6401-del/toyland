let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(productName + " added to cart!");
}

const products = [
    { name: "Teddy Bear", price: "$10" },
    { name: "RC Car", price: "$25" },
    { name: "Lego Set", price: "$30" },
];

const container = document.getElementById("featuredProducts");

if (container) {
    container.innerHTML = products.map(p => `
        <div class="category-card">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <button onclick="addToCart('${p.name}', '${p.price}')" class="btn">
                Add to Cart
            </button>
        </div>
    `).join("");
}