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

async function addBurger(name){
    return orm.insertOne(name, false);
}

async function devourBurger(id){
    return orm.updateOne(true, id);
}

module.exports = { availableBurger, devouredBurger, addBurger, devourBurger };