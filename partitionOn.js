// Write a function which partitions a list of items based on a given predicate.
function partitionOn(pred, items) {
    var positive = [];
    var negative = [];
    items.forEach(item => {
        if(pred(item)) {
            positive.push(item);
        } else {
            negative.push(item);
        }
    });
    var index = 0;
    negative.forEach(element => {
        items[index]= element;
        index++;
    });
    positive.forEach(element => {
        items[index]= element;
        index++;
    });
    return negative.length;
}