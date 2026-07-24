// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';

export default defineConfig({
	site: 'https://99humanityfund.com',
	integrations: [
		starlight({
			favicon: '/favicon.svg',
			logo: {
  				light: './src/assets/logo-light.svg',
  				dark: './src/assets/logo-dark.svg',
  				replacesTitle: true,
				},
			head: [
  				{
    			tag: 'link',
    			attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  				},
			],
			title: '99% of Humanity Global Fund',
			description: 'A documentary essay on collective economic ownership in capitalist economies.',
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/reading.css',
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
						// Hitting /session/sso makes Discourse start the SSO flow:
						// it bounces to the Worker's /api/sso, which signs the user
						// in (or sends them to /join/ first if not logged in).
						{ label: 'Community', link: 'https://community.99humanityfund.com/session/sso' },
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
					label: 'The 99% of Humanity Global Fund Series',
					items: [
						{ label: 'Part 1 — The World Order', link: '/part-1/' },
						{ label: 'Part 2 — The Fund Reveal', link: '/part-2/' },
						{ label: 'Part 3 — The Benefits', link: '/part-3/' },
						{ label: 'Part 4 — Governance', link: '/part-4/' },
						{ label: 'Part 5 — The Industry Penetration Strategy', link: '/part-5/' },
						{ label: 'Part 6 — The Manufacturing Relocation', link: '/part-6/' },
						{ label: 'Part 7 — The Reckoning', link: '/part-7/' },
					],
				},
			],
			components: {
				// Adds a sign-in / account control on the right side of the
				// header (see src/components/SocialIcons.astro). Uses the safe
				// override pattern from Starlight's docs: wraps the default
				// SocialIcons so search, theme toggle, and social links are kept.
				SocialIcons: './src/components/SocialIcons.astro',
			},
		}),
	],
});
