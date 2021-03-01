import React from 'react';
import './assets/styles/styles.css';
import './assets/styles/styles2.css';
import StriveRite from './assets/images/striverite.png';
import Outdoorsy from './assets/images/Outdoorsy.png';
import EmployeeManagement from './assets/images/Employee-Management-System.png';
import TeamGenerator from './assets/images/Employee-Team-Generator.png';
import WeatherDashboard from './assets/images/Weather-Dashboard.png';

function Projects() {
    return (
        <section className="resume-section text-left" id="interests">
            <div className="resume-section-content">
                <h2>Projects</h2>
                <h5 className="mb-5">Click the image to view the repo</h5>
                <div className="container">
                    <div className="row project-div p-2 border border-primary rounded mb-4 d-flex align-items-center">
                        <a className="col-md-6" href="" target="_blank" rel="noreferrer"><img alt="a project" className="project height-auto" src={StriveRite}/></a>
                        <div className="col-md-6 mt-2">
                            <h4 className="text-primary">Strive Rite</h4>
                            <p>   
                                Strive Rite is a task and point management system for parents and their children. The backend was built using Node.js and Sequelize. Handlebars was used to render some of the HTML. When parents sign themselves and their children up and can easily assign any task with a point value to any child.
                                When a child completes a task, the points are added to their total so that they may redeem rewards. Rewards are found using Rainforest API and can be assigned a point worth when added by the parent to the child's wishlist.
                                To view the live site <a href="https://striverite.net/" target="_blank" rel="noreferrer">Click Here</a> 
                            </p>
                        </div>
                    </div>
                    <div className="row project-div p-3 border border-primary rounded mb-4 d-flex align-items-center">
                        <a className="col-md-6" href="https://github.com/Jruuuu/ProjectBeen.git" target="_blank" rel="noreferrer"><img alt="a project" className="project height-auto" src={Outdoorsy}/></a>
                        <div className="col-md-6 mt-2">
                            <h4 className="text-primary">Outdoorsy</h4>
                            <p>   
                                Outdoorsy uses Google Maps API, Hiking Project API, and Open Weather API to help users find a hiking trail in any city they'd like.  When a user types a city into the search bar, the application saves it in recent searches and generates ten trails in that city.
                                When a user clicks on one of the trails, the details of the trail appear and the map pinpoints the trail's location. To view the live site <a href="https://outdoorsytrailfinder.com/" target="_blank" rel="noreferrer">Click Here</a>
                            </p>
                        </div>
                    </div>
                    <div className="row project-div p-3 border border-primary rounded mb-4 d-flex align-items-center">
                        <a className="col-md-6" href="https://github.com/ezemog1996/Employee-Management-System.git" target="_blank" rel="noreferrer"><img alt="a project" className="project height-auto" src={EmployeeManagement}/></a>
                        <div className="col-md-6 mt-2">
                            <h4 className="text-primary">Employee Management System</h4>
                            <p>   
                                This employee management system runs in the terminal using Node.js and MySQL. A user can add departments, roles, and employees. Each role must be assigned to a department, and each employee but be assigned a role and to a manager.
                                It also keeps track of salaries and department budgets by adding the salaries of all the employees in that department.
                            </p>
                        </div>
                    </div>
                    <div className="row project-div p-3 border border-primary rounded mb-4 d-flex align-items-center">
                        <a className="col-md-6 small-screen-priority" href="https://github.com/ezemog1996/Employee-Team-Generator.git" target="_blank" rel="noreferrer"><img alt="a project" className="project height-auto" src={TeamGenerator}/></a>
                        <div className="col-md-6 mt-2">
                            <h4 className="text-primary">Employee Team Generator</h4>
                            <p>   
                                This employee team generator makes is easy for managers to generate a page with all the necessary information about their employees for easy and quick access when the information is needed.
                                It is run in the terminal using Node.js and a JSON file as the database. Once a manager is finished entering their employees' information, a new HTML file is generated displaying each employee along with their information.
                            </p>
                        </div>
                    </div>
                    <div className="row project-div p-3 border border-primary rounded d-flex align-items-center">
                        <a className="col-md-6" href="https://github.com/ezemog1996/Weather-Dashboard.git"target="_blank" rel="noreferrer"><img alt="a project" className="project height-auto" src={WeatherDashboard}/></a>
                        <div className="col-md-6 mt-2">
                            <h4 className="text-primary">Weather Dashboard</h4>
                            <p>   
                                This weather app uses Open Weather API to generate today's weather and the five-day forecast of any desired city.
                                The searched city is also saved to a list of all the cities searched by the user. To view the live site <a href="https://ezemog1996.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">Click Here</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;