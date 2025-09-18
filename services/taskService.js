
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/'
});
const endpoint = 'tasks';

const getTasks = async () => {
    const response = await api.get(endpoint);
    console.log(response);
    return response.data;
}

const addTask = async (newTask) => {
    newTask.createdDate = new Date();
    const response = await api.post(endpoint, newTask);
    console.log('[addTask] response: ', response);
    return response.data;
}

const removeTask = async (taskId) => {
    const response = await api.delete(`${endpoint}/${taskId}`);
    console.log('[removeTask] response: ', response);
    return response.data;
}

const updateTask = async (task) => {
    const response = await api.put(`${endpoint}/${task.id}`, task);
    console.log('[updateTask] response: ', response);
    return response.data;
}

const finishTask = async (task) => {
    const updatedTask = { ...task, done: !task.done };
    if (updatedTask.done) {
        updatedTask.completedDate = new Date();
    } else {
        delete updatedTask.completedDate;
    }
    const response = await api.put(`${endpoint}/${task.id}`, updatedTask);
    console.log('[finishTask] response: ', response);
    return response.data;
}

const clearTasks = async () => {
    const tasks = await getTasks();
    const deletePromises = tasks.map(task => api.delete(`${endpoint}/${task.id}`));
    const responses = await Promise.all(deletePromises);
    console.log('[clearTasks] responses: ', responses);
    return responses.map(r => r.data);
}

export default {
    getTasks,
    addTask,
    removeTask,
    updateTask,
    finishTask,
    clearTasks
};