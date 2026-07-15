import React from 'react'
import './Mrizo.css'
import logo from './logo.png'
import katta from './kattarasm.jpg'

import img2 from './r1.jpg'
import img1 from './img.jpg'
import rasm111 from './abdurahmon1.png'
import rasm1 from "./rasm.jpg"
import rasm8 from "./rasm10.jpg"
import rasm9 from "./pizza.jpg"
import rasm10 from "./gamburger.jpg"
import rasm11 from "./shahslik.jpg"
import rasm12 from "./lavash.jpg"
import rasm13 from "./dvoynoy.jpg"
import rasm14 from "./nmadur.jpg"


const Mrizo = () => {
  return (

    <div>

      <div className="navbar7">

        <div className="dada7">

          <div className="matnlar7">

            <h1 className='a'>Chase the new flavour</h1>


            <h1 className='b'>The Key To Fine Dining</h1>


            <p className='p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat reiciendis voluptatum dicta velit.
            </p>


            <button className='button'>Explore Menu</button>

          </div>

          <div className="rasmuchun">
            <img className='rasm7' src={rasm111} alt="Fine Dining" />
          </div>
        </div>
      </div>




      <div className="asosiy_fon">

        {/* --- POPULAR DISHES QISMI --- */}
        <div className="menyu_qismi">
          <div className="menyu_tepasi">
            <h1 className="qizil_sarlavha">Popular Dishes</h1>
            <div className="strelkalar">
              <button className="strelka_tugma">{'<'}</button>
              <button className="strelka_tugma">{'>'}</button>
            </div>
          </div>
          <div className="kardlar_qatori">
            {/* Karta 1 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm8} alt="ovqat" />
              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="yulduzlar">★★★★★</p>
              <p className="kard_narxi">$12.00</p>
            </div>

            {/* Karta 2 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm9} alt="ovqat" />
              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="yulduzlar">★★★★★</p>
              <p className="kard_narxi">$12.00</p>
            </div>

            {/* Karta 3 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm10} alt="ovqat" />
              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="yulduzlar">★★★★</p>
              <p className="kard_narxi">$12.00</p>
            </div>

            {/* Karta 4 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm11} alt="ovqat" />
              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="yulduzlar">★★★★★</p>
              <p className="kard_narxi">$12.00</p>
            </div>
          </div>
        </div>

        {/* --- O'RTADAGI KESUVCHI CHIZIQ --- */}
        <div className="chiziq_dada">
          <div className="qaychi_icon">✂</div>
        </div>

        {/* --- REGULAR MENU PACK QISMI --- */}
        <div className="menyu_qismi">
          <h1 className="qizil_sarlavha pastgi_sarlavha">Our Regular Menu Pack</h1>

          {/* Tugmalar */}
          <div className="tugmalar_qatori">
            <button className="kategoriya_tugma faol_tugma">All</button>
            <button className="kategoriya_tugma">Shawarma</button>
            <button className="kategoriya_tugma">Turk Kebab</button>
            <button className="kategoriya_tugma">Hamburger Kebab</button>
            <button className="kategoriya_tugma">Doner Kebab</button>
            <button className="kategoriya_tugma">Shish Kebab</button>
            <button className="kategoriya_tugma">French Fries Pizza</button>
            <button className="kategoriya_tugma">Desserts</button>
          </div>

          {/* Pastki 8 ta ovqat kardlari */}
          <div className="kardlar_qatori">
            {/* Karta 1 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm111} alt="ovqat" />
              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="kard_narxi">$12.00</p>
            </div>

            {/* Karta 2 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm14} alt="ovqat" />
              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="kard_narxi">$12.00</p>
            </div>
            {/* Karta 3 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm8} alt="ovqat" />

              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="kard_narxi">$12.00</p>
            </div>
            {/* Karta 4 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm12} alt="ovqat" />
              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="kard_narxi">$12.00</p>
            </div>
            {/* Karta 5 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm10} alt="ovqat" />

              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="kard_narxi">$12.00</p>
            </div>
            {/* Karta 6 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm11} alt="ovqat" />

              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="kard_narxi">$12.00</p>
            </div>
            {/* Karta 7 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm12} alt="ovqat" />

              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="kard_narxi">$12.00</p>
            </div>
            {/* Karta 8 */}
            <div className="ovqat_kard">
              <img className='rasm7' src={rasm13} alt="ovqat" />

              <h3 className="kard_nomi">Barbecue Shish kebab Shashlik Skewer</h3>
              <p className="kard_narxi">$12.00</p>
            </div>
          </div>
        </div>

      </div>





      {/* mrizo */}

      <div className='site'>


        <div className="orta11">
          <div className="orta12">

            <center>
              <h1 className='t1'>Testimony</h1>
            </center>
            <h1 className='t2'>Happy customers</h1>
          </div>
          <div className="box99">
            <div className="box12">
              <h1>Maria</h1>
              <p className='ew1' >Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
              <div className="ot1">

                <i class="fa-regular fa-calendar"></i>
                <p>06/02/2022</p> <i class="fa-regular fa-clock"></i> <p>11:15</p> <i class="fa-regular fa-eye"></i> <p>222</p>
              </div>
            </div>

            <div className="box12">
              <h1>Maria</h1>
              <p className='ew1' >Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
              <div className="ot1">

                <i class="fa-regular fa-calendar"></i>
                <p>06/02/2022</p> <i class="fa-regular fa-clock"></i> <p>11:15</p> <i class="fa-regular fa-eye"></i> <p>222</p>
              </div>
            </div>

            <div className="box12">
              <h1>Maria</h1>
              <p className='ew1' >Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
              <div className="ot1">

                <i class="fa-regular fa-calendar"></i>
                <p>06/02/2022</p> <i class="fa-regular fa-clock"></i> <p>11:15</p> <i class="fa-regular fa-eye"></i> <p>222</p>
              </div>
            </div>
            <div className="boxtagi">

              <div className="menyu_tepasi">
                <div className="strelkalar">
                  <button className="strelka_tugma">{'<'}</button>
                  <button className="strelka_tugma">{'>'}</button>
                </div>
              </div>
            </div>
    
          </div>

        </div>
              <h1  >News</h1>
<div className="asos1">

                              <div className="card12">
                                  <img className='s1' src={rasm1} alt="" />
                                  <h2 className='v1'>Tips for prepping and caring for your grill</h2>
                                  <p className='v2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                  <div className="card1">
              
                                      <p className='v3'>Read More</p>
                                      <p className='v4'>16 Apr 2021</p>
                                  </div>
                              </div>
                              <div className="card12">
                                  <img className='s1' src={rasm1} alt="" />
                                  <h2 className='v1'>Tips for prepping and caring for your grill</h2>
                                  <p className='v2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                  <div className="card1">
              
                                      <p className='v3'>Read More</p>
                                      <p className='v4'>16 Apr 2021</p>
                                  </div>
                              </div>                <div className="card12">
                                  <img className='s1' src={rasm1} alt="" />
              
                                  <h2 className='v1'>Tips for prepping and caring for your grill</h2>
                                  <p className='v2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                  <div className="card1">
              
                                      <p className='v3'>Read More</p>
                                      <p className='v4'>16 Apr 2021</p>
                                  </div>
                              </div>   
</div>
<br /><br /><br /><br /><br /><br /><br /><br />
<center>

<div className="kattarasm">
  <img className="kattarasm1" src={katta} alt="" />
</div>
</center>
<br /><br />
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
<br /><br /><br />


<br /><br /><br />
                               
        {/* <div className="ota">

          <div className="card">
            <img src={rasm1} alt="" />
            <h2 className='v1'>Tips for prepping and caring for your grill</h2>
            <p className='v2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
            <div className="card1">

              <p className='v3'>Read More</p>
              <p className='v4'>16 Apr 2021</p>
            </div>
          </div>
          <div className="card">
            <img src={rasm1} alt="" />
            <h2 className='v1'>Tips for prepping and caring for your grill</h2>
            <p className='v2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
            <div className="card1">

              <p className='v3'>Read More</p>
              <p className='v4'>16 Apr 2021</p>
            </div>
          </div>
          <div className="card">
            <img src={rasm1} alt="" />
            <h2 className='v1'>Tips for prepping and caring for your grill</h2>
            <p className='v2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
            <div className="card1">

              <p className='v3'>Read More</p>
              <p className='v4'>16 Apr 2021</p>
            </div>
          </div>
        </div> */}
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

export default Mrizo