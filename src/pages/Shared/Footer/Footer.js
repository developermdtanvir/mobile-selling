import React from 'react'
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="footer p-10 bg-primary bg-opacity-20 rounded-md text-base-content">
            <div className=' flex justify-center items-center my-auto'>
                <p className=' text-4xl font-bold'>Re-<span className=' text-primary'>Selling</span></p>
            </div>
            <div>
                <span className="footer-title">Product</span>
                <Link to='/' className="link link-hover">Iphone</Link>
                <Link to='/' className="link link-hover">Samsung</Link>
                <Link to='/' className="link link-hover">Oppo</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to='/' className="link link-hover">About us</Link>
                <Link to='/' className="link link-hover">Contact</Link>
                <Link to='/' className="link link-hover">Jobs</Link>
                <Link to='/' className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <div className=' flex space-x-10 text-4xl'>

                    <Link to='/' className="link link-hover"><FaFacebook className=' text-blue-600' /></Link>
                    <Link to='/' className="link link-hover"><AiFillLinkedin className=' text-sky-500' /></Link>
                    <Link to='/' className="link link-hover"><AiFillYoutube className=' text-red-600' /></Link>
                </div>
            </div>
        </footer>
    )
}
