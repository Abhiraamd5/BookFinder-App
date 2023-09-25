import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abhiraam</a>
      <div className="footer__socials">
        <a href="https://www.facebook.com/Abhi Raam" target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/abhiraamd/" target='_blank'><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/abhiraam-duduka-b4743222b/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Abhiraamd5" target='_blank'><BsGithub/></a>
        
        


      </div>

      <div className="footer__copyright">
        <h4>&copy; Abhiraamd5. All rights reserved</h4>
      </div>
    </footer>
  )
}

export default Footer
