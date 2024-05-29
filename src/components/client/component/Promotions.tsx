import React, { useEffect, useState } from 'react'
import "../../../style/promotions.css"
import { FaCaretRight } from 'react-icons/fa'
import vegetable from '../../../img/vegetable.png'
import { IData } from '../../../types/data'

type Props = {
    modePromotions?: boolean
    nameComponent: string
    data: IData[]
}

const Promotions = (props: Props) => {
    const [statusBtn, setStatusBtn] = useState(true)
    props.data.map((item) => {
        // if (item.expired?.length) {
        //     setStatusBtn(false)
        // }
    })
    return (
        <>
            <div className={`border-none bg-green-light py-7 ${props.modePromotions ? "h-[570px]" : "h-[517px]"} `}>
                <div className='bg-white  w-[1440px] mx-auto sticky rounded-xl z-10'>
                    <div className='flex justify-between px-5 pt-5'>
                        <div><span className='font-bold text-2xl'>Chương trình khuyến mãi</span></div>
                        <div>
                            <button className='border px-2 py-1 rounded-md border-green-light text-green-light text-sm'>
                                <span>Xem thêm <FaCaretRight className='inline-block mb-1 pl-2' /></span>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between px-5'>
                        {
                            props.data?.map((item) => (
                                <div className='mx-3 my-5 shadow-xl rounded-xl' key={item.id}>
                                    <div>
                                        <img src={item.img} alt="" width='100%' />
                                    </div>
                                    <div className='p-3'>
                                        <div className='text-left'>
                                            <span className='font-bold'>{item.name}</span>
                                        </div>
                                        <div className='text-left mt-3 '>
                                            <span>
                                                {item.content}
                                            </span>
                                        </div>
                                        {
                                            item.expired ? <div className='flex justify-between mt-6'>
                                                <div className='text-left my-auto'>
                                                    <span className='text-sm font-semibold'>
                                                        Thời gian còn lại: {item.expired}
                                                    </span>
                                                </div>
                                                <div>
                                                    <button className='border px-2 py-2 rounded-md border-green-light text-white text-sm bg-green-light'>
                                                        <span className='font-semibold'>Xem ngay</span>
                                                    </button>
                                                </div>
                                            </div> : <div className='mt-4'></div>
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    props.modePromotions ? <div className='flex justify-between relative bottom-96 -mx-10'>
                        <div>
                            <img src={vegetable} alt="" />
                        </div>
                        <div>
                            <img src={vegetable} alt="" />
                        </div>
                    </div> : ""
                }

            </div>
        </>
    )
}

export default Promotions