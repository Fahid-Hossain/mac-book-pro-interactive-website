
// memory8GB button
document.getElementById("memory8GB-btn").addEventListener("click",function(){
    let memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText =0;

     //fixed price
     let totalCostId = document.getElementById("best-price");
     let totalCost = parseInt(totalCostId.innerText);
     //delivery cost 
     let deliveryCost = document.getElementById("delivery-cost");
     //storage cost
     let storageCost = document.getElementById("storage-cost");
 
     // totalPrice
     let totalPrice = document.getElementById("total-cost");
     let total = totalPrice.innerText = totalCost + parseInt(deliveryCost.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText);

      // total amount
   let totalAmount = document.getElementById("total-amount");
   totalAmount.innerText = total;
})


//memory16GB button
document.getElementById("memory16GB-btn").addEventListener("click",function(){
    let memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText =180;

    //fixed price
    let totalCostId = document.getElementById("best-price");
    let totalCost = parseInt(totalCostId.innerText);
    //delivery cost 
    let deliveryCost = document.getElementById("delivery-cost");
    //storage cost
    let storageCost = document.getElementById("storage-cost");

    // totalPrice
    let totalPrice = document.getElementById("total-cost");
    let total = totalPrice.innerText = totalCost + parseInt(deliveryCost.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText);

     // total amount
   let totalAmount = document.getElementById("total-amount");
   totalAmount.innerText = total;

})

////////////////////-----------------//////////////////////////
// storage256GB
document.getElementById("storage256-btn").addEventListener("click",function(){
    let storageCost = document.getElementById("storage-cost");
    storageCost.innerText =0;

  //fixed price
  let totalCostId = document.getElementById("best-price");
  let totalCost = parseInt(totalCostId.innerText);
  //memory cost 
  let memoryCost = document.getElementById("memory-cost");
  //delivery cost
  let deliveryCost = document.getElementById("delivery-cost");
 
  // totalPrice
  let totalPrice = document.getElementById("total-cost");
  let total = totalPrice.innerText = totalCost + parseInt(deliveryCost.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText);

   // total amount
   let totalAmount = document.getElementById("total-amount");
   totalAmount.innerText = total;

})
// storage512GB
document.getElementById("storage512-btn").addEventListener("click",function(){
    let storageCost = document.getElementById("storage-cost");
    storageCost.innerText = 100;

  
 //fixed price
 let totalCostId = document.getElementById("best-price");
 let totalCost = parseInt(totalCostId.innerText);
 //memory cost 
 let memoryCost = document.getElementById("memory-cost");
 //delivery cost
 let deliveryCost = document.getElementById("delivery-cost");

 // totalPrice
 let totalPrice = document.getElementById("total-cost");
 let total = totalPrice.innerText = totalCost + parseInt(deliveryCost.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText);

  // total amount
  let totalAmount = document.getElementById("total-amount");
  totalAmount.innerText = total;


})
// storage1000GB
document.getElementById("storage1000-btn").addEventListener("click",function(){
    let storageCost = document.getElementById("storage-cost");
    storageCost.innerText = 180;

 //fixed price
 let totalCostId = document.getElementById("best-price");
 let totalCost = parseInt(totalCostId.innerText);
 //memory cost 
 let memoryCost = document.getElementById("memory-cost");
 //delivery cost
 let deliveryCost = document.getElementById("delivery-cost");

 // totalPrice
 let totalPrice = document.getElementById("total-cost");
 let total = totalPrice.innerText = totalCost + parseInt(deliveryCost.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText);

  // total amount
  let totalAmount = document.getElementById("total-amount");
  totalAmount.innerText = total;
})

/////////////////////----------------------////////////////////////

//delivery25Aug
document.getElementById("delivery25-btn").addEventListener("click",function(){
    let deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = 0;

   //fixed price
   let totalCostId = document.getElementById("best-price");
   let totalCost = parseInt(totalCostId.innerText);
   //memory cost 
   let memoryCost = document.getElementById("memory-cost");
   //storage cost
   let storageCost = document.getElementById("storage-cost");

   // totalPrice
   let totalPrice = document.getElementById("total-cost");
   let total = totalPrice.innerText = totalCost + parseInt(deliveryCost.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText);

    // total amount
    let totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = total;
})
//delivery25Aug
document.getElementById("delivery21-btn").addEventListener("click",function(){
    let deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = 20;

    //fixed price
    let totalCostId = document.getElementById("best-price");
    let totalCost = parseInt(totalCostId.innerText);
    //memory cost 
    let memoryCost = document.getElementById("memory-cost");
    //storage cost
    let storageCost = document.getElementById("storage-cost");

    // totalPrice
    let totalPrice = document.getElementById("total-cost");
   let total = totalPrice.innerText = totalCost + parseInt(deliveryCost.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText);
   
   // total amount
   let totalAmount = document.getElementById("total-amount");
   totalAmount.innerText = total;

})

// promo code 

document.getElementById("promo-btn").addEventListener("click",function(){
 let promoInput = document.getElementById("promo-input");
 let promoInputValue = promoInput.value ;
 //total price
 let totalAmountId = document.getElementById("total-amount");
 let totalAmount = totalAmountId.innerText;
//  console.log(totalAmount.innerText);
let discount = (totalAmount * 20) /100;
let discountAmount = totalAmount - discount ;

if(promoInput.value == "stevekaku"){
    console.log("hello stevekaku");

    totalAmountId.innerText = discountAmount;
}
else{
    console.log("promo code not matched");
}

promoInput.value = "";


})