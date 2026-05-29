import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
// import purgecss from 'vite-plugin-purgecss';   // 暂时禁用，因为可能误删动态样式

export default defineConfig({
  plugins: [
    vue(),
    // gzip 压缩（仅生产环境生效，不影响开发服务器）
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // 10KB 以上才压缩
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // 移除未使用的 CSS（暂时禁用，避免样式丢失）
    // purgecss({
    //   content: ['./index.html', './src/**/*.{vue,html,js,ts}'],
    //   safelist: {
    //     standard: [
    //       /router-link-active/,
    //       /active/,
    //       /task-edit/,
    //       /task-delete/,
    //       /due-date/,
    //       /completed/,
    //       /priority-badge/,
    //       /high/,
    //       /medium/,
    //       /low/,
    //     ],
    //   },
    //   enabled: process.env.NODE_ENV === 'production',
    // }),
  ],
});