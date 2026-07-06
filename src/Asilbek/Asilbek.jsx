import React from 'react'
import './Asilbek.css'
import logo from './logo.png'
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
                        <a href="/">menu</a>
                        <a href="Firdavs.jsx">news</a>
                        <a href="Umar.jsx">about us</a>
                        <a href="Jasurbek.jsx">contact us</a>
                        <a href="Samandar.jsx"> <button>Log in</button> </a>
                    </li>
                </ul>
            </div>
            <div className="orta">
                <div className="orta_t">
                    <p>Home</p>
                    <p>|</p>
                    <p>Menu</p>
                </div>
            </div>
        </div>

    </div>


  )
}

export default Asilbek