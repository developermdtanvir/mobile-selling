import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
export const Signup = () => {

    const { signupwithPassword, updateUser, googleLogin } = useContext(AuthContext)
    const { handleSubmit, register } = useForm()
    const handleLogin = e => {
        const { name, email, user, password } = e;
        const loginUser = {
            name,
            email,
            user
        }

        signupwithPassword(email, password)
            .then(res => {
                updateUser(name).then(res => {

                    axios.post(`http://localhost:5000/users`, loginUser)
                        .then(res =>
                            axios.get(`http://localhost:5000/jwt?email=${email}`)
                                .then(res => {
                                    if (res.data.token) {
                                        localStorage.setItem('token', res.data.token)
                                    }
                                }))
                })
            })


    }
    return (
        <div className=' my-10'> <form onSubmit={handleSubmit(handleLogin)} className='lg:w-[600px] border border-primary border-opacity-20 p-14 space-y-10 mx-auto'>
            <select className=' select select-primary' {...register('user')}>
                <option className=' font-bold cursor-pointer' value='user'>User</option>
                <option className=' font-bold cursor-pointer' value='seller'>Seller</option>
            </select>
            <div className=' flex justify-around box-border my-6'>
                <input placeholder='Frist Name' className=' input input-bordered ' {...register("name")} />
            </div>
            <div className=' flex justify-around my-20'>
                <input placeholder='Email' type='email' className=' input input-bordered ' {...register("email")} />
            </div>
            <div className=' flex justify-around my-20'>
                <input placeholder='Password' type='password' className=' input input-bordered ' {...register("password")} />
            </div>
            <div className=' text-center'>
                <input className=' btn btn-primary ' type="submit" />
            </div>
            <div className=' flex justify-center items-center'>
                <button className=' btn ' onClick={googleLogin}><FcGoogle /> Google Login</button>
            </div>
        </form>
        </div>
    )
}
