$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (response) {

    /* >>>>>>>>>>>>>>> Header Code Start.. <<<<<<<<<<<<<<*/

   

    /*>>>>>>>>>>>> Header Code End. <<<<<<<<<<<<<<<<*/

    /* >>>>>>>>>>>>>>> Sections Code Start.<<<<<<<<<<<<<<<<*/
    var clothingSectionElement = document.getElementById("clothing-grid");
    var accessoriesSectionElement = document.getElementById("accessory-grid");
    


// <a href="http://127.0.0.1:5500/ASSIGNMENT/06-final-assignment/product-details.html?p="></a>
    

    for (var i = 0; i < response.length; i++) {
        if (response[i].isAccessory == true) {
            accessoriesSectionElement.innerHTML += `
            <div class="product-card" onclick="cartFunction(${i+1})">
            <img class="product-image" src="${response[i].preview}" alt="Men Navy Blue Solid Sweatshirt Pic"></a>
            <div class="product-meta">
            <h4>${response[i].name}</h4>
            <h5>${response[i].brand}</h5>
            <p>Rs :${response[i].price}</p>
            </div>
            </div>
            `
        } else {
            clothingSectionElement.innerHTML += `
            <div class="product-card"  onclick="cartFunction(${i+1})">
            
            <img class="product-image" src="${response[i].preview}" alt="Men Navy Blue Solid Sweatshirt Pic"></a>
            <div class="product-meta">
            <h4>${response[i].name}</h4>
            <h5>${response[i].brand}</h5>
            <p>Rs :${response[i].price}</p>
            </div>
            </div>
            `
        }
    }

    /*>>>>>>>>>>>>>>> Sections Code End..<<<<<<<<<<<<<<<<<*/


    /*>>>>>>>>>>>>>>>> Footer Code Start..<<<<<<<<<<<<<<<<<*/

   


})


var productElement = document.getElementById("product");

function cartFunction(id){
   // console.log("cartFunction is clicked")
    location.assign("http://127.0.0.1:5500/JavaScript-Final-Assignment/ASSIGNMENT/06-final-assignment/product-details.html?p="+id);

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+id, function (response) {
    // console.log(response);




    productElement.innerHTML = `

    
    <div class="left-column">
    <img src="${response.preview}"></div>
    <div class="right-column">
    <div class="product-description">
    <h1>${response.name}</h1>
    <h4>${response.brand}</h4>
    <h2>Price : Rs ${response.price}</h2>
    <div class="description">
    <h3>Description</h3>
    <p>${response.description}</p>
    </div>
    <div class="product-preview">
    <h3>Product Preview</h3>
    <div class="preview-image">
    <img src="${response.photos[0]}" class="active">
    <img src="${response.photos[1]}" class="active">
    <img src="${response.photos[2]}" class="active">
    <img src="${response.photos[3]}" class="active">
    <img src="${response.photos[4]}" class="active">
    </div>
    </div>
    </div>
    </div>
    

    `


})


}


// $(document).ready(function(){
//     $('.center').slick({
//         centerMode: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         dots: true,
//         arrows: false,
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 3
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 1
//             }
//           }
//         ]
//     })
// })


//carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
  items:1,
  loop:true,
  margin :10,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true
})

// owl.owlCarousel({
//     items:1, 
//   // items change number for slider display on desktop
  
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });
