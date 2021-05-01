import React from 'react'
import './AboutScreen.css'
import {Link} from 'react-router-dom'
import img from '../../svg/data-il.svg';

function AboutScreen() {
    return (
        <div className='main-about-container'>
            <div className='about-section'>
                <div className='about-section-one'>
                <h2 className='about-title'>About</h2>
                <p className='about-para'>Visualize your data and statistics quickly and easily with Chart Flow's online chart maker</p>
                <p className='about-para'>Use one of 5 interactive and responsive chart types from simple bars and lines to radar chart</p>
                <h3 className='about-subtitle'>Development Info</h3>
                <p className='about-para'>This website was developed by Saad Alghadhban in 2021,as a part of the Developer portfolio,
                    the technologies that were used to create the website are
                    <ul className='about-list'>
                        <li>NodeJS-ExpressJS (for back-end)</li>
                        <li>MongoDB Database</li>
                        <li>ReactJS (for front-end)</li>
                    </ul>
                </p>
                <h3 className='about-subtitle'> User Security</h3>
                <p className='about-para'>Your data is secured with ChartFlow,
                 we use bcrypt hashing functionalities to authenticate and store user passwords in the database
                  and JWT for authorization </p>
                <Link to='/contact' className='contact-dev'>Contact the Developer</Link>
                </div>

                <div className='about-section-two'>
                 
                    <p className='about-pre-title'>Visualize your Data </p>
                    <p className='about-slogan'>Use one of 5 interactive and responsive chart types from simple bars and lines to radar chart </p>
                    <img className='img-svg' src={img} />
                
                </div>
            </div>
            
        </div>
    )
}

export default AboutScreen
