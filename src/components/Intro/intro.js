import React, { useState } from 'react';
import './intro.css';
import bg from '../../assets/id.jpeg';
import btnImg from '../../assets/hireme.jpeg';
import {Link} from 'react-scroll';

const Intro = () => {

    const [showPdf, setShowPdf] = useState(false);
    const handleClick = () => {
        setShowPdf(!showPdf);
      };

    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hi!</span><br></br>
                <span className="introText">I'm <span className="introName">Cherrie Alintog</span><br></br>A Student</span>
                <p className="introPara">"I am currently in my second year <br></br>of the Health Informatics Technology program <br></br>and in the process of applying for my co-op."</p>
                <Link><button className="btn" onClick={handleClick}><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
            
                {showPdf && (
                    <div style={{ marginTop: '20px' }}>
                        <iframe
                            src="./resume.pdf"
                            width="100%"
                            height="600px"
                            style={{ border: 'none' }}
                            title="PDF Viewer"
                        />
                    </div>
                )}        
            </div>
            <img src={bg} alt="Profile" className="bg"/>

        </section>
    )
}

export default Intro

/*
File Name: Cherrie_Portfolio
Student's Name: Cherrie Alintog
Student Number: 301320186
Date: Sept. 29, 2024
*/