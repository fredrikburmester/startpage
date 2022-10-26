# Nuxt 3 Minimal Starter

This is a startpage for your browser. Think of your booring new tab page and replace it with this!

![Screenshot](assets/Screenshot%202022-10-26%20at%2008.41.41.png)

This website is build with Nuxt 3 (look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more), TailwindCSS and DaisyUI. 

To use this website right away, go to: https://startpage-wr6.pages.dev/

Or for the development version (that might be broken sometimes due to development): https://develop.startpage-wr6.pages.dev/

## How it works

When you go to this website you can change a bunch of settings. All settings are stored in [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so that you don't have to change them every time you open the website. This means that you can use the link to the website above and make it your own, even though I'm the one hosting it!

In the future I might add a way to save your settings to a database so you can use it on multiple devices, but for now this website will never send any data to a server.

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

## Bugs

Sometimes all it takes is a reload of the page to fix!

If something's not working as expected it might be due to an update of the website, please reload the website and go into the settings in the bottom left corner and click on "Clear all data". If this doesn't work, please open an issue.


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




