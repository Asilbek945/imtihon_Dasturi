import React from 'react'
import './Asilbek.css'
import logo from './logo.png'
import img2 from './r1.jpg'
import img1 from './img.jpg'
import shashlik from './shashlik.png'
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
                    <h1>Our Regular Menu</h1>
                    <h1>Pack</h1>
                    <ul>
                        <li>
                            <button className='fast'>All</button>
                            <button>KEBABS</button>
                            <button>PIDES</button>
                            <button>BURGERS</button>
                            <button>OTHER DISHES</button>
                            <button>SIDES</button>
                            <button>DRINKS</button>
                            <button>DESSERTS</button>
                            <button>MEAL DEALS</button>
                        </li>
                    </ul>

                </div>
                <div className="boxlar">
                    <div className="box1">
                        <img src={shashlik} alt="" />
                        <h1>Barbecue Shish kebab Shashlik</h1>
                        <h1>Skewer</h1>
                        <p>$12.00</p>
                    </div>
                     <div className="box1">
                        <img src={shashlik} alt="" />
                        <h1>Barbecue Shish kebab Shashlik</h1>
                        <h1>Skewer</h1>
                        <p>$12.00</p>
                    </div>
                     <div className="box1">
                        <img src={shashlik} alt="" />
                        <h1>Barbecue Shish kebab Shashlik</h1>
                        <h1>Skewer</h1>
                        <p>$12.00</p>
                    </div>
                     <div className="box1">
                        <img src={shashlik} alt="" />
                        <h1>Barbecue Shish kebab Shashlik</h1>
                        <h1>Skewer</h1>
                        <p>$12.00</p>
                    </div>
                     <div className="box1">
                        <img src={shashlik} alt="" />
                        <h1>Barbecue Shish kebab Shashlik</h1>
                        <h1>Skewer</h1>
                        <p>$12.00</p>
                    </div>
                     <div className="box1">
                        <img src={shashlik} alt="" />
                        <h1>Barbecue Shish kebab Shashlik</h1>
                        <h1>Skewer</h1>
                        <p>$12.00</p>
                    </div>
 
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
                        <a href="https://www.facebook.com/reg/?entry_point=login&next="><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://twitter.com"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.instagram.com/accounts/emailsignup/?next="><i class="fa-brands fa-instagram"></i></a>
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