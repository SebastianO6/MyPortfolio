import React from 'react'
import image from '../../assets/me.png'
import mobile from '../../assets/mobile.png'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.png'  
import './Contacts.css'

const Contacts = () => {
  return (
    <div className='contacts'>
      <h1 className='title'>Contacts</h1>
      {/* <div className="image">
        <img src={image} alt="" />
      </div> */}
      <div className="buttons">
        <div className="mobile"><img className='mobile' src={mobile} alt="" /><span>+254 720 802 853</span></div>
        <div className="gmail"><img className='gmail' src={gmail} alt="" /><span>sebatianbill06@gmail.com</span></div> 
      </div>
      
    </div>
  )
}

export default Contacts