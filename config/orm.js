const db = require("./connection");

function selectAll(){
    return db.query('SELECT * FROM burgers')
}

function insertOne(name, devoured){
    return db.query('INSERT INTO burgers (burger_name, devoured) VALUES (?,?)', [name, devoured])
}

function updateOne(devoured, id){
    return db.query('UPDATE burgers SET devoured=? WHERE id=?', [devoured, id])
}

module.exports = { selectAll, insertOne, updateOne };