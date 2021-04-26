import React from 'react';
import './assets/styles/styles.css';
import './assets/styles/styles2.css';
import StriveRite from './assets/images/striverite.png';
import Outdoorsy from './assets/images/Outdoorsy.png';
import MomAndPop from './assets/images/MomAndPop.png';
import GoogleBooksSearch from './assets/images/GoogleBooksSearch.png';
import ElFuegoEatery from './assets/images/ElFuegoEatery.png';

function Projects() {
    return (
        <section className="resume-section text-left" id="interests">
            <div className="resume-section-content">
                <h2>Projects</h2>
                <h5 className="mb-5">Click the image to view the repo</h5>
                <div className="container">
                    <div className="row project-div p-2 border border-primary rounded mb-4 d-flex align-items-center">
                        <a className="col-md-6" href="https://github.com/ezemog1996/MomAndPop.git" target="_blank" rel="noreferrer"><img alt="a project" className="project height-auto" src={MomAndPop}/></a>
                        <div className="col-md-6 mt-2">
                            <h4 className="text-primary">Mom and Pop</h4>
                            <p>   
                                Mom and Pop uses MySQL, Express, React, and Node. It is a possible platform for small businesses to create an account with their details a profile picture for consumers to review their services. Businesses can be found by zip code and service or company name.
                                To view the live site <a href="https://momandpop2021.herokuapp.com/" target="_blank" rel="noreferrer">Click Here</a> 
                            </p>
                        </div>
                    </div>
                    <div className="row project-div p-2 border border-primary rounded mb-4 d-flex align-items-center">
                        <a className="col-md-6" href="https://github.com/ezemog1996/StriveRite.git" target="_blank" rel="noreferrer"><img alt="a project" className="project height-auto" src={StriveRite}/></a>
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
                        <a className="col-md-6" href="https://github.com/ezemog1996/Google-Books-Search.git"target="_blank" rel="noreferrer"><img alt="a project" className="project height-auto" src={GoogleBooksSearch}/></a>
                        <div className="col-md-6 mt-2">
                            <h4 className="text-primary">Google Books Search</h4>
                            <p>   
                            In this app, users can search the Google Books API and save books they are interested in. They can navigate to the Saved Books page to view the books they've saved.
                            To view the live site <a href="https://amazinggooglebooks.herokuapp.com/" target="_blank" rel="noreferrer">Click Here</a>
                            </p>
                        </div>
                    </div>
                    <div className="row project-div p-3 border border-primary rounded d-flex align-items-center">
                        <a className="col-md-6" href="https://github.com/ezemog1996/El-Fuego-Eatery.git"target="_blank" rel="noreferrer"><img alt="a project" className="project height-auto" src={ElFuegoEatery}/></a>
                        <div className="col-md-6 mt-2">
                            <h4 className="text-primary">El Fuego Eatery</h4>
                            <p>   
                            This is a reservation making app. It uses React, Node.js, Express, MongoDB, and Bootstrap. The client page is where reservations are made. There is also an admin page where reservations can be viewed and checked off as they're seated or if they cancel. Only reservations of the current day show and any reservations made on a different day will show when that day arrives. Currently, there is no authentication for the admin page. To view the live site <a href="https://elfuegoeatery.herokuapp.com/" target="_blank" rel="noreferrer">Click Here</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;