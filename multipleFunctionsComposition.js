// compose = (f, g, h) => (a) => f(g(h(a)))
function compose() {
    let composeFunctions = arguments;
    return (x) => {
        let argument = x;
        for(let index = composeFunctions.length-1; index >= 0; index--) {
            argument = composeFunctions[index](argument);
        }
        return argument;
    }    
}
