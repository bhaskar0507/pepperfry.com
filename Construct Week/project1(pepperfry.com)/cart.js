
function storeProduct() {
   
    var img = document.getElementById("image").value = "https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-dgih4v.jpg";
    var name = document.getElementById("name").value = "Amelia 1 Seater Sofa in Charcoal Grey Colour";
    var brand = document.getElementById("brand-name").value = "CasaCraft by Pepperfry";
    var price = document.getElementById("price").value = 21999;
    var cutPrice = document.getElementById("cutPrice").value = 35999;
    
    var product = {
        img,
        name,
        brand,
        price,
        cutPrice,
    }

    var arr;
    arr = localStorage.getItem("cart")
    if (arr == null) {
        arr = [];
    }

    else {
        arr = JSON.parse(localStorage.getItem("cart"))
    }

    // for (let i = 0; i < arr.length;i++)
    // {  
    //     if(arr[i].name==product.name)
    //     {  
    //             alert(`Already  added ,try other Products!`)
    //             return;
    //     }
      
    // }

    arr.push(product)
    localStorage.setItem("cart", JSON.stringify(arr));
    // console.log(arr)

    // alert (`Added to the cart`);
     
    var addTOCart = document.getElementById("add-to-cart");
    addTOCart.innerHTML = `→ GO TO CART`;
    addTOCart.style.background = "linear-gradient(to right,#fdb622 0,#f57a2d 102%)";

    
    // *******   click second time in add to cart box to go to checkout  ***********//

    addTOCart.addEventListener("click", function () {
        window.location.href = "checkout.html";     

    })
        
        
}

function checkout() {
    window.location.href = "checkout.html";   
}


 
 

 

 
 
 
 