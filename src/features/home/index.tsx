import React from 'react'
import Banner from '../../components/client/component/banner'
import Category from '../../components/client/component/category'
import Promotions from '../../components/client/component/Promotions'

const Home = () => {
    return (
        <>
            <Banner />
            <div className=''>
                <Promotions />
                <Category />
            </div>
        </>
    )
}

export default Home