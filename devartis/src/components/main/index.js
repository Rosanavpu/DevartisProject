import React from 'react';
import '../../App.css';

export default function Main() {
  return (
    <>
      <div className='container-fluid bg-header' id='home'>
        <div className='overlay-grey'>
          <div className='container'>
            <div className='row'>
              <div className='banner-text wow bounceInUp' data-wow-delay='0.1s'>
                <h2>Welcome to RSS Reader</h2>
                <p><span className='decorate'>Explore your favorite Articles</span></p>
                <div className='text-center wow bounceInUp' data-wow-delay='0.3s'>
                  <button onClick={() => window.location.href = '/register'} >START YOUR ACCOUNT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container' id='about'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita necessitatibus repellendus quaerat nam odit non natus ut maiores. Quae esse nisi beatae dignissimos ex facere voluptas excepturi, expedita sint?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita necessitatibus repellendus quaerat nam odit non natus ut maiores. Quae esse nisi beatae dignissimos ex facere voluptas excepturi, expedita sint?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita necessitatibus repellendus quaerat nam odit non natus ut maiores. Quae esse nisi beatae dignissimos ex facere voluptas excepturi, expedita sint?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita necessitatibus repellendus quaerat nam odit non natus ut maiores. Quae esse nisi beatae dignissimos ex facere voluptas excepturi, expedita sint?</p>
      </div>
      <div>
      </div>
      <div className='container-fluid bg-header2' id='home'>
        <div className='overlay-grey'>
          <div className='container'>
            <div className='row'>
              <div className='banner-text wow bounceInUp' data-wow-delay='0.1s'>
                <h2>OR</h2>
                <p><span className='decorate'>If you already have an account</span></p>
                <div className='text-center wow bounceInUp' data-wow-delay='0.3s'>
                  <button onClick={() => window.location.href = '/login'}>SIGN IN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
