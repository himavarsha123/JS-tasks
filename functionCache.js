// returns a function wrapper, which takes a function and caches its results 
// depending on the arguments, that were applied to the function.
function cache(func) {
    return function(...args) {
        var argsConcat = func.prototype.constructor;
        args.forEach(arg => {
            if(typeof arg === "object") {
                argsConcat = argsConcat + JSON.stringify(arg);
            } else {
                argsConcat = argsConcat + arg.toString();
            }
        });

        if(!cache.functionCallsLog.has(argsConcat)) {
            let result = func.apply(this, args);
            cache.functionCallsLog.set(argsConcat, result);
        }
        return cache.functionCallsLog.get(argsConcat);
    }
}
  
cache.functionCallsLog = new Map();