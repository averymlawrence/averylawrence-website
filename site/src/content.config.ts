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
			// Facts line shown at the top of the project page.
			year: z.union([z.string(), z.number()]).nullish(),
			medium: z.string().nullish(),
			dimensions: z.string().nullish(),
			shown: z.array(z.string()).default([]),
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

// A course Avery teaches or taught. Its page lists the student work filed under it.
const courses = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
	schema: z.object({
		title: z.string(),
		school: z.string(),
		years: z.string().nullish(),
		order: z.number(),
		description: z.string().nullish(),
	}),
});

// One set of student work: a single assignment in a single term.
const studentwork = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/studentwork' }),
	schema: ({ image }) =>
		z.object({
			course: z.string(), // folder name of the course, e.g. "art-design-digital-culture"
			assignment: z.string(),
			assignment_description: z.string().nullish(),
			term: z.string(), // e.g. "Spring 2023"
			sort: z.number(), // newest first: year, plus .5 for fall
			works: z
				.array(
					z.object({
						// Students are credited as first name + last initial.
						student: z.string(),
						title: z.string().nullish(),
						video: z.string().nullish(), // looping video file under /media/…
						poster: z.string().nullish(), // still frame shown before the video loads
						embed: z.string().nullish(), // Vimeo or YouTube link
						sketch: z.string().nullish(), // live, interactive page shown in a frame (e.g. a p5.js sketch)
						link: z.string().nullish(), // something to open on its own page (e.g. a game)
						image: image().nullish(),
						alt: z.string().nullish(),
						width: z.number().nullish(),
						height: z.number().nullish(),
					})
				)
				.default([]),
		}),
});

export const collections = { projects, news, courses, studentwork };
