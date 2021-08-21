// ----------product cost find function
function getCost(product,cost){
    let productCostId = document.getElementById(product + "-cost");
    productCostId.innerText = cost;
}

// ---- product price update functiion 
function getUpdateDetails(){
    //fixed price
    let totalCostId = document.getElementById("best-price");
    let totalCost = parseInt(totalCostId.innerText);
    //memory cost
    let memoryCostId = document.getElementById("memory-cost");
    let memoryCost = parseInt(memoryCostId.innerText);
    console.log(memoryCost);
    //delivery cost 
    let deliveryCostId = document.getElementById("delivery-cost");
    let deliverCost = parseInt(deliveryCostId.innerText);
    //storage cost
    let storageCostId = document.getElementById("storage-cost");
    let storageCost = parseInt(storageCostId.innerText);

    // totalPrice
    let totalPrice = document.getElementById("total-cost");
    let total = totalPrice.innerText = totalCost + memoryCost+ deliverCost + storageCost;

    // total amount
    let totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = total;
}

///////------------/////////////////--memory button click--------------////////////////////

// memory8GB button
document.getElementById("memory8GB-btn").addEventListener("click", function () {
    getCost("memory",0);
    getUpdateDetails();
})


//memory16GB button
document.getElementById("memory16GB-btn").addEventListener("click", function () {
    getCost("memory",180);
    getUpdateDetails();
})

////////////////////--------storage button click---------//////////////////////////
// storage256GB
document.getElementById("storage256-btn").addEventListener("click", function () {
    getCost("storage",0);
    getUpdateDetails();
})
// storage512GB
document.getElementById("storage512-btn").addEventListener("click", function () {
    getCost("storage",100);
    getUpdateDetails();
})
// storage1000GB
document.getElementById("storage1000-btn").addEventListener("click", function () {
    getCost("storage",180);
    getUpdateDetails();
})

/////////////////////---------delivery button click-------------////////////////////////

//delivery25Aug
document.getElementById("delivery25-btn").addEventListener("click", function () {
    getCost("delivery",0);
    getUpdateDetails();
})

//delivery25Aug
document.getElementById("delivery21-btn").addEventListener("click", function () {
    getCost("delivery",20);
    getUpdateDetails();
})

//------////------------//-- Promo code Check ---//-----------//-------------------

document.getElementById("promo-btn").addEventListener("click", function(){
    let promoInput = document.getElementById("promo-input");
    let promoInputValue = promoInput.value;
    //get total price
    let totalAmountId = document.getElementById("total-amount");
    let totalAmount = totalAmountId.innerText;

    //get discount (20%)
    let discount = (totalAmount * 20) / 100;
    // Discount Amount
    let discountAmount = totalAmount - discount;

    //promo code validation check
    if (promoInput.value == "stevekaku") {
        console.log("hello stevekaku");

        totalAmountId.innerText = discountAmount;
    }
    else {
        console.log("promo code not matched");
    }
    //clear display input value
    promoInput.value = "";

})