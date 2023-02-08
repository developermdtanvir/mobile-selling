import React, { useContext } from 'react'
import { MdVerified } from 'react-icons/md'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'
import { BookingModal } from './BookingModal/BookingModal'

export const ProductDetails = () => {
    const { loading, product, setProduct } = useContext(AuthContext)
    console.log(product)

    return (

        <div>
            {
                product && <div className=' my-20'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img className=' h-60' src={product.img} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            {product.verified && <p className=' flex justify-center items-center'>verified <MdVerified className=' text-blue-600' /></p>}
                            <div className=' flex justify-between'>
                                <p className=' font-bold text-xl'>Price : {product.price}</p>
                                <p className=' font-bold text-xl'>Orginal Price {product.orginalprice}</p>
                            </div>
                            <p className=' font-semibold text-xl'>Uses Of Year {product.useofyear}</p>
                            <div className="card-actions justify-end">
                                <label htmlFor="my_booking" className="btn">open modal</label>
                            </div>
                        </div>
                    </div>
                    <BookingModal setProduct={setProduct} img={product.img} price={product.price} name={product.name} />
                </div>
            }
        </div>
    )
}
