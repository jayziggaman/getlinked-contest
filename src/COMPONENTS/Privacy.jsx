import React from 'react'
import {FaCheck} from 'react-icons/fa'
import securityLogo from '../images/security-logo.png'
import padlockMan from '../images/padlock-man.png'
import blurOne from '../images/randg-purple-text-blur.png'
import whiteStar from '../images/white-star.png'
import transparentStar from '../images/transparent-star.png'
import purpleStar from '../images/purple-star.png'
import pinkStar from '../images/pink-star.png'


const Privacy = () => {
  return (
    <section className="privacy">
      <div className="privacy-blur-one">
        <img src={blurOne} alt="" />
      </div>
      
      <div className="contact-star-one">
        <img src={pinkStar} alt="" />
      </div>

      <div className="contact-star-two">
        <img src={pinkStar} alt="" />
      </div>

      <div className="contact-star-three">
        <img src={transparentStar} alt="" />
      </div>

      <div className="contact-star-four">
        <img src={whiteStar} alt="" />
      </div>

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
      
      <article>
        <h3>Privacy Policy and</h3>
        <h3>Terms</h3>

        <pre>Last updated on September 12, 2023</pre>

        <p>
          Below are our privacy & policy, which outline a lot of goodies. It's our aim to always take care of our participants
        </p>

        <div className="privacy-content">
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
          </p>

          <b>Licensing Policy</b>
          <b>Here are terms of our Standard License:</b>

          <div>
            <span>
              <FaCheck />
            </span>
            <p>
              The Standard License grants you a non-exclusive right to navigate and register for our event
            </p>
          </div>
          <div>
            <span>
              <FaCheck />
            </span>
            <p>
              You are licensed to use the item available at any free source sites, for your project developement
            </p>
          </div>

          <div className="btn-div">
            <button>
              Read More
            </button>
          </div>
        </div>
      </article>

      <div className='privacy-img-parent-div'>
        <div className='privacy-img-div'>
          <img className='privacy-img' src={securityLogo} alt="" />
        </div>
        <div className='privacy-img-div'>
          <img className='privacy-img' src={padlockMan} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Privacy