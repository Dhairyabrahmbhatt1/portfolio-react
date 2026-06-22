import './Skills.css';

function Skills() {
    const skills = ['Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript', 'Git', 'DSA', 'React'];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-pill">{skill}</span>
                ))}
            </div>
        </section>
    );
}

export default Skills;