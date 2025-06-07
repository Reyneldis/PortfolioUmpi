import { motion } from 'framer-motion';

export default function AnimatedFooter() {
	return (
		<footer className="overflow-hidden relative mt-10">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="absolute inset-0 bg-gradient-to-t to-transparent from-orange-50/50 dark:from-orange-950/20 dark:to-transparent"
			/>

			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className="relative mx-auto w-full max-w-[95vw] px-4 py-8 sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]"
			>
				<div className="flex flex-col gap-8 justify-between items-center md:flex-row">
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="text-center md:text-left"
					>
						<h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500">
							Reyneldis Umpierre
						</h3>
					</motion.div>

					<motion.nav
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="flex items-center space-x-8"
					>
						<a
							href="/#about"
							className="text-sm text-gray-600 transition-colors hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
						>
							Sobre mí
						</a>
						<a
							href="/#contacto"
							className="text-sm text-gray-600 transition-colors hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
						>
							Contacto
						</a>
					</motion.nav>

					<motion.div
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="text-center md:text-right"
					>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							© {new Date().getFullYear()} Casi todos los derechos reservados
						</p>
					</motion.div>
				</div>
			</motion.div>
		</footer>
	);
}
