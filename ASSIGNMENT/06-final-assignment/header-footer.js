var headerElement = document.getElementById("topbar");
headerElement.innerHTML += ` 
<div id="left-menu">
<div id="logo">
<a href="http://127.0.0.1:5500/ASSIGNMENT/06-final-assignment/home-page.html">
<span>Shop</span>lane</a>
</div>
<a href="#clothing-section">Clothing</a>
<a href="#accessory-section">Accessories</a>
</div>
<div id="search-wrapper">
<i class="fas fa-search"></i>
<input id="search-box" type="text" name="search" placeholder="Search for Clothing and Accessories"/>
</div>
<div id="right-menu">
<div id="cart-wrapper">
    <p id="cart-count">0</p>
    <a href="http://127.0.0.1:5500/ASSIGNMENT/06-final-assignment/checkout-page.html"><i class="fas fa-shopping-cart"></i></a>
</div>
<img src="https://test-hosting-8f9bf.web.app/assets/avatar.jpg" />
</div>
`

var footerElement = document.getElementById("footer");
footerElement.innerHTML += `
 <div>
        <p class="footer-heading">Online Store</p>
        <a href="#" class="footer-link">Men Clothing</a>
        <a href="#" class="footer-link">Women Clothing</a>
        <a href="#" class="footer-link">Men Accessories</a>
        <a href="#" class="footer-link">Women Accessories</a>
    </div>
    <div>
        <p class="footer-heading">Helpful Links</p>
        <a href="#" class="footer-link">Home</a>
        <a href="#" class="footer-link">About</a>
        <a href="#" class="footer-link">Contact</a>
    </div>
    <div>
        <p class="footer-heading">Partners</p>
        <a href="#" class="footer-link">Zara</a>
        <a href="#" class="footer-link">Pantaloons</a>
        <a href="#" class="footer-link">Levis</a>
        <a href="#" class="footer-link">UCB</a>
        <a href="#" class="footer-link">+ Many More</a>
    </div>
    <div>
        <p class="footer-heading">Address</p>
        <p href="#" class="footer-link">Building 101</p>
        <p href="#" class="footer-link">Central Avenue</p>
        <p href="/" class="footer-link">LA - 902722</p>
        <p href="#" class="footer-link">United States</p>
    </div>
 `

 var productsFromLocalStorage = JSON.parse(localStorage.getItem("product-lists"));
 var cardCount =document.getElementById("cart-count")
 console.log(cardCount);
 if(productsFromLocalStorage==null){

    cardCount.innerHTML = 0;
 }else{
    
    cardCount.innerHTML = productsFromLocalStorage.length;
 }
 