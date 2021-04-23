// compose = (f, g, h) => (a) => f(g(h(a)))
function compose() {
    var composeFunctions = arguments;
    return function(x) {
        var argument = x;
        for(var index = composeFunctions.length-1; index >= 0; index--) {
            argument = composeFunctions[index](argument);
        }
        return argument;
    }    
}