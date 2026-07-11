import React from 'react'
import './Asilbek.css'
import logo from './logo.png'
import img2 from './r1.jpg'
import img1 from './img.jpg'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Firdavs from '../Firdavs/Firdavs'
import Mrizo from '../Mrizo/Mrizo'

const Asilbek = () => {
  return (
    <div>
        <div className="Menu">
            <div className="navbar">
                <img src={logo} alt="" />
                <ul>
                    <li>
                        <a href="">menu</a>
                        <a href="">news</a>
                        <a href="">about us</a>
                        <a href="">contact us</a>
                        <a href=""> <button>Log in</button> </a>
                    </li>
                </ul>
            </div>
            <div className="orta">
 123456789щ
            </div>

            
        </div>

    </div>


  )
}

export default Asilbek