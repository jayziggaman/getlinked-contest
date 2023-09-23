import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {FaAngleLeft} from 'react-icons/fa'
import { appContext } from '../App'
import contactMan from '../images/contact-man.png'
import blurOne from '../images/randg-purple-text-blur.png'
import whiteStar from '../images/white-star.png'
import transparentStar from '../images/transparent-star.png'
import loadingImg from '../images/loading-img.jpg'
import pinkStar from '../images/pink-star.png'


const Register = () => {
  const { windowWidth, setIsLoading, setIsFailed, isLoading } = useContext(appContext)

  const [teamName, setTeamName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [projectTopic, setProjectTopic] = useState('')
  const [category, setCategory] = useState('')
  const [groupSize, setGroupSize] = useState('')
  const [apiData, setApiData] = useState([])

  const [isSuccessful, setIsSuccessful] = useState(false)

  const policy = useRef()
  const categoryRef = useRef()
  const sizeRef = useRef()

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://backend.getlinked.ai/hackathon/categories-list')
      const data = await res.json()
      setApiData([...data])
    }

    fetchData()
  }, [])

  const registerUser = async (e) => {
    e.preventDefault()

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      email: email,
      phone_number: phone,
      team_name: teamName,
      group_size: groupSize,
      project_topic: projectTopic,
      category: category,
      privacy_poclicy_accepted: policy.current.checked
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    setIsLoading(true)

    try {
      const res = await fetch('https://backend.getlinked.ai/hackathon/registration', requestOptions)

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
    if (isSuccessful) {
      navigate('/confirmation')
    }
  }, [isSuccessful])

  useEffect(() => {
    if (!isLoading) {
      setTeamName('')
      setPhone('')
      setEmail('')
      setProjectTopic('')
      setCategory('')
      setGroupSize('')
    }
  }, [isLoading])



  return (
    <main className="register-main">
      <div style={{display: isLoading ? 'block': 'none'}} className="load-overlay">
        <img src={loadingImg} alt="" />
      </div>

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
          <div>
            <span role={'button'} onClick={() => navigate(-1)}>
              <FaAngleLeft />
            </span>
            <h2>Register</h2>
          </div>
        }
      </header>

      <div className="register-blur-one">
        <img src={blurOne} alt="" />
      </div>

      <div className='man-s'>
        <img src={contactMan} alt="" />
      </div>

      {windowWidth > 650 &&
        <>
          <div className="register-blur-two">
            <img src={blurOne} alt="" />
          </div>
        </>
      }

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

      <form action="submit" onSubmit={e => registerUser(e)}>
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
            <input required type="text" name='team-name' value={teamName}
              onChange={e => setTeamName(e.target.value)}
              placeholder='Enter the name of your group'
            />
          </label>

          <label htmlFor="phone">
            Phone
            <input required type="text" name='phone' value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder='Enter your phone number'
            />
          </label>

          <label htmlFor="email">
            Email
            <input required type="email" name='email' value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your email address'
            />
          </label>

          <label htmlFor="project-topic">
            Project Topic
            <input required type="text" name='project-topic' value={projectTopic}
              onChange={e => setProjectTopic(e.target.value)}
              placeholder='What is your group project topic'
            />
          </label>

          <label htmlFor="category">
            Category
            <select ref={categoryRef} name="category" id="category"
              value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Select your category</option>
              {apiData.map((item, i) => {
                return (
                  <option key={i} value={item.id}>
                    {item.name}
                  </option>
                )
              })}
            </select>
          </label>

          <label htmlFor="group-size">
            Group size
            <select required ref={sizeRef} name="group-size" id="group-size"
              value={groupSize} onChange={e => setGroupSize(e.target.value)}>
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
            <input type="checkbox" name='form-check' ref={policy}
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
  )
}

export default Register