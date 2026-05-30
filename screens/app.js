const products = [

{
id:1,
name:"Samsung TV",
category:"electronics",
buyPrice:25000,
exchangePrice:18000,
image:"https://picsum.photos/300/200?1",
description:"42 inch smart TV"
},

{
id:2,
name:"Wooden Sofa",
category:"furniture",
buyPrice:15000,
exchangePrice:10000,
image:"https://picsum.photos/300/200?2",
description:"Luxury sofa set"
},

{
id:3,
name:"Microwave",
category:"electronics",
buyPrice:8000,
exchangePrice:5000,
image:"https://picsum.photos/300/200?3",
description:"LG microwave"
},

{
id:4,
name:"Dining Table",
category:"furniture",
buyPrice:12000,
exchangePrice:8500,
image:"https://picsum.photos/300/200?4",
description:"6 seater table"
},

{
id:5,
name:"Cooker",
category:"household",
buyPrice:4500,
exchangePrice:3000,
image:"https://picsum.photos/300/200?5",
description:"Pressure cooker"
}

];

const container = document.getElementById("products");

function renderProducts(items){

container.innerHTML="";

items.forEach(product=>{

container.innerHTML += `

<div class="card">

<img src="${product.image}">

<div class="card-body">

<h3>${product.name}</h3>

<p>${product.description}</p>

<button class="buy-btn">
Buy Ksh ${product.buyPrice}
</button>

<button class="exchange-btn">
Exchange Ksh ${product.exchangePrice}
</button>

</div>

</div>

`;

});

}

renderProducts(products);

const categoryButtons =
document.querySelectorAll(".categories button");

categoryButtons.forEach(button=>{

button.addEventListener("click",()=>{

document
.querySelector(".active")
.classList.remove("active");

button.classList.add("active");

const category =
button.dataset.category;

if(category==="all"){
renderProducts(products);
return;
}

const filtered =
products.filter(
item=>item.category===category
);

renderProducts(filtered);

});

});