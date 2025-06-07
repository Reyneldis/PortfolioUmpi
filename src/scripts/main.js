import { debounce, throttle } from './utils.js';

export function initApp() {
	// Optimizar la detección del tema
	const initTheme = () => {
		const getThemePreference = () => {
			if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
				return localStorage.getItem('theme');
			}
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		};

		document.documentElement.classList[getThemePreference() === 'dark' ? 'add' : 'remove']('dark');

		if (typeof localStorage !== 'undefined') {
			const observer = new MutationObserver(() => {
				const isDark = document.documentElement.classList.contains('dark');
				localStorage.setItem('theme', isDark ? 'dark' : 'light');
			});

			observer.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ['class'],
			});
		}
	};

	// Optimizar el scroll
	const initScroll = () => {
		const scrollToTopButton = document.getElementById('scrollToTop');
		if (!scrollToTopButton) return;

		const updateScrollButton = throttle(() => {
			if (window.scrollY > 300) {
				scrollToTopButton.classList.remove('opacity-0', 'translate-y-4', 'rotate-180');
				scrollToTopButton.classList.add('opacity-100', 'translate-y-0', 'rotate-0');
			} else {
				scrollToTopButton.classList.remove('opacity-100', 'translate-y-0', 'rotate-0');
				scrollToTopButton.classList.add('opacity-0', 'translate-y-4', 'rotate-180');
			}
		}, 100);

		window.addEventListener('scroll', updateScrollButton);

		scrollToTopButton.addEventListener('click', () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		});
	};

	// Inicializar todo de forma optimizada
	if ('requestIdleCallback' in window) {
		requestIdleCallback(() => {
			initTheme();
			initScroll();
		});
	} else {
		setTimeout(() => {
			initTheme();
			initScroll();
		}, 1000);
	}
}
