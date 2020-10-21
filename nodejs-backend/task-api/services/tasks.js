const MongoLib = require('../lib/mongo');

//capa de servicios
class TasksService {

    constructor() {
        this.collection = 'tasks';
        this.mongoDB = new MongoLib();
    }

    async getTasks({ tags }) {
        const query = tags && { tags: { $in: tags } };
        const tasks = await this.mongoDB.getAll(this.collection, query)
        return tasks || [];
    }
    async getTask({ taskId }) {
        const task = await this.mongoDB.get(this.collection, taskId);
        return task || {};
    }
    async createTask({ task }) {
        const createTaskId = await this.mongoDB.create(this.collection, task);
        return createTaskId;
    }

    async updateTask({ taskId, task } = {}) {
        const updateTaskId = await this.mongoDB.update(this.collection, taskId, task);
        return updateTaskId;
    }

    async deleteTask({ taskId }) {
        const deleteTaskId = await this.mongoDB.delete(this.collection, taskId);
        return deleteTaskId;
    }

}

module.exports = TasksService;