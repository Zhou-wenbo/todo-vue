import { defineStore } from 'pinia';
import { supabase } from '../supabase';
export const useTodoStore = defineStore('todo', {
    state: () => ({
        tasks: [],
        deletedTasks: [],
        currentFilter: 'all',
        loading: false,
        error: null,
    }),
    actions: {
        async fetchTasks() {
            this.loading = true;
            const { data, error } = await supabase
                .from('tasks')
                .select('*')
                .is('deleted_at', null)
                .order('created_at', { ascending: false });
            if (error)
                this.error = error.message;
            else
                this.tasks = data;
            this.loading = false;
        },
        async fetchDeletedTasks() {
            const { data, error } = await supabase
                .from('tasks')
                .select('*')
                .not('deleted_at', 'is', null)
                .order('deleted_at', { ascending: false });
            if (!error && data)
                this.deletedTasks = data;
        },
        async addTask(text, dueDate, priority) {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user)
                throw new Error('未登录');
            const { data, error } = await supabase
                .from('tasks')
                .insert([{
                    text,
                    due_date: dueDate,
                    priority,
                    user_id: user.id
                }])
                .select();
            if (!error && data)
                this.tasks.unshift(data[0]);
        },
        async deleteTask(id) {
            const { error } = await supabase
                .from('tasks')
                .update({ deleted_at: new Date().toISOString() })
                .eq('id', id);
            if (!error) {
                const task = this.tasks.find(t => t.id === id);
                if (task) {
                    this.tasks = this.tasks.filter(t => t.id !== id);
                    this.deletedTasks.unshift({ ...task, deleted_at: new Date().toISOString() });
                }
                else {
                    this.fetchDeletedTasks();
                }
            }
        },
        async restoreTask(id) {
            const { error } = await supabase
                .from('tasks')
                .update({ deleted_at: null })
                .eq('id', id);
            if (!error) {
                const task = this.deletedTasks.find(t => t.id === id);
                if (task) {
                    this.deletedTasks = this.deletedTasks.filter(t => t.id !== id);
                    this.tasks.unshift({ ...task, deleted_at: undefined });
                }
                else {
                    this.fetchTasks();
                    this.fetchDeletedTasks();
                }
            }
        },
        async permanentDeleteTask(id) {
            const { error } = await supabase.from('tasks').delete().eq('id', id);
            if (!error)
                this.deletedTasks = this.deletedTasks.filter(t => t.id !== id);
        },
        async clearDeletedTasks() {
            const ids = this.deletedTasks.map(t => t.id);
            if (ids.length === 0)
                return;
            const { error } = await supabase.from('tasks').delete().in('id', ids);
            if (!error)
                this.deletedTasks = [];
        },
        async updateTask(id, updates) {
            const { data, error } = await supabase
                .from('tasks')
                .update(updates)
                .eq('id', id)
                .select();
            if (!error && data) {
                const index = this.tasks.findIndex(t => t.id === id);
                if (index !== -1)
                    this.tasks[index] = data[0];
            }
        },
        async toggleComplete(id) {
            const task = this.tasks.find(t => t.id === id);
            if (task)
                this.updateTask(id, { completed: !task.completed });
        },
        async editTask(id, newText) {
            this.updateTask(id, { text: newText });
        },
        setFilter(filter) {
            this.currentFilter = filter;
        }
    }
});
