const express = require('express');
const burger = require('../models/burger');

function router (app){
    app.get('/', async function(req, res){
        var availBurgerData = await burger.availableBurger();
            console.log(availBurgerData);
        var devBurgerData = await burger.devouredBurger();
            console.log(devBurgerData);
        res.render('index', {availBurgerData, devBurgerData})
    })

    app.get('/devour/:id', async function(req, res){
        const devour = await burger.devourBurger(req.params.id);
        res.redirect('/');
    })

    app.post('/', async function(req, res){
        const available = await burger.addBurger(req.body.burger);
        res.redirect('/');
    })
}

module.exports = router;
