// returns an instance of the given class using apply
function construct(Class) {
    let object =  Object.create(Class.prototype);
    let arrayOfArguments = Object.values(arguments);
    Class.apply(object, arrayOfArguments.slice(1));
    return object;
}
