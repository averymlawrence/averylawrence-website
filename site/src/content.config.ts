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
			// The CMS saves untouched optional fields as null, so accept null as "not set".
			hue: z.number().nullish(),
			overview: z.string().nullish(),
			credits: z.array(z.string()).default([]),
			video: z.string().nullish(),
			video_caption: z.string().nullish(),
			images: z
				.array(
					z.object({
						src: image(),
						alt: z.string(),
						caption: z
							.string()
							.nullish()
							.transform((v) => v ?? ''),
					})
				)
				.default([]),
			// Avery's hand-written fake comment thread (never AI-generated).
			comments: z
				.array(
					z.object({
						name: z.string(),
						text: z.string(),
						likes: z.number().nullish(),
						dislikes: z.number().nullish(),
						when: z.string().nullish(),
						reply: z.boolean().default(false),
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
						caption: z
							.string()
							.nullish()
							.transform((v) => v ?? ''),
					})
				)
				.default([]),
		}),
});

export const collections = { projects, news };
