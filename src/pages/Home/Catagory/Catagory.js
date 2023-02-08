import React from 'react'
import { Link } from 'react-router-dom'
import iphone from '../../../assets/iphone.jpg'
import oppo from '../../../assets/oppo.jpg'
import samsung from '../../../assets/samsung.jpg'

export const Catagory = () => {
    const catagoryItems = [
        {
            id: 1,
            img: iphone,
            catagory: "iphone",
            action: "Can You Purche Product Click Details Catagory"
        },
        {
            id: 2,
            img: oppo,
            catagory: "oppo",
            action: "Can You Purche Product Click Details Catagory"
        },
        {
            id: 3,
            img: samsung,
            catagory: "samsung",
            action: "Can You Purche Product Click Details Catagory"
        },
    ]
    return (
        <div className=' my-10'>
            <div className=' space-y-5 '>
                <div className=' space-y-5'>
                    <p className=' text-2xl text-center font-bold '>Our Product <span className='text-primary'>Catagory</span></p>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>

                    {
                        catagoryItems.map(catagory => <div key={catagory.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={catagory.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{catagory.catagory}</h2>
                                <p>{catagory.action}</p>
                                <div className="card-actions">
                                    <Link to={`/product/${catagory.catagory}`} ><button className=' btn btn-primary'>See More</button></Link>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    )
}
