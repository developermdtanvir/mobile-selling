import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'
import { Speainer } from '../Shared/Speainer/Speainer'

export const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const { data, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => axios.get(`http://localhost:5000/booking?email=${user?.email}`, {
            'headers': { 'Authorization': `bearer ${localStorage.getItem('token')}` }
        })
    })

    // { 'headers': { 'Authorization': AuthStr } }
    console.log(data, 'data')
    if (isLoading) {
        return <Speainer />
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.data.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td><img className=' avatar rounded-full w-20 h-20 ring-2' alt='' src={user.img} /></td>
                                <td>{user.email}</td>
                                <td><button className=' btn btn-xs btn-primary'>Bye Now</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
