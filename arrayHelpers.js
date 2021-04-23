// extend the built-in Array class with the following methods: 
// square(), cube(), average(), sum(), even() and odd().
Array.prototype.square = function() {
    return this.map(function(element) {
        return element * element;
    });
}

Array.prototype.cube = function() {
    return this.map(function(element) {
        return element * element * element;
    });
}

Array.prototype.average = function() {
    if(this.length == 0) {
        return NaN;
    }
    var sum = 0;
    this.forEach(element => {
        sum += element;
    });
    return sum/this.length;
}

Array.prototype.sum = function() {
    var sum = 0;
    this.forEach(element => {
        sum += element;
    });
    return sum;
}

Array.prototype.even = function() {
    return this.filter(function(element) {
        return element % 2 === 0;
    });
}

Array.prototype.odd = function() {
    return this.filter(function(element) {
        return element % 2 !== 0;
    });
}
