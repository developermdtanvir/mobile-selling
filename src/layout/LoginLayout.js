import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../pages/Shared/Header/Header'

export const LoginLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
