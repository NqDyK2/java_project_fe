import React from 'react'
import grapeFruit from '../../../grapeFruit.png'
type Props = {}

const Category = (props: Props) => {
    return (
        <>
            <div className='my-10'>
                <div className='w-[1440px] bg-white mx-auto rounded-lg'>
                    <div className='flex justify-between px-5 pt-5'>
                        <div><span className='font-bold text-2xl'>Danh mục sản phẩm</span></div>
                        <div><button>Xem đầy đủ</button></div>
                    </div>
                    <div className='flex justify-evenly py-10'>
                        <div className="w-20">
                            <img src={grapeFruit} alt="" />
                            <p>Bưởi</p>
                        </div>
                        <div className="w-20">
                            <img src={grapeFruit} alt="" />
                            <p>Bưởi</p>
                        </div>
                        <div className="w-20">
                            <img src={grapeFruit} alt="" />
                            <p>Bưởi</p>
                        </div>
                        <div className="w-20">
                            <img src={grapeFruit} alt="" />
                            <p>Bưởi</p>
                        </div>
                        <div className="w-20">
                            <img src={grapeFruit} alt="" />
                            <p>Bưởi</p>
                        </div>
                        <div className="w-20">
                            <img src={grapeFruit} alt="" />
                            <p>Bưởi</p>
                        </div>
                        <div className="w-20">
                            <img src={grapeFruit} alt="" />
                            <p>Bưởi</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category