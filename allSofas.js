var productData = [
    {
        img: "https://ii2.pepperfry.com/media/catalog/product/a/m/236x260/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-dgih4v.jpg",
        name: "Amelia 1 Seater Sofa In harcoal Grey Colour",
        brand: "CasaCraft by Pepperfry",
        price: 21999,
        cutPrice: 35999,
    },
    {
        img: "https://ii2.pepperfry.com/media/catalog/product/a/v/236x260/avian-solid-wood-1-seater-sofa-in-provincial-teak-finish-by-woodsworth-avian-solid-wood-1-seater-sof-ttevk9.jpg",
        name: "Avian Solid Wood 1 Seater Sofa In Provincial Teak Finish",
        brand: "Woodsworth by Pepperfry",
        price: 22999,
        cutPrice: 35999,
    },
    {
        img: "https://ii1.pepperfry.com/media/catalog/product/o/w/568x284/owen-3-seater-sofa-in-indigo-blue-and-white-stripes-colour---casacraft-by-pepperfry-owen-3-seater-so-qnxotc.jpg",
        name: "Owen 3 Seater Sofa In Indigo Blue And White Stripes Colour",
        brand: "CasaCraft by Pepperfry",
        price: 50999,
        cutPrice: 84999,
    },
    {
        img: "https://ii3.pepperfry.com/media/catalog/product/h/a/568x284/haaken-3-seater-sofa-in-brown-color----woodsworth-by-pepperfry-haaken-3-seater-sofa-in-brown-color---bjvyjn.jpg",
        name: "Haaken 3 Seater Sofa In Brown Color",
        brand: "Woodsworth by Pepperfry",
        price: 47999,
        cutPrice: 89999,
    },
    {
        img: "https://ii2.pepperfry.com/media/catalog/product/e/u/568x284/europa-2-seater-in-green-colour-by-durian-europa-2-seater-in-green-colour-by-durian-mw3esj.jpg",
        name: "Europa 2 Seater In Green Colour",
        brand: "by Durian",
        price: 93500,
        cutPrice: 187000,
    },
    {
        img: "https://ii1.pepperfry.com/media/catalog/product/c/a/568x284/campbell-2-seater-sofa-in-brown-colour-by-durian-campbell-2-seater-sofa-in-brown-colour-by-durian-4qbzt5.jpg",
        name: "Campbell 2 Seater Sofa In Brown Colour",
        brand: "by Durian",
        price: 99400,
        cutPrice: 198800,
    },
    {
        img: "https://ii2.pepperfry.com/media/catalog/product/f/i/236x260/fiona-1-seater-wooden-sofa-in-beige-colour-by-furnitech-fiona-1-seater-wooden-sofa-in-beige-colour-b-malzkx.jpg",
        name: "Fiona 1 Seater Wooden Sofa In Beige Colour",
        brand: "by Furnitech",
        price: 19499,
        cutPrice: 22990,
    },
    {
        img: "https://ii2.pepperfry.com/media/catalog/product/a/n/568x284/antalya-2-seater-sofa-in-light-brown-colour-by-urban-living-antalya-2-seater-sofa-in-light-brown-col-uldwlk.jpg",
        name: "Antalya 2 Seater Sofa In Light Brown Colour",
        brand: "by Urban Living",
        price: 23599,
        cutPrice: 33999,
    },
    {
        img: "https://ii3.pepperfry.com/media/catalog/product/b/u/568x284/buffalo-3-seater-sofa-in-grey-colour-by-urban-living-buffalo-3-seater-sofa-in-grey-colour-by-urban-l-tvczqd.jpg",
        name: "Buffalo 3 Seater Sofa In Grey Colour",
        brand: "by Urban Living",
        price: 26299,
        cutPrice: 48999,
    },
    {
        img: "https://ii1.pepperfry.com/media/catalog/product/i/t/568x284/ithaca-impulse-3-seater-sofa-with-throw-cushions-in-teal-blue-colour-by-urban-living-ithaca-impulse--hm7clz.jpg",
        name: "Ithaca Impulse 3 Seater Sofa With Throw Cushions In Teal Blue Colour",
        brand: "by Urban Living",
        price: 59974,
        cutPrice: 64999,
    },
    {
        img: "https://ii1.pepperfry.com/media/catalog/product/r/e/568x284/regina-3-seater-sofa-in-rust-colour---casacraft-by-pepperfry-regina-3-seater-sofa-in-rust-colour---c-mh58yr.jpg",
        name: "Regina 3 Seater Sofa In Rust Colour",
        brand: "CasaCraft by Pepperfry",
        price: 47999,
        cutPrice: 85999,
    }

]

