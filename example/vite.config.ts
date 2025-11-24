import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            'react-dynamic-text-translation-ui-component/style.css': path.resolve(__dirname, '../src/styles.css'),
            'react-dynamic-text-translation-ui-component': path.resolve(__dirname, '../src/index.ts'),
        },
    },
});
