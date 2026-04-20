import React from 'react'
import heroimg from '../images/heroimg.jpg'

function Home() {
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-md-6">
            <h2 className='heroContent'>Wide Range <br />Of <span className='heroSubContent'>Products...</span></h2>
            <button className='heroButton'>Shop Now</button>
          </div>
          <div className='col-md-6 py-5'>
            <center>
            <img src={heroimg} alt='heroimg' className='heroimage' />
            </center>
            
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Home
