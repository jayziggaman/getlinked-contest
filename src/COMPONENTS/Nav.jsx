import React, { useContext, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { appContext } from '../App'

const Nav = () => {
  const { showNav, setShowNav, windowWidth } = useContext(appContext)
  const location = useLocation()

  useEffect(() => {
    const links = document.querySelectorAll('nav a')
    const timeline = document.getElementById('timeline')
    const overview = document.getElementById('overview')
    const faqs = document.getElementById('faqs')

    links.forEach(link => {
      link.addEventListener('click', function () {
        setShowNav(false)
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
    <nav className={showNav ? 'active' : ''}>
      <div className='active-nav' role={'button'}
        onClick={() => setShowNav(false)}
      >
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <NavLink>Timeline</NavLink>
      <NavLink>Overview</NavLink>
      <NavLink>FAQs</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <button>
        <Link to='/register'>Register</Link>
      </button>
    </nav>
  )
}

export default Nav