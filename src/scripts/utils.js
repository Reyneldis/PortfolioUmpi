export const debounce = (func, wait) => {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

export const throttle = (func, limit) => {
	let inThrottle;
	return function executedFunction(...args) {
		if (!inThrottle) {
			func(...args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
};

export const loadScript = (src) => {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = src;
		script.async = true;
		script.onload = resolve;
		script.onerror = reject;
		document.head.appendChild(script);
	});
};
