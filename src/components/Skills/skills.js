import React from 'react';
import './skills.css';
import Ehr from '../../assets/ehr.jpeg';
import Proglang from '../../assets/prog_lang.jpeg';
import Medterm from '../../assets/medterm.jpeg';

const Skills = () => {
    return (
        <section id='skills'>
            <span className ="skillTitle">About Me</span>
            <span className ="skillDesc">I possess proficiency in programming languages such as C#, JavaScript, and SQL, along with experience working with Electronic Health Records (EHR) systems. I have a strong understanding of health informatics standards, medical terminologies, and coding systems, as well as healthcare regulations and standards. My experience extends to telemedicine, remote patient monitoring, and healthcare apps. Additionally, I am skilled at interpreting and presenting health data to support decision-making and am familiar with Agile and Scrum methodologies in project management.</span>
            
            <div className ="skillBars">
                <div className="skillBar">
                    <img src={Ehr} alt="Electronic Health Records" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Electronic Health Records</h2>
                        <p>Familiarity with Electronic Health Records (EHR) systems.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={Proglang} alt="Programming Languages" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Programming Languages</h2>
                        <p>Proficiency in programming languages like C#, Javascript, and SQL.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={Medterm} alt="Medical Terminology" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Medical Terminology</h2>
                        <p>Knowledge of medical terminologies and coding systems.</p>
                    </div>
                </div>

            </div>
        
        </section>
    );
}

export default Skills

/*
File Name: Cherrie_Portfolio
Student's Name: Cherrie Alintog
Student Number: 301320186
Date: Sept. 29, 2024
*/
