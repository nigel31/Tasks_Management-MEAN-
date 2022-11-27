'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getTasks = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('task');
        const taskList = await pool.request().query(sqlQueries.tasklist);
        return taskList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(TaskID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('task');
        const task = await pool.request()
                            .input('TaskID', sql.Int, TaskID)
                            .query(sqlQueries.taskbyId);
        return task.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatTask = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('task');
        const insertTask = await pool.request()
                            .input('TaskName', sql.NVarChar(100), eventdata.TaskName)
                            .input('TaskType', sql.NVarChar(100), eventdata.TaskType)
                            .input('StartTime', sql.VarChar, eventdata.StartTime)
                            .input('Amount', sql.Int(100), eventdata.Amount)
                            .input('CompleteDate', sql.Date, eventdata.CompleteDate)
                            .input('TaskNote', sql.VarChar(100), eventdata.TaskNote)
                            .query(sqlQueries.createTask);                            
        return insertTask.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateTask = async (TaskID, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('task');
        const update = await pool.request()
                        .input('TaskID', sql.Int, TaskID)
                        .input('TaskName', sql.NVarChar(100), data.TaskName)
data                            .input('StartTime', sql.Time(7), data.StartTime)
                            .input('Amount', sql.VarChar(100), data.Amount)
                            .input('CompleteDate', sql.Date, data.CompleteDate)
                            .input('TaskNote', sql.VarChar(100), data.TaskNote)
                        .query(sqlQueries.updateTask);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteTask = async (TaskID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('task');
        const deleteTask = await pool.request()
                            .input('TaskID', sql.Int, TaskID)
                            .query(sqlQueries.deleteTask);
        return deleteTask.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getTasks,
    getById,
    creatTask,
    updateTask,
    deleteTask
}