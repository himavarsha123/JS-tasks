function isSantaClausable(obj) {
    var function1 = obj.sayHoHoHo;
    var function2 = obj.distributeGifts;
    var function3 = obj.goDownTheChimney;
    return (function1 !== undefined && typeof function1 === "function") &&
    (function2 !== undefined && typeof function2 === "function") &&
    (function3 !== undefined && typeof function3 === "function");
}
