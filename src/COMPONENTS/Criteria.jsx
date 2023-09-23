import React from 'react'
import peopleTalking from '../images/people-talking.png'
import criteriaTop from '../images/criteria-top-star.png'
import criteriaBottom from '../images/guidelines-top-star.png'
import criteriaText from '../images/guidelines-bottom-star.png'
import womanHeadpiece from '../images/woman-headpiece.png'
import blurOne from '../images/randg-purple-text-blur.png'

const Criteria = () => {
  return (
    <section className="judging-criteria">
      <div className="i-and-g-img-div criteria-div">

        <div className="judging-criteria-top">
          <img src={criteriaTop} alt="" />
        </div>

        {/* <img src={womanHeadpiece} alt="" className="head-piece" /> */}

        <img src={peopleTalking} alt="" />

        <div className='criteria-blur-one'>
          <img src={blurOne} alt="" />
        </div>

        <div className="judging-criteria-bottom">
          <img src={criteriaBottom} alt="" />
        </div>
      </div>

      <div className="i-and-g-text-div criteria">
        <h3>Judging Criteria</h3>
        <h3>Key attributes</h3>

        <p>
          <span>Innovation and Creativity</span>:

          Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
        </p>

        <p>
          <span>Functionality: </span>
          Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
        </p>

        <p>
          <span>Impact and Relevance: </span>
          Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
        </p>

        <p>
          <span>Technical Complexity: </span>
          Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
        </p>

        <p>
          <span>Adherence to Hackathon Rules: </span>
          Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
        </p>

        <button>Read More</button>

        <div className="judging-criteria-text">
          <img src={criteriaText} alt="" />
        </div>

        <div className='criteria-blur-two'>
          <img src={blurOne} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Criteria