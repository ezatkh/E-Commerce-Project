const ecommerce=Ecommerce()

document.getElementById("about").addEventListener('click', function(){  
    ecommerce.aboutUs() });

document.getElementById("products").addEventListener('click', function(){  
    ecommerce.myProducts() });

document.getElementById("addToCart").addEventListener('click', function(){ 
    ecommerce.myCart() });
