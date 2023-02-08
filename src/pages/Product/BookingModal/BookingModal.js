import axios from 'axios'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider'

export const BookingModal = ({ name: productName, price, setProduct, img }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { handleSubmit, register } = useForm()
    const onSubmit = e => {
        const { name, email } = e
        const booking = {
            productName,
            price,
            name,
            email,
            img
        }
        axios.post(`http://localhost:5000/booking`, booking)
            .then(res => {
                if (res.data.acknowledged) {
                    console.log(res)
                    toast.success('Booking Successfully')
                    setProduct(null)
                }

            })

        navigate('/dashboard')
    }
    return (
        <div>
            < input type="checkbox" id="my_booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my_booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className=' text-center font-bold'>{productName}</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='form-control space-y-9'>
                        <input value={user?.displayName} readOnly className=' input input-bordered' type='text' {...register("name")} />
                        <input value={user?.email} readOnly className=' input input-bordered' type='email' {...register("email")} />
                        <input value={productName} readOnly className=' input input-bordered' type="text" {...register("productName")} />
                        <input value={price} readOnly className=' input input-bordered' type="number" {...register("price")} />
                        <input className=' btn btn-primary' type="submit" value='booking' />
                    </form>
                </div>
            </div>
        </div>
    )
}
