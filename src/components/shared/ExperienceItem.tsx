import { motion } from 'framer-motion';

interface ExperienceItemProps {
	date: string;
	title: string;
	company: string;
	description: string;
	index: number;
}

export const ExperienceItem = ({
	date,
	title,
	company,
	description,
	index,
}: ExperienceItemProps) => {
	return (
		<motion.article
			initial={{ opacity: 0, x: -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.2 }}
			className="relative pb-8 pl-8 last:pb-0"
		>
			<div className="absolute top-0 left-0 h-full w-0.5 bg-orange-500/20 dark:bg-orange-400/20">
				<div className="absolute top-0 left-1/2 w-4 h-4 bg-white rounded-full border-2 border-orange-500 -translate-x-1/2 dark:border-orange-400 dark:bg-gray-800" />
			</div>

			<div className="space-y-2">
				<div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
					<span className="text-sm text-orange-500 dark:text-orange-400">{date}</span>
				</div>

				<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{company}</p>
				<p className="text-gray-600 dark:text-gray-400">{description}</p>
			</div>
		</motion.article>
	);
};
