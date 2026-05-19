import { defineStore } from 'pinia';
import api from '../api';

interface User {
  id: string;
  username: string;
  email: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || null,
  }),
  actions: {
    async register(credentials: { username: string; email: string; password: string }) {
      const { data } = await api.post<{ token: string; user: User }>('/auth/register', credentials);
      this.token = data.token;
      this.user = data.user;
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    },
    async login(credentials: { username: string; password: string }) {
      const { data } = await api.post<{ token: string; user: User }>('/auth/login', credentials);
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