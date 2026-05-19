import axios from 'axios';
//创建axios实例，配置baseURL
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api', //后端API地址
    timeout: 10000,
});
//请求拦截器：自动添加token
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));
//响应拦截器：处理401 未授权
api.interceptors.response.use(response => response, error => {
    if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
    }
    return Promise.reject(error);
});
export default api;
