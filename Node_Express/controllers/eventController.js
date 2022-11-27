'use strict';

const taskData = require('../data/task');

const getAllTask = async (req, res, next) => {
    try {

        const taskList = await taskData.getTasks();
        res.json(taskList);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getTask = async (req, res, next) => {
    try {
        const TaskID = req.params.id;
        const event = await taskData.getById(TaskID);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addTask = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await taskData.creatTask(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatTask = async (req, res, next) => {
    try {
        const TaskID =  req.params.id;
        const data = req.body;
        const updated = await taskData.updateTask(TaskID, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const TaskID = req.params.id;
        const deletedEvent = await taskData.deleteTask(TaskID);
        res.send(deletedEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllTask,
    getTask,
    addTask,
    updatTask,
    deleteTask
}