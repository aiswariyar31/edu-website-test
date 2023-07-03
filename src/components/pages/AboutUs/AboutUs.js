import React from 'react'
import './AboutUs.css'
import miya from '../../../assets/img/miya.jpg'


const AboutUs = () => {
  return (
    <div className='container'>
        <div className='about-us-container'>
            <div className='team-members'>
                <h2>Our team</h2>
                <div className='member-card'>
                    <img className="member-image" src={miya} alt="miya Doe" />
                    <h3 className='member-name'>Riya</h3>
                    <p className='member-role'>Co Founder</p>
                </div>
            </div>
            <div className='about-us-description'>
                <h1 className='about-us-heading'>About Us</h1>
                <p>To work in a professional environment where I can contribute
myself and enrich my skills according to the latest technologies
and to work towards achieving the organizational goals.</p>

            </div>

        </div>
      
    </div>
  )
}

export default AboutUs
