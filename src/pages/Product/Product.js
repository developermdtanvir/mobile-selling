import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'
import { Speainer } from '../Shared/Speainer/Speainer'

export const Product = () => {
    const { loading, setProduct } = useContext(AuthContext)
    const { catagory } = useParams()

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => axios.get(`http://localhost:5000/products?category=${catagory}`)

    })
    if (isLoading || loading) {
        return <Speainer />
    }
    console.log(data)
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20'>
            {
                data.data.map(product => <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className=' w-20 h-60' src={product.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <Link onClick={() => setProduct(product)} to={`/products/${product._id}`}><button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
