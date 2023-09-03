
var productsFromLocalStorage = JSON.parse(localStorage.getItem("product-lists"));
console.log(productsFromLocalStorage);
var totalAmount = 0
for (var i = 0; i < productsFromLocalStorage.length; i++) {
    totalAmount += parseInt(productsFromLocalStorage[i].price);
}
console.log(totalAmount);
var mainSectionElement = document.getElementById("main-section");

console.log(mainSectionElement);


mainSectionElement.innerHTML += `
    <h1 id="main-heading">Checkout</h1>
            <div id="content-wrapper">
                <div id="card-list">
                <h3 class="section-heading">Total Items: <span id="item-count">${productsFromLocalStorage.length}</span></h3>
                   
                    
                </div>

                <div>
                    <h3 class="section-heading">Total Amount</h3>
                    <p>Amount: Rs<span id="total-amount">${totalAmount}</span></p>
                    <button id="btn-place-order"onclick="placeOrder()">Place Order</button>
                </div>
            </div>
    
    `





var cardList = document.getElementById("card-list");

console.log(cardList);


for (var i = 0; i < productsFromLocalStorage.length; i++) {

    var count = 0;
    if (productsFromLocalStorage[i].id == productsFromLocalStorage[i].id) {
        count++;
    }

    cardList.innerHTML += `  <div class="checkout-card">
                <div><img class="checkout-product-img"
                        src="${productsFromLocalStorage[i].preview}">
                </div>
                <div>
                    <h4>${productsFromLocalStorage[i].name}</h4>
                    <p>x${count}</p>
                    <p><span>Amount: Rs </span><span>${productsFromLocalStorage[i].price}</span></p>
                    <button class="remove-btn" onclick="removeFromCart(${i})">Remove </button>
                </div>
        `
}

function removeFromCart(i) {
    productsFromLocalStorage.splice(i, 1);
    localStorage.setItem("product-lists", JSON.stringify(productsFromLocalStorage));
    location.reload();
}



function placeOrder() {
    location.assign("http://127.0.0.1:5500/ASSIGNMENT/06-final-assignment/order-page.html")

}; 
