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
- [x] login page
- [x] email sign-up form
- [x] login form & authentication (JWT)
- [x] interaction with back-end
- [x] authentication error/redirect handling
- [x] host with Vercel on personal account for free development
- [x] use auth0 instead
- [ ] customize auth0: SSO, forgot password, email verification, ...
- [ ] /demo page without backend to show end-users what it's like
- [x] add content to landing page
- [ ] /blog (using [mdsvex](https://mdsvex.pngwn.io/) and [remark](https://github.com/remarkjs/remark-math/tree/main)), tags and pinned manifesto post
- [ ] add 'based' hovercard to more items
- [x] /app with svelteflow
- [ ] Mu node and initial user-interation
- [x] Deploy (with [Vercel](https://vercel.com/docs/frameworks/sveltekit) or Cloudflare)
- [ ] add diagrams
- [ ] theme customization
- [ ] [Reveal.js](https://github.com/hakimel/reveal.js) presentations
