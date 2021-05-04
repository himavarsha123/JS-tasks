// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(properties) {
    let propertyPath = properties.split(".");
    let object = this;
    for(let index in propertyPath) {
        let property = object[propertyPath[index]];
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
