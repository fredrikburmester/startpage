# Nuxt 3 Minimal Starter

This is a startpage for your browser. Think of your booring new tab page and replace it with this!

![Screenshot](assets/Screenshot%202022-10-26%20at%2008.41.41.png)

This website is build with Nuxt 3 (look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more), TailwindCSS and DaisyUI.  

## Features

More and more features will be added in the future. If you have any ideas, feel free to open an issue or create a pull request!

Current features:

-   [x]  Searchbar (hidable)
-   [x]  Clock (hidable)
-   [x]  Date (hidable)
-   [x]  Greeting based on time of day
-   [x]  Link badges
-   [x]  Categories
-   [x]  Changeable image
-   [x]  Theme switcher with 4 themes (for now)

## Download

Clone this repository and install the dependencies:

```bash
yarn install
```

## Run

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Build for production

To generate a static version of the website that can be self-hosted on any webserver:

```bash
yarn generate
```

This will generate a `.output/public` folder with all the files you need to host the website.

Build the application for SSR:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```




