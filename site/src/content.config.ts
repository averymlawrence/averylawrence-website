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
			hue: z.number().optional(),
			overview: z.string().optional(),
			credits: z.array(z.string()).default([]),
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

const news = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			images: z
				.array(
					z.object({
						src: image(),
						alt: z.string(),
						caption: z.string(),
					})
				)
				.default([]),
			body: z.string().optional(),
		}),
});

export const collections = { projects, news };
