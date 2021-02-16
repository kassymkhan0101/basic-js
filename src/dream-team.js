const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let names = [];
  for(i=0; i<arr.length; i++){
    if(typeof arr[i] == 'string'){
      names.push(arr[i].charAt(0));
    }
  }
  return names.sort().join("").toUpperCase();
  
  
};
