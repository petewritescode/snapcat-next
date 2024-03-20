# Snapcat

Code sample app built using [Next.js](https://nextjs.org/),
[React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/),
[Sass](https://sass-lang.com/), [ESLint](https://eslint.org/),
[Prettier](https://prettier.io/), [Jest](https://jestjs.io/) and
[Testing Library](https://testing-library.com/).

![Snapcat](/docs/snapcat.png)

## Try it out

https://snapcat-next.vercel.app

On your first visit you'll be assigned a random user ID, shown in the footer.
This will allow you to save favourites and vote on images.

## Points of interest

- **[Next.js App Router](https://nextjs.org/docs/app)** - The app uses Next.js's
  modern and recommended router, enabling the latest features and optimisations.
- **[Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)** -
  The majority of components are Server Components, allowing them to be
  server-side rendered. This improves performance and SEO, and reduces the
  client bundle size.
- **[Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)** -
  Used for handling image uploads, votes and favourites. This simplifies the
  client-side code and allows direct interaction with the API without exposing
  the API key.
- **[Optimistic updates](https://react.dev/reference/react/useOptimistic)** -
  Giving instant UI feedback and making the app feel more responsive.
- **[Middleware](/src/middleware.ts)** - Used to generate a random user ID on
  the first visit and store it in a cookie. This is the used to fetch
  user-specific data during server-side rendering, rather than making API calls
  in the browser.
- **[Caching](https://nextjs.org/docs/app/building-your-application/caching)** -
  The app leverages Next.js's caching mechanisms to minimise network requests
  and maximise performance.
- **Accessibility and SEO** - 100%
  [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) and
  [axe](https://www.deque.com/axe/) scores across the app.

## Running locally

Clone the repo:

```bash
git clone https://github.com/petewritescode/snapcat-next.git
```

Rename `.env.template` to `.env.local` and replace `API_KEY` with your own,
obtained from [The Cat API](https://thecatapi.com/).

Run the project:

```bash
npm run dev
```

Run tests:

```bash
npm run test
```

## Get in touch

I'd love to hear what you think!

Email: hello@petewritescode.com \
LinkedIn: https://www.linkedin.com/in/pete-williams
