import React from 'react'
import trophyCup from '../images/trophy-cup.png'
import rewards from '../images/rewards.png'
import blurOne from '../images/randg-purple-text-blur.png'
import blurTwo from '../images/randg-purple-img-blur.png'
import whiteStar from '../images/white-star.png'
import transparentStar from '../images/transparent-star.png'
import purpleStar from '../images/purple-star.png'


const Prizes = () => {
  return (
    <section className="prizes">

      <div className="prizes-star-one">
        <img src={purpleStar} alt="" />
      </div>

      <div className="prizes-star-two">
        <img src={whiteStar} alt="" />
      </div>

      <div className="prizes-star-three">
        <img src={whiteStar} alt="" />
      </div>

      <div className="prizes-star-four">
        <img src={transparentStar} alt="" />
      </div>

      <div className="prizes-star-five">
        <img src={whiteStar} alt="" />
      </div>

      <div className='prizes-blur-one'>
        <img src={blurOne} alt="" />
      </div>

      <div className='prizes-blur-two'>
        <img src={blurTwo} alt="" />
      </div>

      <div>
        <div className='prizes-header'> 
          <h3>Prizes and</h3>
          <h3>Rewards</h3>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
      </div>

      <div className='prize-imgs'>
        <img src={trophyCup} alt="" />
        <img src={rewards} alt="" />
      </div>
    </section>
  )
}

export default Prizes