import React, { useContext } from 'react'
import { appContext } from '../App'
import ideaStar from '../images/big-idea-purple-star.png'
import curlyArrow from '../images/big-idea-curly-arrow.png'
import textStar from '../images/intro-text-star.png'
import gImgStar from '../images/guidelines-img-star.png'
import gTopStar from '../images/guidelines-top-star.png'
import gBottomStar from '../images/guidelines-bottom-star.png'
import textBlur from '../images/randg-purple-text-blur.png'
import imgBlur from '../images/randg-purple-img-blur.png'


const IntroandGuidelines = ({ data, index }) => {
  const { img, header, headerII, body } = data
  const {windowWidth} = useContext(appContext)
  
  return (
    <section className="intro-guidelines">
      {index === 0 ?
        <>
          <div className="i-and-g-img-div">
            <div className='intro-idea-star'>
              <img src={ideaStar} alt="" />
            </div>
            <img src={img} alt="" />
            <div className='intro-curly-arrow'>
              <img src={curlyArrow} alt="" />
            </div>
          </div>

          <div className="i-and-g-text-div big-idea">
            <div>
              <h3>{header}</h3>
              <h3>{headerII}</h3>
              <div className="into-text-star">
                <img src={textStar} alt="" />
              </div>
            </div>
            <p>{body}</p>
          </div>
        </>
        :
        <>
          {windowWidth > 650 ?
            <>
              <div className="i-and-g-text-div">
                <h3>{header}</h3>
                <h3>{headerII}</h3>

                <div className="randg-text-blur">
                  <img src={textBlur} alt="" />
                </div>
                
                <div>
                  <div className="guidelines-top-star">
                    <img src={gTopStar} alt="" />
                  </div>

                  <p>{body}</p>

                  <div className="guidelines-bottom-star">
                    <img src={gBottomStar} alt="" />
                  </div>
                </div>
              </div>

              <div className="i-and-g-img-div">
                <img src={img} alt="" />

                <div className="randg-img-blur">
                  <img src={imgBlur} alt="" />
                </div>
              </div>
            </>
            :
            <>
              <div className="i-and-g-img-div">
                <div className="guidelines-img-star">
                  <img src={gImgStar} alt="" />
                </div>
                <img src={img} alt="" />
              </div>

              <div className="i-and-g-text-div guidelines">
                <h3>{header}</h3>
                <h3>{headerII}</h3>
                <div>
                  <div className="guidelines-top-star">
                    <img src={gTopStar} alt="" />
                  </div>

                  <p>{body}</p>
                  
                  <div className="guidelines-bottom-star">
                    <img src={gBottomStar} alt="" />
                  </div>
                </div>
              </div>
            </>
          }
        </>
      }
    </section>
  )
}

export default IntroandGuidelines