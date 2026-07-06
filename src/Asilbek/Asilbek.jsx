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
                <div className="orta_p">
                    <div className="pass">
                        <div className="chap">
                            <p className='ppp'>instagramm</p>
                            <h4 className='h4'>Photo Gallery</h4>
                            <p className='pp1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                            <button className='bt1'>View More</button>
                        </div>
                        <div className="ong">
                            <img src={img2} alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RVhwtDgJF_-reA0-7oNg7lBZkQxxIei3WzbKHyhKyw&s" alt="" />
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            
        </div>

    </div>


  )
}

export default Asilbek