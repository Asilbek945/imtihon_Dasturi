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

                <ul className='ul'>
                    <li className='li' >Home | <span>News</span></li>
                </ul>

<div className="chap11">
    
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
                        <div className="footer11">
            
                            <div className="shriftlar">
            
                                <h2>Newsletter</h2>
            
                                <h1>Subscribe to Our Newsletter</h1>
            
                                <p>And never miss latest Updates!</p>
            
                            </div>
            
                            <div className="inpbtn">
            
                                <input type="text" placeholder='Email Address' />
            
                                <button>Subscribe</button>
                            </div>
                        </div>
            
            
            
                        {/* foteer1 */}
            
            
            
            
                        <div className="footer21">
                            <div className="a1">
                                <h2>Contact Us</h2>
                                <br />
                                <p>9 W 53rd St, London, NY 10019, UK</p>
                                <br />
                                <p>+1 212-344-1230 <br /> +1 212-555-1230</p>
                            </div>
            
                            <div className="a2">
                                <img src={logo} alt="" />
                                <br />
                                <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
                                <br />
                                <div className="i">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                            </div>
            
                            <div className="a3">
                                <h2>Working Hours</h2>
                                <br />
                                <p>Monday-Friday: <br /> 08:00 am -12:00 am</p>
                                <br />
                                <p>Saturday-Sunday: <br /> 07:00am -11:00 pm</p>
                            </div>
                        </div>

        </div>


    )
}

export default Asilbek