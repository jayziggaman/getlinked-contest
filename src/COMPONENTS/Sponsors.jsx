import React from 'react'
import libertyAssured from '../images/liberty-assured.png'
import libertyPay from '../images/liberty-pay.png'
import winWise from '../images/winwise-logo.png'
import whispersMs from '../images/wispers-ms.png'
import blurOne from '../images/randg-purple-text-blur.png'
import whiteStar from '../images/white-star.png'
import pinkStar from '../images/pink-star.png'
import purpleStar from '../images/purple-star.png'


const Sponsors = () => {
  return (
    <section className='sponsors'>
      <div className="sponsors-blur-one">
        <img src={blurOne} alt="" />
      </div>

      <div className="sponsors-blur-two">
        <img src={blurOne} alt="" />
      </div>

      <div className="sponsors-star-one">
        <img src={purpleStar} alt="" />
      </div>

      <div className="sponsors-star-two">
        <img src={pinkStar} alt="" />
      </div>

      <div className="sponsors-star-three">
        <img src={whiteStar} alt="" />
      </div>

      <div className="sponsors-header">
        <h3>Partners and Sponsors</h3>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
        </p>
      </div>

      <div className="sponsors-content">
        <div>
          <img src={libertyAssured} alt="" />
          <span className='bottom-purple-line'></span>
          <span className='side-purple-line'></span>
        </div>

        <div>
          <img src={libertyPay} alt="" />
          <span className='bottom-purple-line'></span>
          <span className='side-purple-line'></span>
        </div>

        <div>
          <img src={winWise} alt="" />
          <span className='bottom-purple-line'></span>
        </div>

        <div>
          <img src={whispersMs} alt="" />
          <span className='side-purple-line'></span>
        </div>

        <div>
          <p>Pay
            <span>box</span>
          </p>
          <span className='side-purple-line'></span>
        </div>

        <div>
          <p>Vuzual
            <span>Plus
              <span>Design Studios</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sponsors