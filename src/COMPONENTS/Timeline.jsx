import React, { useContext } from 'react'
import { appContext } from '../App'
import timelineStarOne from '../images/timeline-star-one.png'
import timelineStarTwo from '../images/timeline-star-two.png'
import timelineStarThree from '../images/timeline-star-three.png'

const Timeline = () => {
  const { windowWidth } = useContext(appContext)
  
  
  return (
    <section id='timeline' className="timeline">

      <div className="timeline-star-one">
        <img src={timelineStarOne} alt="" />
      </div>

      <div className="timeline-star-two">
        <img src={timelineStarTwo} alt="" />
      </div>

      <div className="timeline-star-three">
        <img src={timelineStarThree} alt="" />
      </div>

      <div className="timeline-header">
        <h3>Timeline</h3>
        <p>
          Here is the breakdown of the time we anticipate
        </p>
        <p>using for the upcoming event</p>
      </div>

      <div className="timeline-content">
        <div>
          <div>
            <h3>Hackathon Announcement</h3>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register
            </p>
          </div>
          <span>
            <span></span>
            <span>1</span>
          </span>
          <b>November 18, 2023</b>
        </div>



        <div>
          {windowWidth > 650 ?
            <>
              <b>November 18, 2023</b>
              <span>
                <span></span>
                <span>2</span>
              </span>
              <div>
                <h3>Teams Registration begins</h3>
                <p>
                  Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </>
            :
            <>
              <div>
                <h3>Teams Registration begins</h3>
                <p>
                  Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
              <b>November 18, 2023</b>
              <span>
                <span></span>
                <span>2</span>
              </span>
            </>
          }
        </div>



        <div>
          <div>
            <h3>Teams Registration ends</h3>
            <p>
              Interested Participants are no longer Allowed to register
            </p>
          </div>
          <span>
            <span></span>
            <span>3</span>
          </span>
          <b>November 18, 2023</b>
        </div>



        <div>
          {windowWidth > 650 ?
            <>
              <b>November 18, 2023</b>
              <span>
                <span></span>
                <span>4</span>
              </span>
              <div>
                <h3>Announcement of the accepted teams and ideas</h3>
                <p>
                  All teams whom idea has been accepted into the getlinked tech hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </>
            :
            <>
              <div>
                <h3>Announcement of the accepted teams and ideas</h3>
                <p>
                  All teams whom idea has been accepted into the getlinked tech hackathon 1.0 2023 are formally announced
                </p>
              </div>
              <b>November 18, 2023</b>
              <span>
                <span></span>
                <span>4</span>
              </span>
            </>
          }
        </div>



        <div>
          <div>
            <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
            <p>
              Accepted teams can now proceed to build their ground breaking skill driven solutions
            </p>
          </div>
          <span>
            <span></span>
            <span>5</span>
          </span>
          <b>November 18, 2023</b>
        </div>



        <div>
        {windowWidth > 650 ?
            <>
              <b>November 18, 2023</b>
              <span>
                <span></span>
                <span>6</span>
              </span>
              <div>
                <h3>Demo Day</h3>
                <p>
                  Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will be announced on this day
                </p>
              </div>
            </>
            :
            <>
              <div>
                <h3>Demo Day</h3>
                <p>
                  Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will be announced on this day
                </p>
              </div>
              <b>November 18, 2023</b>
              <span>
                <span></span>
                <span>6</span>
              </span>
            </>
          }
         
        </div>


      </div>
    </section>
  )
}

export default Timeline