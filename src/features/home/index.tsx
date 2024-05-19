import React from 'react'
import Banner from '../../components/client/component/Banner'
import Category from '../../components/client/component/Category'
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