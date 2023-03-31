import React from 'react'
import "../../Styles/ThankYou.scss"

const ThankYou = () => {
  return (
    <div className="Thanks">
        <div className='Thanks__cont'>
        <img src="./assets/images/icon-thank-you.svg" alt='thank you' />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform.
           If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
    </div>
  )
}

export default ThankYou