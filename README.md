# Startpage

This is a startpage for your browser. Think of your booring new tab page and replace it with this!

To use this website right away, go to: <https://startpage-wr6.pages.dev/>. Or for the development version (that might be broken sometimes due to development): <https://develop.startpage-wr6.pages.dev/>

**All settings are done in the web interface, there are no enviroment variables, no json or config files, nothing! This is a complete experience in the browser.**

![Screenshot](assets/Screenshot%202022-10-26%20at%2008.41.41.png)

**If you want to support this website and what I do:** 

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?hosted_button_id=HAA8RD9LJQ2ZW)

<a href="https://www.buymeacoffee.com/fredrikbur3" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## 



## ⚡️ Features

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

## 🖇️ Widgets

> Widgets are under development

### Plex

![Plex](assets/plex-widget.png)

The plex widget enables you to see current streams on your server. Due to SSL certificates you'll need to supply a SSL certified Plex domain like `https://plex.domain.com`, or if you host this startpage without SSL you can just supply the external IP address and port of your Plex server like so: `http://<EXTERNAL_IP>:32400`.

### Weather

![Weather](assets/weather-widget.png)

The weather widget enables you to see the current weather. The weather is fetched from [OpenWeatherMap](https://openweathermap.org/). You'll need to supply an API key from OpenWeatherMap long and lat coordinates.

## 🐞 Bugs

Sometimes all it takes is a reload of the page to fix!

If something's not working as expected it might be due to an update of the website, please reload the website and go into the settings in the bottom left corner and click on "Clear all data". If this doesn't work, please open an issue.


## 💾 Download

This website is build with Nuxt 3 (look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more), TailwindCSS and DaisyUI. 

Clone this repository and install the dependencies:

```bash
yarn install
```

## 🏃🏻‍♂️ Run

Start the development server on http://localhost:3000

```bash
yarn dev
```

## 🔧 Build for production

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

## Docker

This project is also available as a docker image (see Dockerfile).

Clone this repository, cd into the repo and build the docker image:

```bash
docker build -t startpage .

docker run -d -p 3000:80 startpage
```
