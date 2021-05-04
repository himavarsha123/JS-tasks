// Let's make a Cat constructor!
var Cat = function (name, weight) {
  if(name === undefined || weight === undefined) {
    throw new Error();
  }
  Object.defineProperty(this, "name", {
    value: name,
  })
  Object.defineProperty(this, "weight", {
    get: function() {
      return weight;
    },
    set: function(newWeight) {
      weight = newWeight;
    }
  })
  Cat.catInstances.push(this);
};

Cat.catInstances = [];
Cat.averageWeight = function() {
  let totalWeight = 0;
  Cat.catInstances.forEach(cat => {
    totalWeight += cat.weight;
  });
  return totalWeight/Cat.catInstances.length;
}
