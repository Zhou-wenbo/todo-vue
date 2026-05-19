import { defineStore } from 'pinia';
import api from '../api';
export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || null,
    }),
    actions: {
        async register(credentials) {
            const { data } = await api.post('/auth/register', credentials);
            this.token = data.token;
            this.user = data.user;
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        },
        async login(credentials) {
            const { data } = await api.post('/auth/login', credentials);
            this.token = data.token;
            this.user = data.user;
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        },
        logout() {
            this.token = null;
            this.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
    },
});
