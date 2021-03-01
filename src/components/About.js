import React from 'react';
import './assets/styles/styles.css';
import './assets/styles/styles2.css';
import Resume from './assets/forms/Enrique Gomez Web Development Resume Official.pdf'

function About() {
    return (
        <section className="resume-section text-left" id="about">
            <div className="resume-section-content">
                <h1 id="first-name" className="mb-0 text-primary">
                    Enrique
                    <span id="last-name" className="text-primary">Gomez</span>
                </h1>
                <div id="address" className="subheading mb-5">
                    Johns Creek, GA 30022 · (760) 468-5194 ·
                    <a id="email" href="mailto:enrique_g_gomez@hotmail.com">enrique_g_gomez@hotmail.com</a>
                    
                </div>
                <a href={Resume} target="_blank" rel="noreferrer">Resume <i className="fas fa-file"></i></a> 
                <p className="lead mb-5">Full-stack web developer applying innovative problem solving and technical design skills developed through engineering focused education to building alluring and engaging web applications. Earned an Associate of Science in Engineering with High Honors from Georgia State University with a 3.8 GPA and currently enrolled in a full-stack web development program at UC San Diego. Recognized as calm and focused, a positive teammate, and an outstanding problem solver. Is skilled in Node.js, Express, MySQL, JavaScript, JSON navigation, and responsive design. Developed the task management system for families, “Strive Rite”, and the hiking trail finder, “Outdoorsy”.</p>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/enrique-gomez-01215b1b7/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/ezemog1996" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    )
}

export default About;