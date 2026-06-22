import './Contact.css';

function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <p>I'm always open to new opportunities and connections. Feel free to reach out.</p>
            <div className="contact-links">
                <a href="mailto:dhairyab0110@gmail.com" className="contact-btn">Email Me</a>
                <a href="https://github.com/Dhairyabrahmbhatt1" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
                <a href="https://www.linkedin.com/in/dhairya-brahmbhatt-a0740b324" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
            </div>
        </section>
    );
}

export default Contact;