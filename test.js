const {getInformationWithId,lastCarInfo}=require('./solution');
console.log(getInformationWithId(44));
// particulat id data
console.log(getInformationWithId());
// Enter correct id message will get  print
console.log(getInformationWithId(9999));
// Noparticular id will exists
console.log(lastCarInfo());
// last car Data will come
