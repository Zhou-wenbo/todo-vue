import { defineStore } from 'pinia';
import api from '../api';
export const useTodoStore = defineStore('todo', {
    state: () => ({
        tasks: [],
        deletedTasks: [],
        currentFilter: 'all',
        loading: false,
        error: null,
        randomTask: '',
        themeColor: '#42b983',
    }),
    actions: {
        async fetchTasks() {
            this.loading = true;
            try {
                const { data } = await api.get('/tasks');
                this.tasks = data;
            }
            catch (err) {
                this.error = err.response?.data?.message || '获取任务失败';
                console.error(err);
            }
            finally {
                this.loading = false;
            }
        },
        async addTask(text, dueDate, priority) {
            try {
                const { data } = await api.post('/tasks', { text, dueDate, priority });
                this.tasks.unshift(data);
            }
            catch (err) {
                console.error(err);
                throw err;
            }
        },
        // 删除任务：移到回收站（不调用后端删除接口）
        deleteTask(id) {
            const index = this.tasks.findIndex(t => t._id === id);
            if (index !== -1) {
                const deletedTask = {
                    ...this.tasks[index],
                    deletedAt: Date.now()
                };
                this.deletedTasks.push(deletedTask);
                this.tasks.splice(index, 1);
            }
        },
        // 恢复任务
        restoreTask(id) {
            const index = this.deletedTasks.findIndex(t => t._id === id);
            if (index !== -1) {
                const { deletedAt, ...task } = this.deletedTasks[index];
                this.tasks.push(task);
                this.deletedTasks.splice(index, 1);
            }
        },
        // 彻底删除（从回收站永久移除，同时也要调用后端删除接口）
        async permanentDeleteTask(id) {
            try {
                await api.delete(`/tasks/${id}`);
                this.deletedTasks = this.deletedTasks.filter(t => t._id !== id);
            }
            catch (err) {
                console.error('彻底删除失败:', err);
            }
        },
        // 清空回收站（批量永久删除）
        async clearDeletedTasks() {
            for (const task of this.deletedTasks) {
                try {
                    await api.delete(`/tasks/${task._id}`);
                }
                catch (err) {
                    console.error(`删除任务 ${task._id} 失败`, err);
                }
            }
            this.deletedTasks = [];
        },
        async toggleComplete(id) {
            const task = this.tasks.find(t => t._id === id);
            if (!task)
                return;
            try {
                const { data } = await api.put(`/tasks/${id}`, { completed: !task.completed });
                const index = this.tasks.findIndex(t => t._id === id);
                if (index !== -1)
                    this.tasks[index] = data;
            }
            catch (err) {
                console.error(err);
            }
        },
        async editTask(id, newText) {
            try {
                const { data } = await api.put(`/tasks/${id}`, { text: newText });
                const index = this.tasks.findIndex(t => t._id === id);
                if (index !== -1)
                    this.tasks[index] = data;
            }
            catch (err) {
                console.error(err);
            }
        },
        setFilter(filter) {
            this.currentFilter = filter;
        },
    },
});
