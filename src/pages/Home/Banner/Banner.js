import React from 'react'
import banner from '../../../assets/banner-image.png'
export const Banner = () => {
    return (
        <div className=' flex flex-col md:flex-row lg:flex-row space-x-10'>
            <div className=' lg:w-1/2 md:w-1/2'>
                <img alt='' className=' rounded-md' src={banner} />
            </div>
            <div className=' w-1/2 my-auto space-y-6'>
                <h1 className='  text-5xl font-bold'> Best Reselling <br /> Mobile  Phone Website </h1>
                <p className=' text-gray-600 font-semibold lg:text-2xl md:text-xl'>Stay informed about the latest mobile phone models, which devices are in high demand, and the average prices they're selling for. This will help you make informed purchasing decisions and ensure you're able to sell phones for a profit</p>
                <button className=' btn btn-primary'>Get Purches</button>
            </div>
        </div>
    )
}
