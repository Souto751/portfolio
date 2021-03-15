//Import React
import React from 'react'

//Import Style
import './Projects.css';

//Import Images
import WatchlistImg from '../../images/watchlist.jpg';
import TestBook from '../../images/testbook.jpg';
import PupiGames from '../../images/pupiGames.jpg';
import QuoteGenerator from '../../images/randomQuote.jpg';
import Bakery from '../../images/bakery.jpg'

import HTML from '../../images/html.png';
import CSS from '../../images/css.png';
import JS from '../../images/js.png';
import ReactIcon from '../../images/react.png';
import Svelte from '../../images/svelte.png';
import Cpp from '../../images/cpp.png';
import Firebase from '../../images/firebase.png';
import Sass from '../../images/sass.png';

import Github from '../../images/github.png';
import Link from '../../images/link.png';
import CodePen from '../../images/codepen.png';

import BackToTopBtn from '../../images/backTop.png';

//Import JSON
import ProjectsList from './Projects.json';

//Export Component
export default function Projects() {

    const whichImg = (tech) => {
        switch(tech){
            //Project Image
            case "Watchlist":
                return WatchlistImg;
            case "Testbook":
                return TestBook;
            case "Pupigames":
                return PupiGames;
            case "Quote":
                return QuoteGenerator;
            case "Bakery":
                return Bakery;

            //Technologies Image
            case "HTML":
                return HTML;
            case "CSS":
                return CSS;
            case "JS":
                return JS;
            case "React":
                return ReactIcon;
            case "Cpp":
                return Cpp;
            case "Firebase":
                return Firebase;
            case "Sass":
                return Sass;
            case "Svelte":
                return Svelte;

            //Link Image
            case "Github":
                return Github;
            case "Link":
                return Link;
            case "CodePen":
                return CodePen;
            default:
                break;
        }
    }

    const evenOddDiv = (x) => {
        return x % 2 === 0 ? "projectDivEven" : "projectDivOdd";
    }

    return (
        <div className="projects noselect">
            <div className="projectsTitleDiv">
                <div />
                <h2 className="projectsTitle">Projects</h2>
                <a href="#top" className="backTopLink"><img src={BackToTopBtn} alt="backTop" className="backTopBtn" /></a>
            </div>
            {
                ProjectsList.map(proj => {
                    return (
                        <div key={proj.name} className="projectContainer">
                            <div className={evenOddDiv(proj.id)}>
                                <div className="projectImgDiv">
                                    <img src={whichImg(proj.img)} alt="project" className="projectImg" />
                                    <div className="projectLinksDiv">
                                        {
                                            proj.links.map((link, x = 0) => {
                                                return <a className="projectLink" key={x} href={link.link} target="_blank" rel="noreferrer"><img src={whichImg(link.img)} alt="project" /></a>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="projectInfoDiv">
                                    <h3 className="projectName">{proj.name}</h3>
                                    <p>{proj.desc}</p>
                                    <div className="techDiv">
                                    {
                                        proj.technologies.map((tech, x = 0) => {
                                            return <img src={whichImg(tech)} key={x} alt="project" className="projectTech" /> 
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                            <hr style={{"width": "50%"}} id="hr" />
                        </div>
                    )
                })
            }
            <div className="ghLinkDiv"><p>You can find other projects on my <a href="https://github.com/Souto751" rel="noreferrer" target="_blank">Github</a>!</p></div>
        </div>
    )
}