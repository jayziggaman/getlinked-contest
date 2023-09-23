import React, { useContext, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { appContext } from '../App'

const Header = () => {
  const { windowWidth, setShowNav } = useContext(appContext)
  const location = useLocation()

  useEffect(() => {
    const links = document.querySelectorAll('.home-header a')
    const timeline = document.getElementById('timeline')
    const overview = document.getElementById('overview')
    const faqs = document.getElementById('faqs')

    links.forEach(link => {
      link.addEventListener('click', function () {
        const header = document.querySelector('.home-header')
        header.style.transform = `translateY(-100%)` 


        if (link.textContent === 'Timeline') {
          const sectionTop = timeline.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: sectionTop,
            behavior: "smooth"
          });

        } else if (link.textContent === 'Overview') {
          const sectionTop = overview.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: sectionTop,
            behavior: "smooth"
          });
          
        } else if (link.textContent === 'FAQs') {
          const sectionTop = faqs.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: sectionTop,
            behavior: "smooth"
          });
        } 
      })
    })
  }, [location.pathname])
  
  return (
    <header className='home-header'>
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

      {windowWidth < 651 &&
        <div className='nav-toggle'
          onClick={() => setShowNav(true)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      }

      
    </header>
  )
}

export default Header