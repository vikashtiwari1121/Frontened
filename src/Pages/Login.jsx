import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center vh-90 pt-5'>
        <div className="card shadow p-4" style={{ width: '350px' }}>
          <h3 className="text-center mb-1" style={{color:'#59BDF8'}}>Welcome</h3>
          <h3 className="text-center mb-4" style={{fontSize:16}}>Login your account to continue</h3>

          <form>
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
          <button type="button" className="btn btn-primary w-100" onClick={() => navigate('/dashboard')}>
            Login
            
          </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
