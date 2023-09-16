
var productELement = document.getElementById("product");


var productId = window.location.search.split('=')[1];

var productData = [];

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId, function (data) {
    // addCart(data);

    productELement.innerHTML += `
<div class="product-wrapper">
                <div id="product-image">
                    <div class="image-wrapper">
                        <img id="product-preview" src="${data.preview}">
                    </div>
                </div>
                <div id="product-details">
                    <h1 id="product-title">${data.name}</h1>
                    <h1 id="product-brand">${data.brand}</h1>
                    <h4 class="section-heading">Price: Rs <p id="product-price">${data.price}</p></h4>
                    <h4 class="section-heading">Description</h4>
                    <p id="description">${data.description}</p>
                    <h4 class="section-heading">Product Preview</h4>
                    <div id="product-images">
                    </div>
                    <button  id="btn-add-to-cart" >Add to Cart</button>
                </div>
            </div> 
            `;


    var addToCartButton = document.getElementById("btn-add-to-cart");
    addToCartButton.addEventListener("click", function () {
        addCart(data); // Pass the 'data' object to the addCart function
    });


    var productImages = document.getElementById("product-images");
    var smallPhotos
    for (var i = 0; i < data.photos.length; i++) {

        if (i == 0) {
            smallPhotos = data.photos[i];;
            productImages.innerHTML += `
                    <img  onclick="applyActiveCard(${i})"src="${data.photos[i]}" class="active-image" id="img${i}"  >`
        }
        else {
            smallPhotos = data.photos[i];
            productImages.innerHTML += `
                    <img onclick="applyActiveCard(${i})" src="${data.photos[i]}" id="img${i}"  >`
        }


    }


})

var productsFromLocalStorage = JSON.parse(localStorage.getItem("product-lists"));

function addCart(data) {
    var productsFromLocalStorage = JSON.parse(localStorage.getItem("product-lists"));
    var obj = {
        id: data.id,
        name: data.name,
        price: data.price,
        preview: data.preview
    }
    if (productsFromLocalStorage == null) {
        var productList = [];
        productList.push(obj);
        localStorage.setItem("product-lists", JSON.stringify(productList));
    }
    else {
        productsFromLocalStorage.push(obj)
        localStorage.setItem("product-lists", JSON.stringify(productsFromLocalStorage))

    }
    var checkOutCard = document.getElementById("cart-count");
    if(productsFromLocalStorage){
        for (var i = 0; i < productsFromLocalStorage.length; i++) {
            checkOutCard.innerHTML = productsFromLocalStorage.length;
        }
    }else{
        checkOutCard.innerHTML ="1";
    }
    $('#btn-add-to-cart').addClass('bigger');
    setTimeout(function () {
        $('#btn-add-to-cart').removeClass('bigger');
    }, 200)
}




function applyActiveCard(id) {
    console.log(id);
    $(".active-image").removeClass("active-image");
    $("#img" + id).addClass("active-image");
    var productPreviewElement = document.getElementById("product-preview");
    var productImageElement = document.getElementById("img" + id);
    productPreviewElement.src = productImageElement.src;
}



