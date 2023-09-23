import React, { useEffect, useState } from 'react'
import manThinking from '../images/man-thinking.png'
import faqTextStar from '../images/faq-text-star.png'
import faqStarOne from '../images/faq-star-one.png'
import faqStarTwo from '../images/faq-star-two.png'
import faqStarThree from '../images/faq-star-three.png'
import faqStarFour from '../images/faq-star-four.png'
import {FaPlus, FaMinus} from 'react-icons/fa'

const FAQs = () => {
  const [isShowing, setIsShowing] = useState(false)
  
  const show = (e) => {
    // if (e.currentTarget.classList.contains('show')) {
    //   e.currentTarget.classList.remove('show')
    //   setIsShowing(false)
    // } else {
    //   e.currentTarget.classList.add('show')
    //   setIsShowing(true)
    // }
  }

  useEffect(() => {
    const p = document.querySelectorAll('.faqs div p.q')
    p.forEach(item => item.addEventListener('click', function (e) {

      if (e.currentTarget.classList.contains('show')) {
        p.forEach(x => x.classList.remove('show'))
        e.currentTarget.classList.remove('show')
        setIsShowing(false)

      } else {
        p.forEach(x => x.classList.remove('show'))
        e.currentTarget.classList.add('show')
        setIsShowing(true)
      }
    }))
  }, [])


  return (
    <section id='faqs' className="faqs">
      <div className="i-and-g-text-div">
        <div>
          <img src={faqTextStar} alt="" />
        </div>

        <h3>Frequently Ask</h3>
        <h3>Question</h3>

        <pre>
          We got answers to the questions that you might want to ask about <span>getlinked Hackathon 1.0</span>
        </pre>

        <p className='q' onClick={e => show(e)}>
          Can I work on a project I started before the hackathon?
          <FaPlus />
          <FaMinus />

          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eius illo blanditiis magni numquam consectetur doloremque iusto cumque ut ipsam.
          </span>
        </p>

        <p className='q' onClick={e => show(e)}>
          What happens if I need help during the hackathon?
          <FaPlus />
          <FaMinus />

          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eius illo blanditiis magni numquam consectetur doloremque iusto cumque ut ipsam.
          </span>
        </p>

        <p className='q' onClick={e => show(e)}>
          What happens if I don't have an idea for a project?
          <FaPlus />
          <FaMinus />

          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eius illo blanditiis magni numquam consectetur doloremque iusto cumque ut ipsam.
          </span>
        </p>

        <p className='q' onClick={e => show(e)}>
          Can I join a team or do I have to come with one?
          <FaPlus />
          <FaMinus />

          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eius illo blanditiis magni numquam consectetur doloremque iusto cumque ut ipsam.
          </span>
        </p>

        <p className='q' onClick={e => show(e)}>
          What happens after the hackathon ends
          <FaPlus />
          <FaMinus />

          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eius illo blanditiis magni numquam consectetur doloremque iusto cumque ut ipsam.
          </span>
        </p>

        <p className='q' onClick={e => show(e)}>
          Can I work on a project I started before the hackathon?
          <FaPlus />
          <FaMinus />

          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eius illo blanditiis magni numquam consectetur doloremque iusto cumque ut ipsam.
          </span>
        </p>

      </div>

      <div className="i-and-g-img-div">
        <div className="q-marks">
          <p>?</p>
          <p>?</p>
          <p>?</p>
        </div>
        <img src={manThinking} alt="" />

        <div className='star-one'>
          <img src={faqStarOne} alt="" />
        </div>

        <div className='star-two'>
          <img src={faqStarTwo} alt="" />
        </div>

        <div className='star-three'>
          <img src={faqStarThree} alt="" />
        </div>

        <div className='star-four'>
          <img src={faqStarFour} alt="" />
        </div>

      </div>
    </section>
  )
}

export default FAQs