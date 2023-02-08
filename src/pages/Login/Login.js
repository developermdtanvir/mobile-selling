import axios from 'axios'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'
import { Speainer } from '../Shared/Speainer/Speainer'

export const Login = () => {
    const { loginwithPassword, loading, googleLogin } = useContext(AuthContext)

    const { handleSubmit, register } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    const handleLogin = e => {
        const { email, password } = e
        console.log(email, password)
        loginwithPassword(email, password)
            .then(res => {
                axios.get(`http://localhost:5000/jwt?email=${email}`)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token)
                        }
                    })
                navigate(from, { replace: true })
            })

    }
    if (loading) {
        return <Speainer />
    }
    return (
        <div className=' my-10'> <form onSubmit={handleSubmit(handleLogin)} className='lg:w-[600px] border border-primary border-opacity-20 p-14 space-y-20 mx-auto'>
            <div className=' flex justify-around my-20'>
                <input placeholder='Email' type='email' className=' input input-bordered ' {...register("email")} />
            </div>
            <div className=' flex justify-around my-20'>
                <input placeholder='Password' type='password' className=' input input-bordered ' {...register("password")} />
            </div>
            <div className=' text-center'>
                <input className=' btn btn-primary ' type="submit" />
            </div>
            <div>
                <p className=' text-center'>Are you New User ? please <Link to='/login/signup' className=' text-blue-500'>signup</Link></p>
            </div>
            <div className=' flex justify-center items-center'>
                <button className=' btn btn-primary' onClick={googleLogin}>Google Login</button>
            </div>
        </form>
        </div>
    )
}
