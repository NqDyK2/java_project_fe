import React, { useEffect, useState } from 'react'
import Banner from '../../components/client/component/Banner'
import Promotions from '../../components/client/component/Promotions'
import Hint from '../../components/client/component/hint'
import Category from '../../components/client/component/Category'
import Item from '../../components/client/component/Item'
import imgPromotions from "../../img/promotions.png"
import imgRelatedInfomation1 from "../../img/relatedInfo1.png";
import imgRelatedInfomation2 from "../../img/relatedInfo2.png";
import imgRelatedInfomation3 from "../../img/relatedInfo3.png";
import Branch from '../../components/client/component/Branch'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { apiGetAllPrd } from '../farm-manage/manage-farm.action'

const Home = () => {
    const { result, loading, error } = useAppSelector((state: any) => state.products.result)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(apiGetAllPrd({ page: 1, size: 4, min: 1, max: 1000000 }))
    }, [dispatch])
    const [promotions, setPromotions] = useState([
        {
            "id": 1,
            "img": imgPromotions,
            "name": "Chương trình tháng 3 may mắn",
            "content": "Đồ khô - giảm ngay 10% cho 100 khách hàng đầu tiên và những hội viên của chúng tôi",
            "expired": "5 ngày"
        },
        {
            "id": 2,
            "img": imgPromotions,
            "name": "Chương trình tháng 3 may mắn",
            "content": "Đồ khô - giảm ngay 10% cho 100 khách hàng đầu tiên và những hội viên của chúng tôi",
            "expired": "5 ngày"
        },
        {
            "id": 3,
            "img": imgPromotions,
            "name": "Chương trình tháng 3 may mắn",
            "content": "Đồ khô - giảm ngay 10% cho 100 khách hàng đầu tiên và những hội viên của chúng tôi",
            "expired": "5 ngày"
        }
    ])
    const [relatedInfomation, setRelatedInfomation] = useState([
        {
            "id": 1,
            "img": imgRelatedInfomation1,
            "name": "Chương trình tháng 8 may mắn",
            "content": "Đồ khô - giảm ngay 10% cho 100 khách hàng đầu tiên và những hội viên của chúng tôi",
        },
        {
            "id": 2,
            "img": imgRelatedInfomation2,
            "name": "Chương trình tháng 3 may mắn",
            "content": "Đồ khô - giảm ngay 10% cho 100 khách hàng đầu tiên và những hội viên của chúng tôi",
        },
        {
            "id": 3,
            "img": imgRelatedInfomation3,
            "name": "Chương trình tháng 3 may mắn",
            "content": "Đồ khô - giảm ngay 10% cho 100 khách hàng đầu tiên và những hội viên của chúng tôi",
        }
    ])
    return (
        <>
            <Banner />
            <div className=''>
                <Promotions modePromotions={true} nameComponent='Chương trình khuyến mãi' data={promotions} />
                <Category />
                <Hint />
                {/* <Item name='Nông sản miền Bắc' list={result?.productList} /> */}
                <Item name='Hoa Quả' btnNext={true} heading={true} list={result?.productList} />
                <div className='mt-16 mb-5'>
                    <h1 className='text-3xl font-semibold text-green-light'>THÔNG TIN LIÊN QUAN</h1>
                </div>
                <div>
                    <Promotions modePromotions={false} nameComponent='An toàn thông tin thực phẩm' data={relatedInfomation} />
                </div>
                <div>
                    <Branch />
                </div>
            </div>
        </>
    )
}

export default Home