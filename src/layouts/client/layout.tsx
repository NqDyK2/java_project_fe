import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/client/header'
import Footer from '../../components/client/footer'

type Props = {}

const ClientLayout = (props: Props) => {
    return (
        <>
            <div>
                <Header />
            </div>
                <Outlet />
            <div>
                <Footer />
            </div>
        </>
    )
}

export default ClientLayout