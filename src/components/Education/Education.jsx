import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className="education">
        <h2 className='title'>Education</h2>
        <div className='education-container'>
            <div className="education-year">
                <h2 className='year'>2025</h2>
                <div className="line"></div>
            </div>
            <div className="education-content">
                <h2 className="education-type">Full Stack Software Developement Certification</h2>
                <p className="institution">Moringa School</p>
            </div>
        </div>
    </div>
  )
}

export default Education