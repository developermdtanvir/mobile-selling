import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../pages/Shared/Header/Header'

export const DashboardLayout = () => {
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="dashboard_layout" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet />
                    <label htmlFor="dashboard_layout" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard_layout" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
