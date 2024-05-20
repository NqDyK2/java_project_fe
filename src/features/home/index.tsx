import React from 'react'
import Banner from '../../components/client/component/banner'
import Category from '../../components/client/component/category'
import Promotions from '../../components/client/component/Promotions'
import Hint from '../../components/client/component/hint'

const Home = () => {
    return (
        <>
            <Banner />
            <div className=''>
                <Promotions />
                <Category />
                <Hint />
            </div>
        </>
    )
}

export default Home