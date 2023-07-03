import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'

function Community() {
    const handleClick = () => {
        window.open('https://github.com/','_blank');
    }
  return (
    <div className='container'>
        <div className='start-wrapper'>
            <div className='start-img'>
                <img src={tc} alt="" />

            </div>
            <div className='start-content'>
                <h2 className='section-title'>Join our community</h2>
                <p>
                    uuusidhvjhjjjjjbfhfffffffffffffffffffffffffffffffffffj

                </p>
                <button className='register-btn' onClick={handleClick}>Join Now</button>
            </div>

        </div>
      
    </div>
  )
}

export default Community
