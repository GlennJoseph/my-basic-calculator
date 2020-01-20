// let modularBtn = $("#modularBtn");
// let divideBtn = $("#divideBtn");
// let multiplyBtn = $("#multiplyBtn");
// let subtractBtn = $("#subtractBtn");
// let addBtn = $("#addBtn");
// let equalsBtn = $("#equalsBtn");

// Initialization of global elements
let calcBtn = $(".calcBtn");
let operatorBtn = $(".operatorBtn");
let items = $(".itemsWrapper");



calcBtn.click(function(e){
    let clicked = e.target.innerText;
    items.append(clicked);
    console.log(clicked);
})
