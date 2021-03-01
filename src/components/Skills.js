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
                    <li className="list-inline-item" title="HTML5"><i className="fab fa-html5"></i></li>
                    <li className="list-inline-item" title="CSS3"><i className="fab fa-css3-alt"></i></li>
                    <li className="list-inline-item" title="Bootstrap"><i className="devicon-bootstrap-plain"></i></li>
                    <li className="list-inline-item" title="JavaScript ES6+"><i className="fab fa-js-square"></i></li>
                    <li className="list-inline-item" title="Reactjs"><i className="fab fa-react"></i></li>
                    <li className="list-inline-item" title="Node.js"><i className="fab fa-node-js"></i></li>
                    <li className="list-inline-item" title="NPM"><i className="fab fa-npm"></i></li>
                    <li className="list-inline-item" title="MongoDB"><i className="devicon-mongodb-plain"></i></li>
                    <li className="list-inline-item" title="MySQL"><i className="devicon-mysql-plain"></i></li>
                    <li className="list-inline-item" title="Wordpress"><i className="fab fa-wordpress"></i></li>
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