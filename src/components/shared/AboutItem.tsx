import { motion } from 'framer-motion';

interface AboutItemProps {
	title: string;
	description: string;
	index: number;
}

export const AboutItem = ({ title, description, index }: AboutItemProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.2 }}
			className="flex flex-col gap-2"
		>
			<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
			<p className="text-gray-600 dark:text-gray-400">{description}</p>
		</motion.div>
	);
};