if (localStorage.getItem("productData") == null) {
    localStorage.setItem("productData", JSON.stringify(productData));
}


function showProducts(d) {

    let productData = d;
    let card_div = document.getElementById("main-card");
    card_div.innerHTML = null;

    productData.forEach(function(el){
        
        let card = document.createElement("div");
        card.addEventListener("click", function () {
            window.location.href="productInfo.html"      //<--- HERE INSTEAD OF "pepperfry.html" BETWEEN STRING'S GIVE THE NAME OF THE FILE which is created by @tarun    
        })


        let img_div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.img
        img_div.append(img)
        
        let name_div = document.createElement("div");
        let name = document.createElement("span");
        name.innerHTML = `<br/><b>${el.name}</b>`
        name_div.append(name);
        
        let brand_div = document.createElement("div");
        let brand = document.createElement("span");
        brand.innerHTML = el.brand
        
        let like_div = document.createElement("a");
        let like = document.createElement("img");
        like.src = "https://ii1.pepperfry.com/images/svg/header-wishlist-icon-2021.svg";
        like_div.append(like);
        brand_div.append(brand, like_div);

        let price_div = document.createElement("div");
        let price = document.createElement("div");
        price.innerHTML = `<br/><b>₹ ${el.price}</b> <span>₹ ${el.cutPrice}</span>`
        price_div.append(price)

        let save_div = document.createElement("div");
        let save = document.createElement("div");
        save.innerHTML = `Save ₹ ${el.cutPrice - el.price} <a>(${Math.round(((el.cutPrice - el.price) / el.cutPrice) * 100)}% Off)</a>, Limited Time Offer`
        save_div.append(save)

        let ship_div = document.createElement("div");
        let ship = document.createElement("div");
        ship.innerHTML = `<br/><img src="https://ii1.pepperfry.com/images/svg/clip-exp-ship-icon-2018.svg"/> Ships In 1 Day`;
        ship_div.append(ship);

        card.append(img_div, name_div, brand_div, price_div, save_div, ship_div)
        card_div.append(card);
    });

}

showProducts(JSON.parse(localStorage.getItem("productData")))


// sort functionallities from here

function sortLH() {
    
    let Products = JSON.parse(localStorage.getItem("productData"));

    Products = Products.sort(function (a, b) {
        if(a.brand.toLowerCase() < b.brand.toLowerCase()) return -1;
        if(a.brand.toLowerCase() > b.brand.toLowerCase()) return 1;
        return 0;
    })

    showProducts(Products);

}

function sortHL() {
    
    let Products = JSON.parse(localStorage.getItem("productData"));

    Products = Products.sort(function (a, b) {
        if(a.brand.toLowerCase() > b.brand.toLowerCase()) return -1;
        if(a.brand.toLowerCase() < b.brand.toLowerCase()) return 1;
        return 0;
    })

    showProducts(Products);

}


//sort functions


function sortBrand() {
    
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].brand == "CasaCraft by Pepperfry") {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortBrand1() {
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].brand == "Woodsworth by Pepperfry") {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortBrand2() {
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].brand == "by Durian") {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortBrand3() {
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].brand == "by Furnitech") {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortBrand4() {
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].brand == "by Urban Living") {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortPrice20() {
    
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].price < 20000) {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortPrice40() {
    
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].price < 40000 && Products[i].price > 20000) {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortPrice60() {
    
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].price > 40000) {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}
function gohome(){
    window.location.href = "landpage.html"
}

// sort functionality code ends here