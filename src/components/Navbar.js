import React from 'react';
import './assets/styles/styles.css';
import './assets/styles/styles2.css';
import Profile from './assets/images/profile.jpg';

function Navbar() {
    function findPos(obj) {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
        return [curtop];
        }
    }

    function scrollSmooth(spot) {
        window.scrollTo({
            top: findPos(document.getElementById(spot)),
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" onClick={() => scrollSmooth('about')} style={{cursor: 'pointer'}}>
                <span className="d-block d-lg-none">Enrique Gomez</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2 border-primary" src={Profile} alt="" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" onClick={() => scrollSmooth('about')} style={{cursor: 'pointer'}}>About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" onClick={() => scrollSmooth('interests')} style={{cursor: 'pointer'}}>Projects</a></li>
                    {/* <!-- <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li> --> */}
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" onClick={() => scrollSmooth('skills')} style={{cursor: 'pointer'}}>Skills</a></li>
                    {/* <!-- <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Coding Challenges</a></li> --> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;