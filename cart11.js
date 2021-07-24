
if (localStorage.getItem("cart") == null) {
    
    let show = document.getElementById("cart-added2")

    let noproduct = document.createElement("div");

    let img_div = document.createElement("div");
    let img = document.createElement("img");
    img.src = "https://www.pepperfry.com/images/svg/empty-cart.svg";
    img_div.append(img);

    let p_div = document.createElement("div")
    let p_span = document.createElement("span");
    p_span.innerHTML = `Your Shopping Cart Is Empty`;
    p_div.append(p_span);

    let b_div = document.createElement("div")
    let b_btn = document.createElement("button");
    b_btn.innerHTML = `<span>CONTINUE SHOPPING<span>`;
    b_btn.addEventListener("click", function () {
        window.location.href = "allSofas.html";   
    })
    b_div.append(b_btn);

    noproduct.append(img_div, p_div, b_div);

    show.append(noproduct);

}
else {
    
    let Addproduct = JSON.parse(localStorage.getItem("cart"))   //JSON.parse(Addproduct));
    
    let addedproduct = document.getElementById("cart-added");

    let cart_home_div = document.createElement("div");

    let body_item_div = document.createElement("div");
    
    Addproduct.forEach(function(el){
        let body_item = document.createElement("div");
        let item = document.createElement("div");

        let img_div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.img;
        img_div.append(img);

        let data_div = document.createElement("div");
        
        let name_div = document.createElement("div");
        let name = document.createElement("span");
        name.innerHTML = `${el.name} - ${el.brand}`;
        name_div.append(name);

        let price_div = document.createElement("div");
        let price = document.createElement("div");
        price.innerHTML = `<br/><a>Retail Price</a>... <span>₹${el.cutPrice}</span><br/><a>Offer Price</a>... <btn>₹${el.price}</btn>`;
        price_div.append(price);

        let a_div = document.createElement("div");
        let a = document.createElement("a");
        a.innerHTML = `<br/><br/><br/><span>Move To Wishlist</span> || <span onclick="removeCartData()">Remove</span>`;
        a_div.append(a);

        data_div.append(name_div, price_div, a_div);

        item.append(img_div, data_div);

        body_item.append(item);

        body_item_div.append(body_item)

    });

    
    let body_btn_div = document.createElement("div");

    let btn_div = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerHTML = "PROCEED TO PAY SECURELY";

    btn.addEventListener("click", function () {
        window.location.href = "checkout.html"; //<--- HERE INSTEAD OF "checkout.html" BETWEEN STRING'S GIVE THE NAME OF THE FILE which is created by @bhaskar    
    })

    btn_div.append(btn);
    body_btn_div.append(btn_div);

    cart_home_div.append(body_item_div, body_btn_div);

    addedproduct.append(cart_home_div);

    console.log("YES")

}

function removeCartData() {
    localStorage.removeItem("cart");
    window.location.href = "cart.html";
}

const selectCart = document.getElementById("cart");
const selectWish = document.getElementById("wishlist");
const selectRecent = document.getElementById("recent");

selectCart.addEventListener("click", () => {
    selectCart.classList.add("bg_toggle");
    selectRecent.classList.remove("bg_toggle");
    selectWish.classList.remove("bg_toggle");
})

selectRecent.addEventListener("click", () => {
    selectRecent.classList.add("bg_toggle");
    selectWish.classList.remove("bg_toggle");
    selectCart.classList.remove("bg_toggle");
})

selectWish.addEventListener("click", () => {
    selectWish.classList.add("bg_toggle");
    selectCart.classList.remove("bg_toggle");
    selectRecent.classList.remove("bg_toggle");
})

const closeCart = document.getElementById("cross");
closeCart.addEventListener("click", () => {
    window.location.href="homePage.html"     //<--- Provide HomePage link here----------------------------------------------------------------------------------------
})

// function setColor(btn){
//     var count=1;
//     var property = document.getElementById(btn);
//     if (count == 0){
//         property.style.backgroundColor = "#FFFFFF"
//         count=1;        
//     }
//     else{
//         property.style.backgroundColor = "#000000"
//         count=0;
//     }
//     console.log(count);

// }