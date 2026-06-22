import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
    const [displayText, setDisplayText] = useState('');
    const fullText = "2nd year student at PDEU · Building real projects and learning every day";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero">
            <h1>Hi, I'm <span className="accent">Dhairya Brahmbhatt</span> <br />ICT Student & Web Developer</h1>
            <p>{displayText}</p>
        </section>
    );
}

export default Hero;