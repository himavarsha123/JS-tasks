// Function composition: 
// Eg: f3 = compose( f1 f2 ) => f3(a) = f1( f2( a ) )
function compose(f,g) {
    return (...args) => f(g(...args));
}
