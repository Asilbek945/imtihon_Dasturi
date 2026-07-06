import React from 'react'
import "./Jasurbek.css";
import logo from './logo.png'

const jasurbek = () => {
    return (
        

            <div>
                <div className="navbar">
                    <div className="navbar1">

                        <img className='img' src={logo} alt="" />
                    </div>
                    <div className="navbar2">

                        <ul>
                            <li>
                                <a href="/">menu</a>
                                <a href="Firdavs.jsx">news</a>
                                <a href="Umar.jsx">about us</a>
                                <a href="Jasurbek.jsx">contact us</a>
                                <button>Log in</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tepa1">

                    <ul className='ul'>
                        <li className='li' >Home | <span>Contact Us</span></li>
                    </ul>
                    <h1>Contact Us</h1>
                </div>



               

                

            </div>


        


    )
}

export default jasurbek