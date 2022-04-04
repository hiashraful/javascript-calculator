var displayId = document.getElementById('display');
function display(id) {
    const value = document.getElementById(id).innerText;
    const displayValue = displayId.innerText;
    if (displayValue == '0') {
        displayId.innerText = value;
    }
    else {
        displayId.innerText = displayValue + value;
    }
}

function clearDisplay() {
    displayId.innerText = 0;
}

function calculateResult() {
    let mathExpression = displayId.innerText;
    var number = eval(mathExpression);
    displayId.innerText = number;
}
function cancelDigit(){
    let mathExpression = displayId.innerText;
    var element = '';
    for (let i = 0; i < mathExpression.length-1; i++) {
        element = element + mathExpression[i];
    }
    displayId.innerText = element;
}