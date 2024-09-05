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
function carModelsAlphabetically() {
    if (inventory.length == 0) {  //when no cars there in the inventory
        return "No car In the Inventory"
    }
    let modelNames = [];
    for (let i = 0; i < inventory.length; i++) {
        modelNames.push(inventory[i].car_model);

    }

    modelNames.sort((a, b) => {
        return a.localeCompare(b, undefined, { sensitivity: 'variant', numeric: true });
    });
    return modelNames.join('\n');
}

function allYearsOfcars() {
    let years = [];

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].hasOwnProperty('car_year'))
            years.push(inventory[i].car_year);
        else
            years.push("propertyt not there");


    }
    return years;
}
module.exports={getInformationWithId,lastCarInfo,carModelsAlphabetically,allYearsOfcars};