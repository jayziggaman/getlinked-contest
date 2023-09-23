import React, { useEffect, useState } from 'react'
import IntroandGuidelines from '../COMPONENTS/Intro&Guidelines'
import Landing from '../COMPONENTS/Landing'
import bigIdea from '../images/the-big-idea.png'
import womanSitting from '../images/woman-sitting.png'
import Criteria from '../COMPONENTS/Criteria'
import FAQs from '../COMPONENTS/FAQs'
import Timeline from '../COMPONENTS/Timeline'
import Prizes from '../COMPONENTS/Prizes'
import Sponsors from '../COMPONENTS/Sponsors'
import Privacy from '../COMPONENTS/Privacy'
import Footer from '../COMPONENTS/Footer'
import Header from '../COMPONENTS/Header'


const Home = () => {
  const arr = [1, 2]
  const [data, setData] = useState([
    {
      img: bigIdea,
      header: 'Introduction to getlinked',
      headerII: 'tech Hackathon 1.0',
      body: `Our tech hackathon is a melting pot of visionaries, and its purpose is as
      clear as day: to shape the future. Whether you're a coding genius, a 
      design maverick, or a concept wizard, you'll have the chance to transform 
      your ideas into reality. Solving real-world problems, pushing the boundaries
      of technology, and creating solutions that can change the world,
      that's what we're all about!`,
    },
    {
      img: womanSitting,
      header: 'Rules and',
      headerII: 'Guidelines',
      body: `Our tech hackathon is a melting pot of visionaries, and its purpose is as
      clear as day: to shape the future. Whether you're a coding genius, a 
      design maverick, or a concept wizard, you'll have the chance to transform 
      your ideas into reality. Solving real-world problems, pushing the boundaries
      of technology, and creating solutions that can change the world,
      that's what we're all about!`,
    }
  ])

  // const checkElement = (element) => {
    
  //   const viewportWidth = window.innerWidth 
  //   const viewportHeight = window.innerHeight 

  //   const element = document.querySelector('.glasses-guy'); 
  //   const elementRect = element.getBoundingClientRect();
  //   const elementTop = elementRect.top;
  //   const elementBottom = elementRect.bottom;
  //   const elementLeft = elementRect.left;
  //   const elementRight = elementRect.right;


  //   const isInViewport =
  //     elementBottom > 0 &&
  //     elementTop < viewportHeight &&
  //     elementRight > 0 &&
  //     elementLeft < viewportWidth;
    
  //     if (isInViewport) {
  //       // Element is in the viewport
  //       // Perform actions, such as adding a class or triggering an animation
  //     } else {
  //       // Element is out of the viewport
  //       // Perform other actions or reset the element's state
  //     }
  // } 

  // useEffect(() => {
  //   window.addEventListener('scroll', function () {
  //     checkElement()
  //   })
  // }, [])

  return (
    <main>
      <Header />
      <Landing />
      {data.map((x, index) =>
        <IntroandGuidelines key={index}
          data={x} index={index}
        />)}
      <Criteria />
      <FAQs />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Privacy />
      <Footer />
    </main>
  )
}

export default Home