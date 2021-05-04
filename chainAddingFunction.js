// returns a function that will add numbers together when called in succession.
function add(n){
    let func = x => add(x + n);
    func.valueOf = () => n;
    return func;
}
