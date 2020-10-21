const joi = require("@hapi/joi");

const taskIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const taskDescriptionSchema = joi.string().max(300);
const taskCreateDate = joi.string().max(10);
const taskActive = joi.string().max(10);

const createTaskSchema = joi.object({
    description: taskDescriptionSchema.required(),
    createDate: taskCreateDate.required(),
    active: taskActive.required(),
});

const updateTaskSchema = joi.object({

    description: taskDescriptionSchema,
    createDate: taskCreateDate,
    active: taskActive
});

module.exports = {
    taskIdSchema,
    createTaskSchema,
    updateTaskSchema
}