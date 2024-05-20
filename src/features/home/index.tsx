import React from 'react'
import Banner from '../../components/client/component/Banner'
import Promotions from '../../components/client/component/Promotions'
import Hint from '../../components/client/component/hint'
import Category from '../../components/client/component/Category'

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