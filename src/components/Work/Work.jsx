import React from 'react';
import './Work.css';
import cryptoImage from '../../assets/img/screenshots/crypto.png';
import medihubImage from '../../assets/img/screenshots/medihub.png';
import ecommerceImage from '../../assets/img/screenshots/ecommerce.png';
import teamProjectImage from '../../assets/img/screenshots/teamproject.png';
import weatherAppImage from '../../assets/img/screenshots/weather-app.png';
import memeStrokeImage from '../../assets/img/screenshots/memestroke.png';
import chromeAppImage from '../../assets/img/screenshots/my-chrome-app.png';
import restaurantPageImage from '../../assets/img/screenshots/restaurant-page.png';
import arrowIcon from "../../assets/img/arrow.svg";
import repoIcon from "../../assets/img/repo.svg";
import watchhubImage from "../../assets/img/screenshots/watchhub.png"
import caffitrakImage from '../../assets/img/screenshots/caffitrak.png';
import tweeterImage from "../../assets/img/tweeter-not-x.png";
import nybestsellerImage from "../../assets/img/screenshots/nybestsellers.png"

function Work() {
  const projects = [
    {
      title: "ITS-TWEETER-NOT-X",
      description: "A mock Twitter app built with Next.js, Tailwind CSS, and Prisma ORM.",
      image: tweeterImage,
      demoLink: "",
      githubLink: "https://github.com/minzikimi/its-tweeter-not-x"
    },
    {
      title: "Hyper Crypto",
      description: "A sleek cryptocurrency tracker built with React, providing real-time data from leading crypto APIs.",
      image: cryptoImage,
      demoLink: "https://hypercrypto.netlify.app",
      githubLink: "https://github.com/minzikimi/hyper-crypto"
    },
    {
      title: "Caffitrak",
      description: "A small backend app built using the MERN stack to help users track their daily caffeine intake. The front end is developed with React.",
      image: caffitrakImage,
      demoLink: "https://caffitrak-backend.vercel.app",
      githubLink: "https://github.com/minzikimi/caffitrak",
    },
    {
      title: "New York Times Bestsellers",
      description: "Next.js app to explore the New York Times Bestsellers list. It utilizes dynamic routing, server-side rendering (SSR), and CSS Modules for styling.",
      image: nybestsellerImage,
      demoLink: "https://nytimes-bestseller-beta.vercel.app",
      githubLink: "https://github.com/minzikimi/NYtimes-bestseller"
    },
    {
      title: "WatchHub",
      description: " TV show app inspired by Netflix, built with React, React Query, and Framer Motion. It showcases trending, top-rated, and airing shows.",
      image: watchhubImage,
      demoLink: "https://meek-semolina-0c417d.netlify.app",
      githubLink: "https://github.com/minzikimi/watchhub",
    },
    {
      title: "MediHub",
      description: "A collaborative UI/UX project: Medical integration platform concept developed with React, focusing on a clean and efficient user experience.",
      image: medihubImage,
      demoLink: "https://medihubapp08.netlify.app/",
      githubLink: "https://github.com/minzikimi/medihub"
    },
    {
      title: "Bloom E-commerce",
      description: "A mock e-commerce featuring product listings fetched from the FakeStore API, along with cart functionality and a checkout process.",
      image: ecommerceImage,
      demoLink: "https://bloom-ecommerce-hi26.netlify.app/",
      githubLink: "https://github.com/minzikimi/e-commerce"
    },
    {
      title: "Speed Refine",
      description: "A collaborative project focused on optimizing clean / user-friendly interface.",
      image: teamProjectImage,
      githubLink: "https://github.com/minzikimi/speed-refine"
    },
    {
      title: "Weather App",
      description: "A simple weather application using HTML, CSS, and JavaScript to fetch weather data from an API.",
      image: weatherAppImage,
      demoLink: "https://minzikimi.github.io/weather-app/",
      githubLink: "https://github.com/minzikimi/weather-app"
    },
    {
      title: "Meme Stroke",
      description: "A lightweighted app for generating meme-stroke images, utilizing the canvas API, HTML, and CSS.",
      image: memeStrokeImage,
      demoLink: "https://minzikimi.github.io/meme-stroke/",
      githubLink: "https://github.com/minzikimi/meme-stroke"
    },
    {
      title: "Chrome App",
      description: "A Chrome extension featuring a to-do list and daily quotes, developed using JavaScript, CSS, and Webpack (work in progress).",
      image: chromeAppImage,
      demoLink: "#",
      githubLink: "https://github.com/minzikimi/my-chrome-app",
      comingSoon: true
    },
    {
      title: "Restaurant Page",
      description: "A restaurant website created with JavaScript, CSS, HTML, and bundled with Webpack.",
      image: restaurantPageImage,
      demoLink: "https://minzikimi.github.io/restaurant-page/",
      githubLink: "https://github.com/minzikimi/restaurant-page"
    }
  ];

  return (
    <section className="my-work" id="work">
      <h2 className="section-title section-title--work">My work</h2>
      <p className="section-subtitle section-subtitle--work">Some of my projects</p>
      <div className="portfolio-list">
        {projects.map((project, index) => (
       <div className="portfolio-item" key={index}>
       <div className="project-content">
         <img src={project.image} alt={project.title} className="portfolio__img" />
         <h3 className="project-title">{project.title}</h3>
         <p className="project-description">{project.description}</p>
       </div>
     
       <div className="project-links">
         {project.demoLink && (
           <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
             {project.comingSoon ? (
               <>
                 <img src={arrowIcon} alt="arrow icon" className="icon-arrow" />
                 Live Demo (Coming Soon)
               </>
             ) : (
               <>
                 <img src={arrowIcon} alt="arrow icon" className="icon-arrow" />
                 Live Demo
               </>
             )}
           </a>
         )}
         {project.githubLink && (
           <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
             <img src={repoIcon} alt="repo icon" className="icon-repo" />
             GitHub
           </a>
         )}
       </div>
     </div>
     
        ))}
      </div>
    </section>
  );
}

export default Work;
