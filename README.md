This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Run Development
Begin by setting the recommended `Node` version using `nvm`:

```shell
# Change directory to the project folder.
$ cd car-website
# Set the Node version set within the .nvmrc config file using nvm:
$ nvm use

# Run the development server locally.
$ npm run dev
```

## Sanity

### Sanity Studio
`Sanity Studio` is the admin/editor interface for the `Sanity CMS`. This is where content can be added to update pages, create blog posts, edit page content, upload assets and manage authors. Think of it like the WordPress dashboard, but customizable and schema-driven.

Follow these steps once a `Sanity` account has been created and a project has been generated.

We create a new `Studio` with `Sanity CLI`. Follow the instructions in the terminal:

```shell
# Install Sanity as an npm package. This will list in the package.json file.
$ npx sanity@latest init
```

The `Sanity Studio` can then be run locally:

```shell
# Run the development server locally.
$ npm run dev
```

Open the `Studio` running locally in your browser from: `http://localhost:3000/studio` and you should now see a screen prompting you to log in to the Studio. Login using `Google` or other credentials. Use the same service (Google, GitHub, or email) that you used when you logged in to the CLI.
