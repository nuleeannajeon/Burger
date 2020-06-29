const connection = require("./connection");

function selectAll(){
    return connection.query('SELECT * FROM burgers')
}

function insertOne(name, devoured){
    return connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?,?)', [name, devoured])
}

function updateOne(devoured, id){
    return connection.query('UPDATE burgers SET devoured=? WHERE id=?', [devoured, id])
}

module.exports = { selectAll, insertOne, updateOne };