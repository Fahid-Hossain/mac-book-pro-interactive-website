//---//---///--get Memory cost by specification ----//-----//---

function getMemoryCost(cost) {
    let memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = cost;

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
}

// -----///----///--get Storage cost by specification -----///---////---

function getStorageCost(cost) {
    let storageCost = document.getElementById("storage-cost");
    storageCost.innerText = cost;

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
}

// ---- // ---get Delivery cost by specific date---//---//--

function getDeliveryCost(cost) {
    let deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = cost;

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
}


///////------------/////////////////--memory button click--------------////////////////////

// memory8GB button
document.getElementById("memory8GB-btn").addEventListener("click", function () {
    getMemoryCost(0);
})


//memory16GB button
document.getElementById("memory16GB-btn").addEventListener("click", function () {
    getMemoryCost(180);
})

////////////////////--------storage button click---------//////////////////////////
// storage256GB
document.getElementById("storage256-btn").addEventListener("click", function () {
    getStorageCost(0);
})
// storage512GB
document.getElementById("storage512-btn").addEventListener("click", function () {
    getStorageCost(100);
})
// storage1000GB
document.getElementById("storage1000-btn").addEventListener("click", function () {
    getStorageCost(180);
})

/////////////////////---------delivery button click-------------////////////////////////

//delivery25Aug
document.getElementById("delivery25-btn").addEventListener("click", function () {
    getDeliveryCost(0);
})

//delivery25Aug
document.getElementById("delivery21-btn").addEventListener("click", function () {
    getDeliveryCost(20);
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