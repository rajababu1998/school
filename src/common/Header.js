import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="row bg-info bg-opacity-50">
            <div className="col-12">
                <h2 className='text-center'>Lakshya</h2>
            </div>
        </div>
        <div className="row bg-dark bg-opacity-100">
            <div className="col-2">
                <Link to='/home'>Home</Link>
            </div>
            <div className="col-2">
                <Link to='/about'>About</Link>
            </div>
            <div className="col-2">
                <Link to='/academics'>Academics</Link>
            </div>
            <div className="col-2">
                <Link to='/login'>Login</Link>
            </div>
            <div className="col-2">
                <Link to='/signup'>Signup</Link>
            </div>
            {/* <div className="col-2">
                <button className="btn btn-primary btn-sm" onClick={handleAuth}>
                    {
                        loginData.loginStatus ? 'Logout' : 'Login'
                    }
                </button>
            </div> */}
        </div>
    </>
  )
}

export default Header