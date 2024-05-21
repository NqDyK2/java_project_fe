import React from 'react'
import Banner from '../../components/client/component/Banner'
import Promotions from '../../components/client/component/Promotions'
import Hint from '../../components/client/component/hint'
import Category from '../../components/client/component/Category'
import Item from '../../components/client/component/Item'

const Home = () => {
    return (
        <>
            <Banner />
            <div className=''>
                <Promotions />
                <Category />
                <Hint />
                <Item name='Nông sản miền Bắc' />
                <Item name='Hoa Quả' btnNext={true} heading={true}/>
            </div>
        </>
    )
}

export default Home