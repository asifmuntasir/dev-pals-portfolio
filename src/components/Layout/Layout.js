import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../../styles/style.css'

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                {/* Content for each page */}
                {children}
            </div>
            <footer>
                <p>Copyright 2021 DevPals</p>
            </footer>
        </div>
    )
}
