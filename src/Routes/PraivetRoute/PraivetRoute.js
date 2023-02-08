import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'
import { Speainer } from '../../pages/Shared/Speainer/Speainer'

export const PraivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    console.log(user);
    const location = useLocation()
    if (loading) {
        return <Speainer />
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}
