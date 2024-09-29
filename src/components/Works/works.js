import React from 'react';
import './works.css';
import Project1 from '../../assets/project1.jpeg';
import Project2 from '../../assets/project2.jpeg';
import Project3 from '../../assets/project3.jpeg';
import Project4 from '../../assets/project4.jpeg';
import Project5 from '../../assets/project5.jpeg';
import Project6 from '../../assets/project6.jpeg';

const Works = () => {
    return(
        <section id="works">
            <h2 className="worksTitle">My Future Projects</h2>
            <span className="worksDesc">As a student, I aim to build a strong foundation in health technology, data management, and healthcare systems. I focus on leveraging digital solutions to improve patient care, streamline healthcare processes, and support data-driven decision-making in the industry.</span>
            <div className="worksImgs">
                <img src={Project1} alt="Future Project 1" className="worksImg"/>
                <img src={Project2}  alt="Future Project 2" className="worksImg"/>
                <img src={Project3}  alt="Future Project 3" className="worksImg"/>
                <img src={Project4}  alt="Future Project 4" className="worksImg"/>
                <img src={Project5}  alt="Future Project 5" className="worksImg"/>
                <img src={Project6}  alt="Future Project 6" className="worksImg"/>
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works

/*
File Name: Cherrie_Portfolio
Student's Name: Cherrie Alintog
Student Number: 301320186
Date: Sept. 29, 2024
*/
