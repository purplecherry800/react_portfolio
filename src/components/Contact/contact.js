import React from 'react';
import './contact.css';
import Diagnostics from '../../assets/diagnostics.jpeg';
import Support from '../../assets/support.jpeg';
import Maintenance from '../../assets/maintenance.jpeg';
import Interoperability from '../../assets/interoperability.jpeg';
import Facebook from '../../assets/facebook.jpeg';
import X from '../../assets/x.jpeg';
import Youtube from '../../assets/youtube.jpeg';
import Instagram from '../../assets/instagram.jpeg';


const Contact = () => {
    return (
        <section id="contactPage">
            <div id="services">
                <h1 className="contactPageTitle">Services</h1>
                <p className="servicesDesc">As a future health informatics professional, I will provide diagnostic and technical support for health information systems, develop and maintain telehealth platforms and healthcare apps, and integrate commonly used electronic health record systems to improve data patient interoperability.
                </p>

                <div className="servicesImgs">
                    <img src={Diagnostics} alt="Services" className="servicesImg"/>
                    <img src={Support} alt="Services" className="servicesImg"/>
                    <img src={Maintenance} alt="Services" className="servicesImg"/>
                    <img src={Interoperability} alt="Services" className="servicesImg"/>

                </div>
            </div>

            <div id="contact">
                <h1 className="contactTitlePage">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder='Your Name'/>
                    <input type="email" className="email" placeholder='Your Email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={Facebook} alt="Facebook" className="link"/>
                        <img src={X} alt="X" className="link"/>
                        <img src={Youtube} alt="Youtube" className="link"/>
                        <img src={Instagram} alt="Instagram" className="link"/>
                    </div>
                </form>
                </div>
        </section>
    );
}

export default Contact

/*
File Name: Cherrie_Portfolio
Student's Name: Cherrie Alintog
Student Number: 301320186
Date: Sept. 29, 2024
*/