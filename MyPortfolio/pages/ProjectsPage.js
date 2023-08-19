import './ProjectsPage.css';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { proyectsData } from '../data/projectsData';
import { cleanPage } from '../utils/cleanPage';

export const Projects = () => {
  const main = document.querySelector('main');
  cleanPage(main);
  main.innerHTML = `
    <div id="projects"></div>
    <div class="filter">
    <h2 class="filter-title">Filter:</h2>
    <button class="cr-button"><h4>All</h4></button>
    <button class="cr-button"><h4>Code</h4></button>
    <button class="cr-button"><h4>Frameworks</h4></button>
    <button class="cr-button"><h4>CMS's</h4></button>
    </div>
    <div class="projects-container"></div>
    </section>`;
  const container = document.querySelector('.projects-container');
  const proyectItems = proyectsData.map((item) => {
    // Creamos la función para recorrer el array de las diferentes tecnologías usadas por proyecto
    const technologiesItems = item.technologies.map((technology) => {
      return `
        <img
          src="${technology.img}"
          alt="${technology.technology}"
        />
      `;
    });

    // Establecemos el template de cada proyecto
    return `
    <article class="cr-card">
        <img src=${item.image} alt=${item.title}/>
        <section class="cr-card-details">
        <h2>${item.title}</h2>
            <p>${item.description}</p>
            <div class="proyect-technologies">
            ${technologiesItems.join('')}
            </div>
            <div class="cr-card-links">
            <a class="cr-card-details__icons" href=${item.github}>
            <img src="https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/github_qqcjiq.png" alt="GitHub Icon" />
            </a>
            <a class="cr-card-details__icons" href=${item.link}>
            <img src="https://res.cloudinary.com/dqip8uhet/image/upload/v1690710178/800px-Chain_link_icon_slanted_ogpybx.png" alt="Link icon" />
            </a>
            </div>
    </article>
  `;
  });

  container.innerHTML += proyectItems.join('')
}

