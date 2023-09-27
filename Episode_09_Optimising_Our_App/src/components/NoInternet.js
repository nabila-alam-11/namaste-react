import React from 'react'
import wifi from "../assets/no-internet.png";
import "/style.css"
const NoInternet = () => {
  return (
    <div className='no-internet'>
    <img src={wifi} alt="" />
    <h2>Whoops!</h2>
    <h4>No Internet connection found</h4>
    <h4>Check your connection</h4>
    </div>
  )
}

export default NoInternet