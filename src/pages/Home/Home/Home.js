import React from 'react'
import { Banner } from '../Banner/Banner'
import { Catagory } from '../Catagory/Catagory'
import { Form } from '../Form/Form'

export const Home = () => {
    return (
        <div className='my-10'>
            <Banner />
            <Catagory />
            <Form />
        </div>
    )
}
