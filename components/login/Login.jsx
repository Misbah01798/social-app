"use client"
import Link from 'next/link';
import bg from '../../public/assets/logo1.png'
import { useState } from 'react';


const Login = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    
     const handleLogin = event =>{
        event.preventDefault();
        

     }
  return (
    <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
    }}>

        <div className="hero bg-blue-200 bg-opacity-10"  >
            <div className="">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">Please Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-50">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                    
                        <div className="form-control mt-6">
                            <button type="submit"  className="btn btn-primary">Login</button>

                        </div>

                    </form>
                    <div className="form-control mt-6">
                
                        {/* <button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary">Google</button> */}
                    </div>
                    {/* {
                        loginError && <p>{loginError}</p>
                    }
                    {
                        succcesLogin && <p>{succcesLogin}</p>
                    } */}
                    <p className="text-center text-xl">Don't Have an Account <Link href={'/sign-up'} className="text-red-400 font-bold">Register</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;
