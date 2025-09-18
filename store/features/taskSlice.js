import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import taskService from "../../services/taskService";

export const initTasks = createAsyncThunk('tasks/fetch', async () => {
    return await taskService.getTasks();
});

export const addTask = createAsyncThunk('tasks/add', async (payload) => {
    return await taskService.addTask(payload);
});

export const removeTask = createAsyncThunk('tasks/remove', async (taskId) => {
    return await taskService.removeTask(taskId);
});

export const updateTask = createAsyncThunk('tasks/update', async (task) => {
    return await taskService.updateTask(task);
});

export const finishTask = createAsyncThunk('tasks/finish', async (task) => {
    return await taskService.finishTask(task);
});

export const clearTasks = createAsyncThunk('tasks/clear', async () => {
    return await taskService.clearTasks();
});

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        error: null,
        loading: false, 
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(initTasks.fulfilled, (state, { payload }) => {
                state.tasks = payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(initTasks.rejected, (state, { payload }) => {
                state.error = 'Erro ao carregar lista de tarefas';
                state.loading = false;
                state.tasks = [];
                console.error(payload);
            })
            .addCase(initTasks.pending, (state) => {
                state.loading = true;
                state.tasks = [];
                state.error = null;
            })
            .addCase(addTask.fulfilled, (state, { payload }) => {
                state.tasks.push(payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(addTask.rejected, (state, { payload }) => {
                state.error = 'Erro ao adicionar tarefa';
                state.loading = false;
                console.error(payload);
            })
            .addCase(addTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeTask.fulfilled, (state, { meta }) => {
                state.tasks = state.tasks.filter(t => t.id !== meta.arg);
                state.loading = false;
                state.error = null;
            })
            .addCase(removeTask.rejected, (state, { payload }) => {
                state.error = 'Erro ao remover tarefa';
                state.loading = false;
                console.error(payload);
            })
            .addCase(removeTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateTask.fulfilled, (state, { payload }) => {
                const index = state.tasks.findIndex(t => t.id === payload.id);
                if (index !== -1) {
                    state.tasks[index] = payload;
                }
                state.loading = false;
                state.error = null;
            })
            .addCase(updateTask.rejected, (state, { payload }) => {
                state.error = 'Erro ao atualizar tarefa';
                state.loading = false;
                console.error(payload);
            })
            .addCase(updateTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(finishTask.fulfilled, (state, { payload }) => {
                const index = state.tasks.findIndex(t => t.id === payload.id);
                if (index !== -1) {
                    state.tasks[index] = payload;
                }
                state.loading = false;
                state.error = null;
            })
            .addCase(finishTask.rejected, (state, { payload }) => {
                state.error = 'Erro ao concluir tarefa';
                state.loading = false;
                console.error(payload);
            })
            .addCase(finishTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(clearTasks.fulfilled, (state) => {
                state.tasks = [];
                state.loading = false;
                state.error = null;
            })
            .addCase(clearTasks.rejected, (state, { payload }) => {
                state.error = 'Erro ao limpar todas as tarefas';
                state.loading = false;
                console.error(payload);
            })
            .addCase(clearTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            });
    },
    selectors: {
        selectTasks: (state) => state.tasks,
        selectError: (state) => state.error,
        selectLoading: (state) => state.loading,
    }
});
export const { selectTasks, selectError, selectLoading } = taskSlice.selectors;
export const tasksReducer = taskSlice.reducer;

