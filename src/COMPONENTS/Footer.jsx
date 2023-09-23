import React from 'react'
import {FaInstagram, FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import xIcon from '../images/x-icon.png'
import whiteStar from '../images/white-star.png'
import transparentStar from '../images/transparent-star.png'
import purpleStar from '../images/purple-star.png'
import pinkStar from '../images/pink-star.png'
import locationIcon from '../images/location-icon.png'
import phoneIcon from '../images/phone-icon.png'
import phoneAntenna from '../images/phone-antenna.png'

const Footer = () => {
  return (
    <footer>

      <div className="footer-star-one">
        <img src={whiteStar} alt="" />
      </div>

      <div className="footer-star-two">
        <img src={pinkStar} alt="" />
      </div>

      <div className="footer-star-three">
        <img src={transparentStar} alt="" />
      </div>

      <div className="footer-star-four">
        <img src={whiteStar} alt="" />
      </div>

      <div>
        <h3>get
          <span>linked</span>
        </h3>
        <p>
          Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
        </p>
        <p>
          Terms of Use
          <span></span>
          Privacy Policy
        </p>
      </div>

      <div>
        <h6>Useful Links</h6>
        <p>Overview</p>
        <p>Timeline</p>
        <p>FAQs</p>
        <p>Register</p>
        <p className='footer-site-links'>
          <span>Follow us</span>
          <FaInstagram />
          <img src={xIcon} alt="" />
          <FaFacebookF />
          <FaLinkedinIn />
        </p>
      </div>

      <div>
        <h6>Contact Us</h6>

        <div>
          <div>
            <div className='phone-antenna'>
              <img src={phoneAntenna} alt="" />
            </div>
            <img src={phoneIcon} alt="" />
          </div>
          <p>+234 6707653444</p>
        </div>

        <div>
          <div>
            <img src={locationIcon} alt="" />
          </div>
          <div>
            <span>27, Alara Street</span>
            <span>Yaba 100012</span>
            <span>Lagos State</span>
          </div>
        </div>
      </div>

      <p>
        All rights reserved. &copy; getlinked Ltd.
      </p>
    </footer>
  )
}

export default Footer