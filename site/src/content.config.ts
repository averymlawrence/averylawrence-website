import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			order: z.number(),
			tags: z.array(z.enum(['performance', 'animation', 'video', 'installation', 'photo'])).default([]),
			status: z.enum(['ready', 'coming-soon']).default('coming-soon'),
			template: z.enum(['split', 'hero', 'grid']).default('grid'),
			hue: z.number().optional(),
			body: z.string().optional(),
			video: z.string().optional(),
			images: z
				.array(
					z.object({
						src: image(),
						alt: z.string(),
						caption: z.string(),
					})
				)
				.default([]),
		}),
});

export const collections = { projects };
