export function initCache() {
	// Limpiar caché al navegar
	window.addEventListener('pageshow', (event) => {
		if (event.persisted) {
			window.location.reload();
		}
	});
}
