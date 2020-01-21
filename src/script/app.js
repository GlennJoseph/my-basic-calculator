// Initialization of global elements
let calcBtn = $(".calcBtn");
let operatorBtn = $(".operatorBtn");
let itemsWrapper = $(".itemsWrapper");
let answerWrapper = $(".answerWrapper");
let equalsBtn = $("#equalsBtn");
let cancelBtn = $("#cancelBtn");


//Run functions when document is ready
$(document).ready(function(){
    calcOn();
    operatorOn();
    equalsOn();
    cancelOn();
});


//Add numbers on the output
let clicked;

function calcOn(){
    calcBtn.click(function(e){
        clicked = e.target.innerText;
        itemsWrapper.append(clicked);
    });    
}


//Display the operator used
let operatorClicked;
let operandOne, operandTwo;

function operatorOn(){
    operatorBtn.on('click', function(e){
        if (itemsWrapper[0].innerText == '')
            return;
            
        operatorClicked = e.target.innerText;
        itemsWrapper.append(operatorClicked);
        operatorBtn.off('click');
        operatorAgain();
    });    
}


//When there is an answer present and the operators are clicked
function operatorAgain(){
    operatorBtn.on('click', function(e){
        if (answerWrapper[0].innerText){
            itemsWrapper.empty();
            answerWrapper.empty();
            operatorClicked = e.target.innerText;
            itemsWrapper.append(answer, operatorClicked);
            findOperands();
            equalsOn();
        }
    })
}


//Set value on the operands
function findOperands(){
    let operatorRegex = /[−+/x%]/;
    let match = itemsWrapper[0].innerText.match(operatorRegex);
    let operandArr = itemsWrapper[0].innerText.split(match[0]);
    
    operandOne = parseInt(operandArr[0]);
    operandTwo = parseInt(operandArr[1]);
}


//Output answer
let answer;

function equalsOn(){
    equalsBtn.on('click', function(){
        if (operatorClicked)
            findOperands();
        
        if (operatorClicked == '+')
            answer = operandOne + operandTwo;
        
        if (operatorClicked == '−')
            answer = operandOne - operandTwo;
    
        if (operatorClicked == 'x')
            answer = operandOne * operandTwo;
        
        if (operatorClicked == '/')
            answer = operandOne / operandTwo;
        
        if (operatorClicked == '%')
            answer = operandOne % operandTwo;
    
        answerWrapper.append(answer);
        equalsBtn.off('click');
    });
}


//Cancel the values
function cancelOn(){
    cancelBtn.on('click', function(){
        if (itemsWrapper[0].innerText != ''){
            itemsWrapper.empty();
            answerWrapper.empty();
            operandOne = 0;
            operandTwo = 0;
            operatorOn();
            equalsOn();
        }
        return;
    })        
}