var num1;
var num2;
var operator;
var result;

function operate(operator, num1, num2) {
    if (operator === "+") {
        return (num1 + num2)
    } else if (operator === "-") {
        return (num1 - num2)
    } else if (operator === "*") {
        return (num1 * num2)
    } else if (operator === "/") {
        return (num1 / num2)
    }
}

function onButtonPress(e) {
    const buttonValue = e.target.innerText;
    if (num1 == undefined && num2 == undefined && operator == undefined) {
        document.getElementById("showNumber").innerHTML = buttonValue;
    }
    if (!(buttonValue === "*" || buttonValue === "/" || buttonValue === "+" || buttonValue === "-" || buttonValue === "=")) {
        //number
        if (num1 == undefined && operator == undefined && num2 == undefined) {
            num1 = buttonValue;
            console.log("number1 started, number is :", num1);
        } else if (!(num1 == undefined) && operator == undefined && num2 == undefined) {
            num1 = parseInt(num1.toString() + buttonValue.toString());
            document.getElementById("showNumber").innerHTML = num1;
            console.log("number1 concatinate :", num1);
        } else if (!(num1 == undefined) && !(operator == undefined) && num2 == undefined) {
            num2 = buttonValue;
            console.log("number2 started, number is :", num2);
            document.getElementById("showNumber").innerHTML = num2;
        } else if (!(num1 == undefined) && !(operator == undefined) && !(num2 == undefined)) {
            num2 = parseInt(num2.toString() + buttonValue.toString());

            console.log("number2 concatinate :", num2);
            R
        }
    } else if (buttonValue === "*" || buttonValue === "/" || buttonValue === "+" || buttonValue === "-") {
        operator = buttonValue;
        console.log(operator, "operator");

    } else if (buttonValue === "=" && !(num1 === undefined || num2 === undefined || operator === undefined)) {
        result = operate(operator, num1, num2);
        result = roundToTwo(result);

        console.log(result);
        document.getElementById("showNumber").innerHTML = numberWithCommas(result);
        num1 = result;
        document.getElementById("showNumber").innerHTML = num1;
        num2 = undefined
    }
}

function clearText() {
    document.getElementById("showNumber").innerHTML = "";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    result = undefined;
}

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}