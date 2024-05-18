import React from 'react'
import Banner from '../../components/client/component/banner'
import Category from '../../components/client/component/category'

const Home = () => {
    return (
        <>
            <Banner />
            <div className=''>
                <Category />
            </div>
        </>
    )
}

export default Home