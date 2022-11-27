'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const router = express.Router();

router.get('/tasks', eventControll.getAllTask);
router.get('/task/:id', eventControll.getTask);
router.post('/task', eventControll.addTask);
router.put('/task/:id', eventControll.updatTask);
router.delete('/task/:id', eventControll.deleteTask);


module.exports = {
    routes: router
}