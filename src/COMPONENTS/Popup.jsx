import React, { useContext, useEffect } from 'react'
import { appContext } from '../App'
import {FaCheck, FaTimes} from 'react-icons/fa'

const Popup = () => {
  const { popup, isSuccessful, isFailed, setIsSuccessful, setIsFailed, isLoading } = useContext(appContext)

  useEffect(() => {
    const popup = document.querySelector('.pop-up')

    if (isSuccessful || isFailed) {
      popup.classList.add('show-popup')
      setTimeout(() => {
        setIsFailed(false)
        setIsSuccessful(false)

        popup.classList.remove('show-popup')
      }, 3000);
    } 
  }, [isSuccessful, isFailed])

  return (
    <div className='pop-up'>
      <div>
        {isSuccessful &&
          <>
            <span>
              <span>
                <FaCheck />
              </span>
            </span>
            
            <p>
              Successfully sent!
            </p>
          </>
        }

        {isFailed &&
          <>
            <span>
              <span className='failed'>
                <FaTimes />
              </span>
            </span>
            
            <p className='failed'>
              Oops, an error occured.
            </p>
          </>
        }
      </div>
    </div>
  )
}

export default Popup