import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './COMPONENTS/Header'
import Nav from './COMPONENTS/Nav'
import Popup from './COMPONENTS/Popup'
import Confirmation from './PAGES/Confirmation'
import Contact from './PAGES/Contact'
import Home from './PAGES/Home'
import NotFound from './PAGES/NotFound'
import Register from './PAGES/Register'

export const appContext = React.createContext()

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showNav, setShowNav] = useState(false)
  const popup = useRef()
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [isFailed, setIsFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  let lastScrollPosition = window.pageYOffset;

  useEffect(() => {
    window.addEventListener('resize', function () {
      setWindowWidth(window.innerWidth)
    })

    const header = document.querySelector('.home-header')
    window.addEventListener("scroll", function() {
      const currentScrollPosition = window.pageYOffset;
    
      if (header) {
        if (currentScrollPosition > lastScrollPosition) {
          header.style.transform = `translateY(-100%)`
          
        } else if (currentScrollPosition < lastScrollPosition) {
          header.style.transform = `translateY(0)`
        }
      }
    
      lastScrollPosition = currentScrollPosition;
    });
    
  }, [])

  useEffect(() => {
    if (windowWidth > 650) {
      setShowNav(false)
    }
  }, [windowWidth])

  
  return (
    <appContext.Provider
      value={{ windowWidth, showNav, setShowNav, popup, isSuccessful, setIsSuccessful, isFailed, setIsFailed, isLoading, setIsLoading }}
    >
      <Popup />
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />  } />
        <Route exact path='/register' element={<Register />  } />
        <Route exact path='/confirmation' element={<Confirmation />  } />
        <Route exact path='/contact' element={<Contact />  } />
        <Route exact path='*' element={<NotFound />  } />
      </Routes>
    </appContext.Provider>
  )
}

export default App