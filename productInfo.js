var count = 0;
  

function carousel() {
    
    console.log('count:', count)
    const arrImage= ["https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-dgih4v.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-adgt0i.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--gs9bs2.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--k5wzcm.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thg9a1.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--wqsp0e.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--ean5xt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--jtxqqt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--dnlug3.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thkvka.jpg"]
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    let div5 = document.getElementById("div5");


   let img=document.createElement("img") 
 

 
       img.src = arrImage[count];
       div1.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+1];
       
       div2.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+2];
       div3.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+3];
       div4.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+4];
       div5.innerHTML=`<img src=${img.src} alt="">` 
  
}

carousel();

function nextImage() {
    count += 4;
    if (count > 4)
        count = 4;
    console.log('count:', count)
    const arrImage= ["https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-dgih4v.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-adgt0i.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--gs9bs2.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--k5wzcm.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thg9a1.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--wqsp0e.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--ean5xt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--jtxqqt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--dnlug3.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thkvka.jpg"]
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    let div5 = document.getElementById("div5");


   let img=document.createElement("img")  
 
    if (count  < arrImage.length - 1) {
        img.src = arrImage[count];
        div1.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div1.innerHTML = ``;
           
    if (count + 1 < arrImage.length - 1) {
        img.src = arrImage[count + 1];
        div2.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div2.innerHTML = ``;
       
    if (count + 2 < arrImage.length - 1) {
        img.src = arrImage[count + 2];
        div3.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div3.innerHTML = ``;
       
    if (count + 3 < arrImage.length - 1) {
        img.src = arrImage[count + 3];
        div4.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div4.innerHTML = ``;
     if (count + 4 < arrImage.length - 1) {
        img.src = arrImage[count + 4];
        div5.innerHTML = `<img src=${img.src} alt="">`
    }
    else
        div5.innerHTML = ``;
        
  
}
             
function prevImage() {
    count -= 4;
    if (count < 0)
        count = 0;
    console.log('count:', count)

    const arrImage= ["https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-dgih4v.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-adgt0i.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--gs9bs2.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--k5wzcm.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thg9a1.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--wqsp0e.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--ean5xt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--jtxqqt.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--dnlug3.jpg","https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-one-seater-sofa-in-charcoal-grey--thkvka.jpg"]
    
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    let div5 = document.getElementById("div5");


   let img=document.createElement("img") 
 

 
    img.src = arrImage[count];
    div1.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+1];
    
    div2.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+2];
    div3.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+3];
    div4.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+4];
    div5.innerHTML=`<img src=${img.src} alt="">` 
  
}
              


function changeImage(){
    
let div_Image1 = document.getElementById("div-image");
    
    
let divs1=document.querySelectorAll(".mouse")
    
    for(let i=0;i<divs1.length;i++)
    {
        
        divs1[i].addEventListener("mouseover", function () {
            
            divs1[i].style.border = "1px solid red";
             
            div_Image1.innerHTML = ` ${divs1[i].innerHTML}  `
              
                divs1[i].addEventListener("mouseout",function(){
                   
                  divs1[i].style.border="1px solid white";
                  
                }) 
             
            })   
        }

   }   
   
   changeImage()

 

  
function aboutUs(){                   
    window.location.href="aboutUs.html"
}
   function gohome(){ 
       window.location.href = "landpage.html"
   }

   function incart(){ 
       window.location.href = "cart.html"
   }


//    append code by tarun



// function storeProduct() {
   
//     var img = document.getElementById("image").value = "https://ii1.pepperfry.com/media/catalog/product/a/m/568x625/amelia-1-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-1-seater-sofa-in-charcoal-grey-colo-dgih4v.jpg";
//     var name = document.getElementById("name").value = "Amelia 1 Seater Sofa in Charcoal Grey Colour";
//     var brand = document.getElementById("brand-name").value = "CasaCraft by Pepperfry";
//     var price = document.getElementById("price").value = 21999;
//     var cutPrice = document.getElementById("cutPrice").value = 35999;
    
//     var product = {
//         img,
//         name,
//         brand,
//         price,
//         cutPrice,
//     }

//     var arr;
//     arr = localStorage.getItem("cart")
//     if (arr == null) {
//         arr = [];
//     }

//     else {
//         arr = JSON.parse(localStorage.getItem("cart"))
//     }

//     for (let i = 0; i < arr.length;i++)
//     {  
//         if(arr[i].name==product.name)
//         {  
              
//                 return;
//         }
      
//     }

//     arr.push(product)
//     localStorage.setItem("cart", JSON.stringify(arr));
//     // console.log(arr)

//     // alert (`Added to the cart`);
     
//     var addTOCart = document.getElementById("add-to-cart");
//     addTOCart.innerHTML = `→ GO TO CART`;
//     addTOCart.style.background = "linear-gradient(to right,#fdb622 0,#f57a2d 102%)";

    
//     // *******   click second time in add to cart box to go to checkout  ***********//

//     addTOCart.addEventListener("click", function () {
//         window.location.href = "cart.html";     

//     })
        
        
// }

// function checkout() {
//     window.location.href = "paymentpage.html";   
// }



