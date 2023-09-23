import React, { useContext, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { appContext } from '../App'
import {FaAngleLeft} from 'react-icons/fa'
import contactMan from '../images/contact-man.png'
import successMan from '../images/successful-man.png'
import successMark from '../images/successfully-done.png'
import winkEmoji from '../images/wink-emoji.png'

const Confirmation = () => {
  const { windowWidth } = useContext(appContext)
  const navigate = useNavigate()

  useEffect(() => {
    const height = document.querySelector('.II').getBoundingClientRect().height
      
    const div = document.querySelector('.img-div')
    div.style.height = `${height}px`
  })

  const checkHeight = () => {
    const height = document.querySelector('.II').getBoundingClientRect().height
      
    const div = document.querySelector('.img-div')
    div.style.height = `${height}px`
  }
  
  return (
    <>
      <main className="register-main">

        <header className='register-header'>
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
                    <NavLink>Timeline</NavLink>
                    <NavLink>Overview</NavLink>
                    <NavLink>FAQs</NavLink>
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
            <div>
              <span role={'button'} onClick={() => navigate(-1)}>
                <FaAngleLeft />
              </span>
              <h2>Register</h2>
            </div>
          }
        </header>

        <div className='man-s'>
          <img src={contactMan} alt="" />
        </div>
        

        <form action="submit">
          {windowWidth > 650 &&
            <h3>
              Register
            </h3>
          }

          <div className='m-div'>
            <p>Be part of this movement!</p>
            <span>
            </span>
          </div>

          <h3>CREATE YOUR ACCOUNT</h3>

          <div className="form-inputs">

            <label htmlFor="team-name">
              Team's name
              <input required type="text" name='team-name' 
                placeholder='Enter the name of your group'
              />
            </label>

            <label htmlFor="phone">
              Phone
              <input required type="text" name='phone' 
                placeholder='Enter your phone number'
              />
            </label>

            <label htmlFor="email">
              Email
              <input required type="email" name='email' 
                placeholder='Enter your email address'
              />
            </label>

            <label htmlFor="project-topic">
              Project Topic
              <input required type="text" name='project-topic'
                placeholder='What is your group project topic'
              />
            </label>

            <label htmlFor="category">
              Category
              <select required name="category" id="category">
                <option value="">Select your category</option>
              </select>
            </label>

            <label htmlFor="group-size">
              Group size
              <select required name="group-size" id="group-size">
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>
          </div>

          <span>
            Please review your registration details before submitting
          </span>

          <div className="form-check">
            <label htmlFor="form-check">
              <input type="checkbox" name='form-check'
                style={{ backgroundColor: 'transparent' }}
              />
              <p>I agree with the event terms and conditions and privacy policy</p>
            </label>
          </div>

          <button>
            {windowWidth > 650 ? 'Register Now' : 'Submit'}
          </button>

        </form>
      </main>

      <section className="confirmation-overlay">
        <div>
          <div className='img-div'>
            <img src={successMark} alt="" onLoad={checkHeight}/>
            <img src={successMan} alt="" className='II' onLoad={checkHeight}/>
          </div>

          <h2>Congratulations</h2>
          <h2>you have successfully Registered!</h2>

          <p>Yes, it was easy and you did it!</p>
          <p>
            <span>
              check your mail box for next step
              <img src={winkEmoji} alt="" />
            </span>
          </p>

          <button onClick={() => navigate('/')}>
            Back
          </button>
        </div>
      </section>
    </>
  )
}

export default Confirmation