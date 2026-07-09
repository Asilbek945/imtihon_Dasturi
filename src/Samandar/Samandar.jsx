import React from 'react'
import './Samandar.css'
const Samandar = () => {
  return (
    <div>

<center>
        <div className="login">

          <h6 className='h6'>login</h6>
        <form className='form1'>
          <input className='in1' type="email" placeholder='emailni kiriting' />
          <input className='in2' type="password" placeholder='kodni kiriting' />

          <button className='tugma1'> log in </button>
          <a href="https://google.com"><button className='tugma2'> <i class="fa-brands fa-google"></i> Sign in with Google </button></a>
          <a href="https://facebook.com"><button className='tugma3'> <i class="fa-brands fa-facebook"></i> Sign in with facebook </button></a>
        </form>

      </div>

</center>
    </div>
  )
}

export default Samandar