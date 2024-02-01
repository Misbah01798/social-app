"use client"
import Link from 'next/link'
import bg from '../../public/assets/logo1.png'
import { useState } from 'react'


const SignUp = () => {
    const [name, setName] =useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("user exists");
    console.log("name:", name)
    const handleSubmit = (e)=>{}
  return (
    <>
    
    <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
    }} className=''>

        <div className="hero bg-blue-200 bg-opacity-10 "  >
            <div className="mt-10 mb-10">
                <div className="text-center mt-10">
                    <h1 className="text-5xl font-bold text-white">Please Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-50">
                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onchange={(e)=> setName(e.target.value)} type="name" name="name" placeholder="name" className="input input-bordered" required />
                            {error.name && <span>This field is required</span>}

                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onchange={(e)=> setEmail(e.target.value)} type="email" name="email" placeholder="email" className="input input-bordered" required />
                            {error.email && <span>This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onchange={(e)=> setPassword(e.target.value)} type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {error.password && <span>This field is required</span>}
                            

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        { error && (
                            <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
                                {error}
                        </div>)}
                        
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>

                    </form>
                    
                    <p className="text-center text-xl">Don't Have an Account <Link href={'/sign-in'} className="text-red-400 font-bold">Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUp
