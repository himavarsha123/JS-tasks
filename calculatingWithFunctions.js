// write calculations using functions and get the results
// Eg: seven(times(five())); // must return 35, four(plus(nine())); // must return 13
function zero() {
    const num = 0;
    if(arguments.length == 0) {
      return num;
    }
    return getResult(arguments, num); 
}

function one() {
    const num = 1;
    if(arguments.length == 0) {
        return num;
    }
    return getResult(arguments, num); 
}

function two() {
    if(arguments.length == 0) {
        return 2;
    }
    return getResult(arguments, 2); 
}

function three() {
    if(arguments.length == 0) {
        return 3;
    }
    return getResult(arguments, 3); 
}

function four() {
    if(arguments.length == 0) {
        return 4;
    }
    return getResult(arguments, 4); 
}

function five() {
    if(arguments.length == 0) {
        return 5;
    }
    return getResult(arguments, 5); 
}

function six() {
    if(arguments.length == 0) {
        return 6;
    }
    return getResult(arguments, 6); 
}

function seven() {
    if(arguments.length == 0) {
        return 7;
    }
    return getResult(arguments, 7); 
}

function eight() {
    if(arguments.length == 0) {
        return 8;
    }
    return getResult(arguments, 8); 
}

function nine() {
    if(arguments.length == 0) {
        return 9;
    } 
    return getResult(arguments, 9);    
}

function getResult(args, num) {
    var operation = args[0][0];
    var operand1 = num;
    var operand2 = args[0][1];
    return getOperationResult(operation, operand1, operand2);
}

function getOperationResult(operation, operand1, operand2) {
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
