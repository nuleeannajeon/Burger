const orm = require('../config/orm');

let burgerList
async function availableBurger(){
    burgerList = await orm.selectAll();
    return burgerList.filter( burger=>burger.devoured == false );
}

async function devouredBurger(){
    burgerList = await orm.selectAll();
    return burgerList.filter( burger=>burger.devoured == true );
}

async function addBurger(name, devoured){
    return orm.insertOne(name, devoured);
}

async function devourBurger(devoured, id){
    return orm.updateOne(devoured, id);
}

module.exports = { availableBurger, devouredBurger, addBurger, devourBurger };