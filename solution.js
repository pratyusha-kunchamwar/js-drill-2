var inventory = require('../js-drill-2/cars');
function getInformationWithId(targetid) {
    if (targetid == null || targetid == undefined)//when id not present 
        return "Enter Correcrt Id";
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === targetid) {
            return `Car ${targetid} is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`;
        }

    }
    return "No particular id car Exists In Inventory";                          //when the id not matches to the given data
}

function lastCarInfo() {
    if (inventory.length == 0) {  //when no cars there in the inventory
        return "No car In the Inventory"
    }
    let last = inventory[inventory.length - 1];
    return `Last Car is a ${last.car_make}  ${last.car_model}`
}
module.exports={getInformationWithId,lastCarInfo};