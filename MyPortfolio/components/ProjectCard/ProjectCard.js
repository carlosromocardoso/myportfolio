import './ProjectCard.css'

export const ProjectCard = (project) => `
<div class="cr-card">
        <img src=${project.image} alt=${project.title}/>
        <section class="cr-card-details">
            <h2>${project.title}</h2>
            <a class="cr-card-details__icons" href=${project.github}>
            <img src="https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/github_qqcjiq.png" alt="GitHub Icon" />
            </a>
            <a class="cr-card-details__icons" href=${project.link}>
            <img src="https://res.cloudinary.com/dqip8uhet/image/upload/v1690710178/800px-Chain_link_icon_slanted_ogpybx.png" alt="Link icon" />
            </a>
            <div class="cr-card-min-details__price">
            <p>${project.description}</p>
            <p class="tech">${project.tech}</p>
        </div>
        </section>

</div>
`;
