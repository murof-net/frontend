# frontend
SvelteKit front-end of murof.net

## Context

Web application with which users on murof interact. Contains the landing page and learning environment portal.

Notes on technologies used:
- [`SvelteKit`](https://kit.svelte.dev/) web-framework with componentry and routing
- [`Tailwindcss`](https://tailwindcss.com/) UI framework for in-HTML styling
- [`shadcn-svelte`](https://www.shadcn-svelte.com/) UI components built with Tailwind for Svelte
- authentication?!

## Quickstart

Start development server

```bash
npm run dev -- --open
```

## Roadmap
- [x] hero page
- [x] login page
- [ ] email sign-up form
- [ ] login form & authentication (JWT)
- [ ] use of auth0?
- [ ] interaction with back-end
- [ ] blog (using [mdsvex](https://mdsvex.pngwn.io/)), tags and pinned manifesto post
- [ ] app page with [toolbar](https://lucide.dev/icons/?search=learn) and ...
  - [ ] dashboard page
  - [ ] profile page
  - [ ] module page
- [ ] Deploy (with [Vercel](https://vercel.com/docs/frameworks/sveltekit))
- [ ] add features/pricing to landing page
- [ ] theme customization
