function isSantaClausable(obj) {
    let function1 = obj.sayHoHoHo;
    let function2 = obj.distributeGifts;
    let function3 = obj.goDownTheChimney;
    return isFunction(function1) && isFunction(function2) && isFunction(function3);
}

function isFunction(func) {
    return func !== undefined && typeof func === "function";
}
