import React from 'react'

function Signup() {
  return (
   <>
     <div className='container d-flex justify-content-center align-items-center vh-90 pt-5'>
        <div className="card shadow p-4" style={{ width: '350px' }}>
          <h3 className="text-center mb-1" style={{color:'#59BDF8'}}>Sign Up</h3>
          <h3 className="text-center mb-4" style={{fontSize:16}}>Create Your account</h3>

          <form>
             {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>

             {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>


           {/* Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
          </form>
        </div>
      </div>
    
   
   </>
  )
}

export default Signup
