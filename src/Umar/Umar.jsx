import React from 'react'

const Umar = () => {
  return (
    <div>

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

export default Umar