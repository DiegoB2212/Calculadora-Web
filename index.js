var datas = [];
var operator = "";
var haveOperator = false;
var newOperation = false;

function getDatas(id) {
    if(newOperation) {
        document.getElementById("Result").value = "";
        newOperation = false;
    }
    let data = document.getElementById(id).value;
    if (data != "+" && data != "-" && data != "x" && data != "/")
        datas.push(data & 0xf);
    else if(!haveOperator){
        operator = data;
        datas.push("Operator");
        haveOperator = true;
    }
    document.getElementById("Result").value += data;
}

function calculate() {
    let number1 = 0, number2 = 0, changeNumber = false;
    for (let i = 0; datas[i] != undefined; i++) {
        if (datas[i] == "Operator") {
            changeNumber = true;
            continue;
        }
        if (changeNumber) {
            number2 *= 10;
            number2 += datas[i];
        }
        else{
            number1 *= 10;
            number1 += datas[i];
        }
        
    }
    
    let casilla = document.getElementById("Result");

    switch (operator) {
        case "+": casilla.value = number1 + number2; break;
        case "-": casilla.value = number1 - number2; break;
        case "x": casilla.value = number1 * number2; break;
        case "/": casilla.value = number1 / number2; break;
    }
    datas = [];
    haveOperator = false;
    newOperation = true;
}

