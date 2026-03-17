import cryptoImage from '../assets/img/screenshots/crypto.png';
import medihubImage from '../assets/img/screenshots/medihub.png';
import ecommerceImage from '../assets/img/screenshots/ecommerce.png';
import teamProjectImage from '../assets/img/screenshots/teamproject.png';
import weatherAppImage from '../assets/img/screenshots/weather-app.png';
import memeStrokeImage from '../assets/img/screenshots/memestroke.png';
import chromeAppImage from '../assets/img/screenshots/my-chrome-app.png';
import restaurantPageImage from '../assets/img/screenshots/restaurant-page.png';
import watchhubImage from '../assets/img/screenshots/watchhub.png';
import caffitrakImage from '../assets/img/screenshots/caffitrak.png';
import tweeterImage from '../assets/img/screenshots/tweeter-not-x.png';
import nybestsellerImage from '../assets/img/screenshots/nybestsellers.png';
import etchasketchImage from '../assets/img/screenshots/etch-a-sketch.png';
import smfLogo from '../assets/img/screenshots/smf-logo.png';

export const webProjects = [
  {
    title: "Fundraising Website",
    description: "Ongoing client project for the Swedish Holocaust Museum. A fundraising platform built as part of a school collaboration, focused on accessibility and impactful design.",
    image: smfLogo,
    demoLink: "https://fundraiser-smf.vercel.app/",
    githubLink: "https://github.com/minzikimi/fundraiser-smf",
    tags: ["Frontend", "React"]
  },
  {
    title: "ITS-TWEETER-NOT-X",
    description: "A mock Twitter app built with Next.js, Tailwind CSS, and Prisma ORM.",
    image: tweeterImage,
    githubLink: "https://github.com/minzikimi/its-tweeter-not-x",
    tags: ["Full-Stack", "Next.js", "Database"]
  },
  {
    title: "Hyper Crypto",
    description: "A sleek cryptocurrency tracker built with React, providing real-time data from leading crypto APIs.",
    image: cryptoImage,
    demoLink: "https://hypercrypto.netlify.app",
    githubLink: "https://github.com/minzikimi/hyper-crypto",
    tags: ["Frontend", "React", "API"]
  },
  {
    title: "Caffitrak",
    description: "A small backend app built using the MERN stack to help users track their daily caffeine intake. The front end is developed with React.",
    image: caffitrakImage,
    demoLink: "https://caffitrak-backend.vercel.app",
    githubLink: "https://github.com/minzikimi/caffitrak",
    tags: ["Full-Stack", "MERN", "Database"]
  },
  {
    title: "New York Times Bestsellers",
    description: "Next.js app to explore the New York Times Bestsellers list. It utilizes dynamic routing, server-side rendering (SSR), and CSS Modules for styling.",
    image: nybestsellerImage,
    demoLink: "https://nytimes-bestseller-beta.vercel.app",
    githubLink: "https://github.com/minzikimi/NYtimes-bestseller",
    tags: ["Frontend", "Next.js", "API"]
  },
  {
    title: "WatchHub",
    description: "TV show app built with React, React Query, and Framer Motion. It showcases trending, top-rated, and airing shows.",
    image: watchhubImage,
    demoLink: "https://meek-semolina-0c417d.netlify.app",
    githubLink: "https://github.com/minzikimi/watchhub",
    tags: ["Frontend", "React", "API"]
  },
  {
    title: "MediHub",
    description: "A collaborative UI/UX project: Medical integration platform concept developed with React, focusing on a clean and efficient user experience.",
    image: medihubImage,
    demoLink: "https://medihubapp08.netlify.app/",
    githubLink: "https://github.com/minzikimi/medihub",
    tags: ["Frontend", "React", "UI/UX"]
  },
  {
    title: "Bloom E-commerce",
    description: "A mock e-commerce featuring product listings fetched from the FakeStore API, along with cart functionality and a checkout process.",
    image: ecommerceImage,
    demoLink: "https://bloom-ecommerce-hi26.netlify.app/",
    githubLink: "https://github.com/minzikimi/e-commerce",
    tags: ["Frontend", "React", "API"]
  },
  {
    title: "Speed Refine",
    description: "A collaborative project focused on optimizing clean / user-friendly interface.",
    image: teamProjectImage,
    githubLink: "https://github.com/minzikimi/speed-refine",
    tags: ["Frontend"]
  },
  {
    title: "Weather App",
    description: "A simple weather application using HTML, CSS, and JavaScript to fetch weather data from an API.",
    image: weatherAppImage,
    demoLink: "https://minzikimi.github.io/weather-app/",
    githubLink: "https://github.com/minzikimi/weather-app",
    tags: ["Frontend", "JavaScript", "API"]
  },
  {
    title: "Meme Stroke",
    description: "A lightweighted app for generating meme-stroke images, utilizing the canvas API, HTML, and CSS.",
    image: memeStrokeImage,
    demoLink: "https://minzikimi.github.io/meme-stroke/",
    githubLink: "https://github.com/minzikimi/meme-stroke",
    tags: ["Frontend", "JavaScript"]
  },
  {
    title: "Chrome App",
    description: "A Chrome extension featuring a to-do list and daily quotes, developed using JavaScript, CSS, and Webpack (work in progress).",
    image: chromeAppImage,
    demoLink: "#",
    githubLink: "https://github.com/minzikimi/my-chrome-app",
    comingSoon: true,
    tags: ["Frontend", "JavaScript"]
  },
  {
    title: "Restaurant Page",
    description: "A restaurant website created with JavaScript, CSS, HTML, and bundled with Webpack.",
    image: restaurantPageImage,
    demoLink: "https://minzikimi.github.io/restaurant-page/",
    githubLink: "https://github.com/minzikimi/restaurant-page",
    tags: ["Frontend", "JavaScript"]
  },
  {
    title: "Etch-a-sketch",
    description: "My first web app — a simple drawing grid built with HTML, CSS, and JavaScript. Inspired by the classic Etch-a-Sketch toy",
    image: etchasketchImage,
    demoLink: "https://minzikimi.github.io/etch-a-sketch/",
    githubLink: "https://github.com/minzikimi/etch-a-sketch",
    tags: ["Frontend", "JavaScript"]
  }
];
