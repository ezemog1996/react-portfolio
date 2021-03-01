import React from 'react';
import './assets/styles/styles.css';
import './assets/styles/styles2.css';

function Skills() {
    return (
        <section className="resume-section text-left" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                    <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                    <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                    <li className="list-inline-item"><i className="fab fa-react"></i></li>
                    <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                    <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    <li className="list-inline-item" style={{'fontSize': '25px'}}>MongoDB</li>
                    <li className="list-inline-item" style={{'fontSize': '25px'}}>MySQL</li>
                    <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                </ul>
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Mobile-First, Responsive Design
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Teamwork
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        Problem Solving
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;