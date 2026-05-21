// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://99humanityfund.com',
	integrations: [
		starlight({
			title: '99 Humanity Fund',
			description: 'A documentary project on collective economic ownership and the global majority.',
			customCss: [
				'./src/styles/custom.css',
			],
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			social: [],
			sidebar: [
				{
					label: 'Introduction',
					link: '/',
				},
				{
					label: 'Part 1 — The Foundation',
					collapsed: false,
					items: [
						{ label: 'Overview', link: '/part-1/' },
					],
				},
				{
					label: 'Part 2 — The Fund as Institution',
					collapsed: true,
					items: [
						{ label: 'Overview', link: '/part-2/' },
					],
				},
				{
					label: 'Part 3 — Manufacturing Redistribution',
					collapsed: true,
					items: [
						{ label: 'Overview', link: '/part-3/' },
					],
				},
				{
					label: 'About',
					link: '/about/',
				},
			],
			components: {
				// Custom component overrides will go here as we refine the design
			},
		}),
	],
});
