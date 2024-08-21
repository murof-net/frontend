# frontend
SvelteKit front-end of murof.net

## Context

Web application with which users on murof interact. Contains the landing page and learning environment portal.

Notes on technologies used:
- [`SvelteKit`](https://kit.svelte.dev/) web-framework with componentry and routing
- [`Tailwindcss`](https://tailwindcss.com/) UI framework for in-HTML styling
- [`shadcn-svelte`](https://www.shadcn-svelte.com/) UI components built with Tailwind for Svelte
- [`auth0`](https://auth0.com/) user authentication
- [`xyflow`](https://www.xyflow.com/) UI interface

## Quickstart

Start development server

```bash
npm run dev -- --open
```

## Roadmap
- [x] hero page
- [x] login page
- [x] email sign-up form
- [x] login form & authentication (JWT)
- [x] interaction with back-end
- [x] authentication error/redirect handling
- [ ] use auth0 instead
- [x] add content to landing page
- [ ] /blog (using [mdsvex](https://mdsvex.pngwn.io/) and [remark](https://github.com/remarkjs/remark-math/tree/main)), tags and pinned manifesto post
- [ ] add 'based' hovercard to more items
- [x] /app with svelteflow
- [ ] Mu node and initial user-interation
- [x] Deploy (with [Vercel](https://vercel.com/docs/frameworks/sveltekit) or Cloudflare)
- [ ] add diagrams
- [ ] theme customization
- [ ] [Reveal.js](https://github.com/hakimel/reveal.js) presentations
