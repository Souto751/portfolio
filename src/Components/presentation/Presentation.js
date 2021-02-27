//Import React
import React from 'react'

//Import Style
import './Presentation.css';

//Import Images
import welcomeImg from '../../images/presentationBg.jpg';
import CV from '../../images/cv.png';
import Mail from '../../images/mail.png';
import GH from '../../images/githubLink.png';
import LD from '../../images/linkedin.png';

//Import CV PDF
import CVpdf from '../../documents/CV-Agustin Souto.pdf';

//Export Component
export default function Presentation() {
    return (
        <div className="welcomeDiv">
            <img src={welcomeImg} alt="pupi" className="welcomeImg" />
            <div className="name">
                <h1 className="nameH1">Agustín Souto</h1>
            </div>
            <div className="profileLinks">
                <a href="https://www.linkedin.com/in/souto751/" rel="noreferrer" target="_blank" className="profLink"><span>LinkedIn</span><img src={LD} alt="Linkedin" /></a>
                <a href="https://github.com/Souto751" rel="noreferrer" target="_blank" className="profLink"><span>GitHub</span><img src={GH} alt="Github" /></a>
                <a href="#Contact" rel="noreferrer" className="profLink"><span>Contact</span><img src={Mail} alt="Mail" /></a>
                <a href={CVpdf} rel="noreferrer" target="_blank" className="profLink"><span>Resume</span><img src={CV} alt="CV" /></a>
            </div>
        </div>
    )
}
