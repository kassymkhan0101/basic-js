const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(!(Array.isArray(arr))){
    return false;
  }
  let names = [];
  for(i=0; i<arr.length; i++){
    if(typeof arr[i] == 'string' && arr[i].length != 0){
      names.push(arr[i].trim().charAt(0));
    }
  }
  return names.sort().join("").toUpperCase();
  
  
};
