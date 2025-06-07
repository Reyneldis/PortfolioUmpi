// vite.config.js
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression2';

export default defineConfig({
	plugins: [
		compression({
			algorithm: 'gzip',
			exclude: [/\.(br)$/, /\.(gz)$/],
		}),
		compression({
			algorithm: 'brotliCompress',
			exclude: [/\.(br)$/, /\.(gz)$/],
		}),
	],
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
					emailjs: ['@emailjs/browser'],
					ui: ['lucide-react'],
				},
			},
		},
	},
});
