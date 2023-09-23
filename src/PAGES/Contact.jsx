import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../App'
import {FaAngleLeft, FaLinkedinIn, FaInstagram, FaFacebookF} from 'react-icons/fa'
import xIcon from '../images/x-icon.png'
import blurOne from '../images/randg-purple-text-blur.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import whiteStar from '../images/white-star.png'
import transparentStar from '../images/transparent-star.png'
import pinkStar from '../images/pink-star.png'
import loadingImg from '../images/loading-img.jpg'


const Contact = () => {
  const { windowWidth, setIsSuccessful, setIsFailed, isSuccessful, isFailed,isLoading, setIsLoading } = useContext(appContext)

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')

  const navigate = useNavigate()

  const contact = async (e) => {
    e.preventDefault()

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      email: email,
      phone_number: "07089722127",
      first_name: name,
      message: message
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redidirect: 'follow'
    }

    setIsLoading(true)

    try {
      const res = await fetch('https://backend.getlinked.ai/hackathon/contact-form', requestOptions)

      if (res.ok) {
        setIsSuccessful(true)
        setIsLoading(false)

      } else {
        setIsFailed(true)
        setIsLoading(false)
        throw Error()

      }
    } catch (error) {
      setIsFailed(true)
      setIsLoading(false)
    }

  }

  useEffect(() => {
    if (!isLoading) {
      setName('')
      setMessage('')
      setEmail('')
      setTopic('')
    }
  }, [isLoading])
  

  return (
    <main className="contact-main">
      <div
        style={{ display: isLoading ? 'block' : 'none' }} className="load-overlay">
        <img src={loadingImg} alt="" />
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

      <header className='contact-header'>
        {windowWidth > 650 ?
          <>
            <div>
              <h2>
                get
                <span>linked</span>
              </h2>
            </div>

            {windowWidth > 650 &&
              <>
              <div>
                  <NavLink to='/'>Timeline</NavLink>
                  <NavLink to='/'>Overview</NavLink>
                  <NavLink to='/'>FAQs</NavLink>
                  <NavLink to='/contact'>Contact</NavLink>
                </div>
                
                <div>
                  <button>
                    <Link to='/register'>Register</Link>
                  </button>
                </div>
              </>
            }
          </>
          :
          <button onClick={() => navigate(-1)}>
            <FaAngleLeft />
          </button>
        }
      </header>

      <div className="contact-blur-one">
        <img src={blurOne} alt="" />
      </div>

      {windowWidth > 650 &&
        <>
          <div className="contact-blur-two">
            <img src={blurOne} alt="" />
          </div>
        
          <div>
            <div>
              <h3>Get in touch</h3>
            </div>
    
            <div>
              <p>Contact</p>
              <p>Information</p>
            </div>
    
            <div>
              <p>27, Alara Street</p>
              <p>Yaba 100012</p>
              <p>Lagos State</p>
            </div>
    
            <div>
              <p>Call Us : 07067981819</p>
            </div>
    
            <div>
              <p>we are open from Monday-Friday</p>
              <p>08:00am - 05:00am</p>
            </div>
    
            <div className='site-links'>
              <span>Share on</span>
              <span>
                <FaInstagram />
                <img src={xIcon} alt="" />
                <FaFacebookF />
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </>
      }

      <form action="submit" onSubmit={e => contact(e)}>
        <h3>
          Questions or need assistance ?
        </h3>
        <h3>
          Let us know about it!
        </h3>

        {windowWidth < 651 &&
          <p>
            Email us below to any questions related to our event
          </p>
        }
        
        <div className="contact-form-inputs">

          <label htmlFor="name">
            <input required type="text" name='name' value={name}
              onChange={e => setName(e.target.value)}
              placeholder=
              {windowWidth > 650 ? 'First Name' : `Team's Name`}
            />
          </label>

          {windowWidth < 651 &&
            <label htmlFor="topic">
            <input required type="text" name='topic'
              placeholder='Topic' value={topic}
              onChange={e => setTopic(e.target.value)}
            />
          </label>
          }

          <label htmlFor="email">
            <input required type="email" name='email' value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={windowWidth > 650 ? 'Mail': 'Email'}
            />
          </label>

          <label htmlFor="message">
            <textarea required name="message" id="message" value={message}
              onChange={e => setMessage(e.target.value)}
              cols="30" rows="10" placeholder='Message'
            >
            </textarea>
          </label>
        </div>

        <button>
          Submit
        </button>

      </form>

      {windowWidth < 651 &&
        <div className='site-links'>
          <span>Share on</span>
          <span>
            <FaInstagram />
            <img src={xIcon} alt="" />
            <FaFacebookF />
            <FaLinkedinIn />
          </span>
        </div>
      }
    </main>
  )
}

export default Contact