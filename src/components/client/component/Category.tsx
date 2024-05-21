import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import grapeFruit from '../../../img/grapeFruit.png'
import orange from '../../../img/org.png'
import apple from '../../../img/apple.png'
import waterMelon from '../../../img/water-melon.png'
import banana from '../../../img/banana.png'
import litchiFruit from '../../../img/litchi-fruit.png'
import mango from '../../../img/mango.png'
import sweetPotato from '../../../img/sPotato.png'

type Props = {}

const Category = (props: Props) => {
    return (
        <>
            <div className='my-10'>
                <div className='w-[1440px] bg-white mx-auto rounded-lg'>
                    <div className='flex justify-between px-5 pt-5'>
                        <div><span className='font-bold text-2xl'>Danh mục sản phẩm</span></div>
                        <div>
                            <button className='border px-2 py-1 rounded-md border-green-light text-green-light text-sm'>
                                <span>Xem đầy đủ <FaCaretRight className='inline-block mb-1 pl-2'/></span>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-evenly py-10'>
                        <div className="w-20">
                            <img src={grapeFruit} alt="" />
                            <p>Bưởi</p>
                        </div>
                        <div className="w-20">
                            <img src={orange} alt="" />
                            <p>Cam</p>
                        </div>
                        <div className="w-20">
                            <img src={apple} alt="" />
                            <p>Táo</p>
                        </div>
                        <div className="w-20">
                            <img src={waterMelon} alt="" />
                            <p>Dưa hấu</p>
                        </div>
                        <div className="w-20">
                            <img src={banana} alt="" />
                            <p>Chuối</p>
                        </div>
                        <div className="w-20">
                            <img src={litchiFruit} alt="" />
                            <p>Vải</p>
                        </div>
                        <div className="w-20">
                            <img src={mango} alt="" />
                            <p>Xoài</p>
                        </div>
                        <div className="w-20">
                            <img src={sweetPotato} alt="" />
                            <p>Khoai lang</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
