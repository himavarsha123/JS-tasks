// returns an array of n elements that all have the same value v
function prefill(n, v) {
    var count = parseInt(n);
    if(isNaN(count) || count < 0 || Number(n) !== count) {
      throw new TypeError(n + " is invalid");
    }
    return new Array(count).fill(v);
}