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
import ContactBtn from '../../images/contactBtn.png';

//Import CV PDF
import CVpdf from '../../documents/CV-Agustin Souto.pdf';

//Export Component
export default function Presentation() {
    
    const mobileMenu = (status) => {
        if(status === "open"){
            document.getElementsByClassName('contactBtnMobile')[0].style.display = "none";
            document.getElementsByClassName('profileLinksMob')[0].style.display = "flex";
        }else if(status === "close"){
            document.getElementsByClassName('profileLinksMob')[0].style.display = "none";
            document.getElementsByClassName('contactBtnMobile')[0].style.display = "flex";
        }
    }

    return (
        <div className="welcomeDiv noselect" id="top">
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
            <img src={ContactBtn} alt="contact" className="contactBtnMobile" onClick={() => mobileMenu("open")} />
            <div className="profileLinksMob">
                <div className="mobileContactTitleDiv">
                    <div />
                    <h2 className="mobileContactTitle">Contact Info</h2>
                    <div />
                    <p className="closeMobileContact" onClick={() => mobileMenu("close")}>x</p>
                </div>
                <div className="separateMobileLinks">
                    <a href="https://www.linkedin.com/in/souto751/" rel="noreferrer" target="_blank" className="mobileLink">LinkedIn<img src={LD} alt="Linkedin" /></a>
                    <a href="https://github.com/Souto751" rel="noreferrer" target="_blank" className="mobileLink">GitHub&nbsp;&nbsp;<img src={GH} alt="Github" /></a>
                    <a href="#Contact" rel="noreferrer" className="mobileLink">Contact&nbsp;<img src={Mail} alt="Mail" /></a>
                    <a href={CVpdf} rel="noreferrer" target="_blank" className="mobileLink">Resume&nbsp;<img src={CV} alt="CV" /></a>
                </div>
            </div>
        </div>
    )
}
