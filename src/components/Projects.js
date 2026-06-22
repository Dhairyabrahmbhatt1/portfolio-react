import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website built from scratch using React. Designed with a dark modern aesthetic.',
            link: 'https://github.com/Dhairyabrahmbhatt1/portfolio-react'
        }
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noreferrer">GitHub →</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;