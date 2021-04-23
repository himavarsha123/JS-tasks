// write calculations using functions and get the results
// Eg: seven(times(five())); // must return 35, four(plus(nine())); // must return 13
function zero() {
    if(arguments.length == 0) {
      return 0;
    } else {
        var operation = arguments[0][0];
        var operand1 = 0;
        var operand2 = arguments[0][1];
        switch(operation) {
            case '*':
                return operand1 * operand2;
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '/':
                return Math.floor(operand1 / operand2);
        }
    }
}

function one() {
    if(arguments.length == 0) {
        return 1;
    } else {
        var operation = arguments[0][0];
        var operand1 = 1;
        var operand2 = arguments[0][1];
        switch(operation) {
            case '*':
                return operand1 * operand2;
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '/':
                return Math.floor(operand1 / operand2);
        }
    }
}

function two() {
    if(arguments.length == 0) {
        return 2;
    } else {
        var operation = arguments[0][0];
        var operand1 = 2;
        var operand2 = arguments[0][1];
        switch(operation) {
            case '*':
                return operand1 * operand2;
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '/':
                return Math.floor(operand1 / operand2);
        }
    }
}

function three() {
    if(arguments.length == 0) {
        return 3;
    } else {
        var operation = arguments[0][0];
        var operand1 = 3;
        var operand2 = arguments[0][1];
        switch(operation) {
            case '*':
                return operand1 * operand2;
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '/':
                return Math.floor(operand1 / operand2);
        }
    }
}

function four() {
    if(arguments.length == 0) {
        return 4;
    } else {
        var operation = arguments[0][0];
        var operand1 = 4;
        var operand2 = arguments[0][1];
        switch(operation) {
            case '*':
                return operand1 * operand2;
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '/':
                return Math.floor(operand1 / operand2);
        }
    }
}

function five() {
    if(arguments.length == 0) {
        return 5;
    } else {
        var operation = arguments[0][0];
        var operand1 = 5;
        var operand2 = arguments[0][1];
        switch(operation) {
            case '*':
                return operand1 * operand2;
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '/':
                return Math.floor(operand1 / operand2);
        }
    }
}

function six() {
    if(arguments.length == 0) {
        return 6;
    } else {
        var operation = arguments[0][0];
        var operand1 = 6;
        var operand2 = arguments[0][1];
        switch(operation) {
            case '*':
                return operand1 * operand2;
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '/':
                return Math.floor(operand1 / operand2);
        }
    }
}

function seven() {
    if(arguments.length == 0) {
        return 7;
    } else {
        var operation = arguments[0][0];
        var operand1 = 7;
        var operand2 = arguments[0][1];
        switch(operation) {
            case '*':
                return operand1 * operand2;
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '/':
                return Math.floor(operand1 / operand2);
        }
    }
}

function eight() {
    if(arguments.length == 0) {
        return 8;
    } else {
        var operation = arguments[0][0];
        var operand1 = 8;
        var operand2 = arguments[0][1];
        switch(operation) {
            case '*':
                return operand1 * operand2;
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '/':
                return Math.floor(operand1 / operand2);
        }
    }
}

function nine() {
    if(arguments.length == 0) {
        return 9;
    } else {
        var operation = arguments[0][0];
        var operand1 = 9;
        var operand2 = arguments[0][1];
        switch(operation) {
            case '*':
                return operand1 * operand2;
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '/':
                return Math.floor(operand1 / operand2);
        }
    }
}
  
function plus() {
    return ["+", arguments[0]];
}

function minus() {
    return ["-", arguments[0]];
}

function times() {
    return ["*", arguments[0]];
}

function dividedBy() {
    return ["/", arguments[0]];
}
