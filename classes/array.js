Array.prototype.isEqual = function(arr) {
   return this.every(el => arr.includes(el));
}
