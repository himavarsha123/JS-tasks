// returns a function that will add numbers together when called in succession.
function add(n){
    var func = function(x){
        return add(x+n);
    }
    func.valueOf = function(){
        return n;
    }
    return func;
}