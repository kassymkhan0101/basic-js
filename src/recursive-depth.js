const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  let k=1;
  calculateDepth(arr) {
    throw new CustomError('Not implemented');
    for(i=0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
        k++;
        calculateDepth(arr);
      }
    }
    
  }
return k;
};
