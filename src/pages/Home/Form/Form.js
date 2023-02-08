import React from 'react'
import { useForm } from 'react-hook-form'

export const Form = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = e => {
        console.log(e)
    }
    return (
        <div className=' space-y-20 '>
            <div>
                <h1 className=' text-center text-4xl font-semibold'>Let us handle your <br />
                    project, professionally.</h1>
            </div>
            <div> <form onSubmit={handleSubmit(onSubmit)} className='lg:w-[600px] border border-primary border-opacity-20 p-14 space-y-20 mx-auto'>
                <div className=' flex justify-around box-border my-6'>
                    <input placeholder='Frist Name' className=' input input-bordered ' {...register("firstName")} />
                    <input placeholder='Last Name' className=' input input-bordered ' {...register("lastName")} />
                </div>
                <div className=' flex justify-around my-20'>
                    <input placeholder='Email' type='email' className=' input input-bordered ' {...register("email")} />
                    <input placeholder='Phone ' type='number' className=' input input-bordered ' {...register("number")} />
                </div>
                <textarea className=' textarea textarea-bordered w-full' placeholder='Message ' type="text" {...register("message")} />
                <div className=' text-center'>
                    <input className=' btn btn-primary ' type="submit" />
                </div>
            </form></div>
        </div>
    )
}
