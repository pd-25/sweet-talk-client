// import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom';

const WithLoginLayout = () => {
    return (
        <div>
            <Header />


            <Outlet />
            <Footer />
        </div>
    )
}

export default WithLoginLayout
