import { motion } from 'framer-motion';

export const ContactForm = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className="relative"
		>
			{/* Efecto de sombreado con degradado */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="absolute inset-0 bg-gradient-to-br rounded-3xl blur-2xl from-orange-400/20 via-orange-300/10 to-orange-200/5 dark:from-orange-400/10 dark:via-orange-300/5 dark:to-orange-200/0"
				style={{
					filter: 'blur(40px)',
					transform: 'translateZ(0)',
				}}
			/>

			<motion.form
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="flex relative flex-col gap-10 p-8 mx-auto w-full max-w-xl rounded-3xl backdrop-blur-sm bg-white/50 dark:bg-gray-900/50"
				id="contact-form"
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="relative"
				>
					<input
						type="text"
						id="name"
						name="name"
						required
						placeholder="Nombre"
						className="py-3 w-full text-lg bg-transparent border-0 border-b border-gray-200 transition-all duration-300 outline-none placeholder:text-gray-400 focus:border-orange-400 dark:border-gray-700 dark:placeholder:text-gray-500 dark:focus:border-orange-400"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="relative"
				>
					<input
						type="email"
						id="email"
						name="email"
						required
						placeholder="Email"
						className="py-3 w-full text-lg bg-transparent border-0 border-b border-gray-200 transition-all duration-300 outline-none placeholder:text-gray-400 focus:border-orange-400 dark:border-gray-700 dark:placeholder:text-gray-500 dark:focus:border-orange-400"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="relative"
				>
					<textarea
						id="message"
						name="message"
						rows={4}
						required
						placeholder="Mensaje"
						className="py-3 w-full text-lg bg-transparent border-0 border-b border-gray-200 transition-all duration-300 outline-none resize-none placeholder:text-gray-400 focus:border-orange-400 dark:border-gray-700 dark:placeholder:text-gray-500 dark:focus:border-orange-400"
					></textarea>
				</motion.div>

				<motion.button
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
					whileHover={{
						scale: 1.02,
						backgroundColor: '#fb923c',
						boxShadow: '0 0 20px rgba(251, 146, 60, 0.3)',
					}}
					whileTap={{ scale: 0.98 }}
					type="submit"
					className="py-4 w-full text-lg font-medium text-white bg-orange-400 rounded-full transition-all duration-300 hover:bg-orange-500 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-900"
				>
					Enviar mensaje
				</motion.button>
			</motion.form>
		</motion.div>
	);
};
