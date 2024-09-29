# frontend
SvelteKit front-end of [`murof.net`](https://murof.net)

## Context

The [`SvelteKit`](https://kit.svelte.dev/) server is used to serve the UI for the [murof](https://murof.net) web-application. It is responsible for providing the main interface to murof, as well as efficiently route users & their requests.

Web application with which users on murof interact. Contains the landing page and learning environment portal.

Notes on technologies used:
- [`Tailwindcss`](https://tailwindcss.com/) UI framework for in-HTML styling
- [`shadcn-svelte`](https://www.shadcn-svelte.com/) UI components built with Tailwind for Svelte
- [`xyflow`](https://www.xyflow.com/) UI interface (specifically [SvelteFlow](https://svelteflow.dev/))
- [`mdsvex`](https://mdsvex.pngwn.io/) markdown preprocessor for Svelte

## Quickstart

Start development server

```bash
npm run dev -- --open
```

## Roadmap
- [x] hero page
- [x] auth pages
- [x] add content to landing page
- [x] Deploy (with [Vercel](https://vercel.com))
- [x] /app with svelteflow
- [ ] link auth with backend (simplified version)
- [ ] use svelte-typewriter for hero page
- [ ] /demo page without backend to show end-users what it's like
- [ ] /blog (using [mdsvex](https://mdsvex.pngwn.io/) and [remark](https://github.com/remarkjs/remark-math/tree/main)), tags and pinned manifesto post
- [ ] Mu node and initial user-interation
- [ ] add 'based' hovercard to more items
- [ ] [Reveal.js](https://github.com/hakimel/reveal.js) presentations
- [ ] theme customization
