import React from 'react'
import underline from '../images/underline.png'
import glassesGuy from '../images/glasses-guy.png'
import blueBall from '../images/blueball.png'
import lightBulb from '../images/lightbulb.png'
import chain from '../images/chain.png'
import explosive from '../images/explosive.png'
import whiteStar from '../images/white-star.png'
import transparentStar from '../images/transparent-star.png'
import purpleStar from '../images/purple-star.png'
import pinkStar from '../images/pink-star.png'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section id='overview' className='home-landing'>
      <div className="landing-header">
        <h1>Igniting a Revolution in HR Innovation</h1>
        <img src={underline} alt="" />
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

      <article className="landing-content">
        <div>
          <h2>
            <img className='light-bulb' src={lightBulb} alt="" />
            getlinked Tech Hackathon
            <span>
              1.0
              <div className="lan-em-img">
                <img src={chain} alt="" />
                <img src={explosive} alt="" />
              </div>
            </span>
          </h2>

          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
          </p>

          <button>
            <Link to='/register'>Register</Link>
          </button>

          <div className='timer'>
            00<span>H</span>
            00<span>M</span>
            00<span>S</span>
          </div>
        </div>
      </article>

      <div className="gg-div">
        <img src={blueBall} alt="" className='blue-ball'/>
        <img className='glasses-guy' src={glassesGuy} alt="" />
        <img className='glasses-guy-II' src={glassesGuy} alt="" />
      </div>
    </section>
  )
}

export default Landing