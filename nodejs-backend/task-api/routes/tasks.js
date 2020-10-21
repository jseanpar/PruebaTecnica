const express = require('express');
const joi = require("@hapi/joi");
const TasksService = require('../services/tasks');

const {
    taskIdSchema,
    createTaskSchema,
    updateTaskSchema
} = require('../utils/schemas/tasks');

const validationHandler = require('../utils/middleware/validationHandler');

const cacheResponse = require('../utils/cacheResponse');
const {
    FIVE_MINUTES_IN_SECONDS,
    SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

function taskApi(app) {
    const router = express.Router();
    app.use('/api/tasks', router);

    const tasksService = new TasksService();

    router.get("/", async function (req, res, next) {
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
        const { tags } = req.query;
        try {
            const tasks = await tasksService.getTasks({ tags })
            res.status(200).json({
                data: tasks,
                message: 'Tasks listed'
            });
        } catch (err) {
            next(err);
        }
    });

    router.get("/:taskId",
        validationHandler(joi.object({ taskId: taskIdSchema }), 'params'),
        async function (req, res, next) {
            cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
            const { taskId } = req.params;
            try {
                const task = await tasksService.getTask({ taskId })
                res.status(200).json({
                    data: task,
                    message: 'Task retrieved'
                });
            } catch (err) {
                next(err);
            }
        });

    router.post("/", validationHandler(createTaskSchema), async function (req, res, next) {
        const { body: task } = req;

        try {
            const createdTaskId = await tasksService.createTask({ task });
            res.status(201).json({
                data: createdTaskId,
                message: 'Movie created'
            });
        } catch (err) {
            next(err);
        }
    });

    router.put("/:taskId", validationHandler(joi.object({ taskId: taskIdSchema }), 'params'), validationHandler(updateTaskSchema), async function (req, res, next) {
        const { taskId } = req.params;
        const { body: task } = req;
        try {
            const updateTaskId = await tasksService.updateTask({ taskId, task })
            res.status(200).json({
                data: updateTaskId,
                message: 'Task updated'
            });
        } catch (err) {
            next(err);
        }
    });
    router.delete("/:taskId", validationHandler(joi.object({ taskId: taskIdSchema }), 'params'), async function (req, res, next) {

        const { taskId } = req.params;
        try {
            const deletedTaskId = await tasksService.deleteTask({ taskId });
            res.status(200).json({
                data: deletedTaskId,
                message: 'Task deleted'
            });
        } catch (err) {
            next(err);
        }
    });
}

module.exports = taskApi;