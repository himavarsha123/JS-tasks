// returns the result of the operation on given operands
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
          return value1 + value2;
        case '-':
          return value1 - value2;
        case '*':
          return value1 * value2;
        case '/':
          return value1 / value2;
    }
}
