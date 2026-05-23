// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';

export default defineConfig({
	site: 'https://99humanityfund.com',
	integrations: [
		starlight({
			title: '99% of Humanity Global Fund',
			description: 'A documentary essay on collective economic ownership in capitalist economies.',
			customCss: [
				'./src/styles/custom.css',
			],
			// Root-locale setup: English is served with NO /en/ prefix.
			// URLs stay clean (e.g. /part-1/ not /en/part-1/) and your
			// files stay directly in src/content/docs/ — nothing to move.
			// To add Spanish later: add  es: { label: 'Español', lang: 'es' }
			// below the root entry, then create src/content/docs/es/...
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en', // required for root locales
				},
			},
			plugins: [
				// starlight-utils: lifts the "leadingNavLinks" sidebar entry below
				// up into the header nav bar (next to the site title). The fake
				// sidebar entry itself is removed from the normal sidebar.
				//
				// IMPORTANT: when this plugin is active, EVERY top-level sidebar
				// item must be a GROUP (have `items:`) — plain top-level links
				// like { label, link } are NOT allowed and will fail the build.
				starlightUtils({
					navLinks: {
						leading: { useSidebarLabelled: 'leadingNavLinks' },
					},
				}),
			],
			sidebar: [
				{
					// Pulled into the HEADER nav by the plugin (not shown in sidebar).
					label: 'leadingNavLinks',
					items: [
						{ label: 'Menu', link: '/menu/' },
						{ label: 'About', link: '/about/' },
					],
				},
				{
					// Top-level groups only from here down (plugin requirement).
					label: 'Overview',
					items: [
						{ label: 'Introduction', link: '/' },
						{ label: 'About the Fund', link: '/about/' },
					],
				},
				{
					label: 'The New World Order Series',
					items: [
						{ label: 'Part 1 — A New World Order', link: '/part-1/' },
						{ label: 'Part 2 — The Fund as Institution', link: '/part-2/' },
						{ label: 'Part 3 — Manufacturing Redistribution', link: '/part-3/' },
						{ label: 'Part 4 — Pricing & Consumer Welfare', link: '/part-4/' },
						{ label: 'Part 5 — Services & the Half-Shift Economy', link: '/part-5/' },
						{ label: 'Part 6 — The Political Transition Path', link: '/part-6/' },
						{ label: 'Part 7 — Critiques & Failure Modes', link: '/part-7/' },
					],
				},
			],
			components: {
				// Custom component overrides will go here as we refine the design
			},
		}),
	],
});
