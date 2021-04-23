// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
    var propertyPath = string.split(".");
    var object = this;
    for(var index in propertyPath) {
        var property = object[propertyPath[index]];
        if(index == propertyPath.length - 1) {
            return property;
        } else {
            if(property == undefined) {
                return undefined;
            } else {
                object = property;
            }
        }
    }
}
