import React from 'react'
import './Mrizo.css'
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
             <img className='rasm7' src={rasm11 } alt="ovqat" />
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

            
            <div className="orta">
                <h1>Testimony</h1>
                <h1>Happy customers</h1>
                <div className="box">
                    <h1>Maria</h1>
                    <p> Я всегда был  самым худым и щуплым ребенком</p>
                    <p>среди своих сверстников. Я всегда мечтал стать</p>
                    <p>как мой кумир и иметь интерес...</p>
                    <i class="fa-regular fa-calendar"></i><p>06/02/2022</p> <i class="fa-regular fa-clock"></i> <p>11:15</p> <i class="fa-regular fa-eye"></i> <p>222</p>
                </div>
            </div>
            <div className="ota">

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
            </div>
        </div>

</div>
    )
}

export default Mrizo