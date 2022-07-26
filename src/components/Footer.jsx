import React from "react"
// import logo1 from "./pic/f_logo.png"
import Yoga from "./pic/yoga.jpeg"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img foot'>
            <img src={Yoga} alt='' />
          </div>
          <p>© 2022. All rights reserved by Bhairav Shinde.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer