const Ecommerce=function(){
    let cart=[];
    let products=[
        {
            name:"Arial",
            price:51,
            img:"https://lebnenmarket.com/9561-large_default/ariel-original-washing-powder-4kg-20.jpg"
        },
        {
            name:"Nutella",
            price:17,
            img:"https://m.media-amazon.com/images/I/61cBqMZKixL._SL1000_.jpg"
        },
        {
            name:"Rice",
            price:25,
            img:"https://cdn.shopify.com/s/files/1/0550/5010/9134/products/Abu-Kass-Basmati-Rice-Talaby.jpg?v=1645080365"
        },
        {
            name:"colon",
            price:36,
            img:"https://care4mall.online/wp-content/uploads/2021/09/gbrg4.jpg"
        },
        {
            name:"Milk",
            price:6,
            img:"https://karaz.ps/wp-content/uploads/2022/06/7290000042503.jpg"
        }
    ];

    const aboutUs=()=>{
        document.getElementById("content").innerHTML=""
        document.getElementById("content").append("aboutUs")
    }
    const myProducts=()=>{
        document.getElementById("content").innerHTML=""
        document.getElementById("content").append(render(getProducts))
    }
    const myCart=()=>{
        document.getElementById("content").innerHTML=""
        document.getElementById("content").append("myCart")
    }


    return{
        aboutUs:aboutUs,
        myProducts:myProducts,
        myCart:myCart
    }

}

