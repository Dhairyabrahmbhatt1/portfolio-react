import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website built from scratch using React. Designed with a dark modern aesthetic.',
            link: 'https://github.com/Dhairyabrahmbhatt1/portfolio-react'
        },
        {
            title: 'Hostel Management System',
            description: 'A Hostel Mangement System that was built from scratch using React and Flask. Designed as a project for DBMS coarse at PDEU.',
            link: 'https://github.com/Dhairyabrahmbhatt1/Hostel-Management-System-Main'
        },
        {
            title: 'Inventory Management System',
            description: 'A python and mySQL database based inventory management system. Designed as a project for DBMS coarse at PDEU.',
            link: 'https://github.com/Dhairyabrahmbhatt1/Inventory-Management-System/tree/main/inventory_system'
        }
        {
            title: 'Hospital Management System',
            description: 'A Java based hospital management system. Designed as a project for Java coarse at PDEU.',
            link: 'https://github.com/Dhairyabrahmbhatt1/Hospital-Management-System'
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