import React from 'react'
import "../../../style/promotions.css"
import { FaCaretRight } from 'react-icons/fa'
import imgPromo from '../../../img/promotions.png'
import vegetable from '../../../img/vegetable.png'
type Props = {}

const Promotions = (props: Props) => {
    return (
        <>
            <div className='border-none bg-green-light py-7 h-[570px]'>
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
                        <div className='mx-3 my-5 shadow-xl rounded-xl'>
                            <div>
                                <img src={imgPromo} alt="" width='100%' />
                            </div>
                            <div className='p-3'>
                                <div className='text-left'>
                                    <span className='font-bold'>Chương trình tháng 3 may mắn</span>
                                </div>
                                <div className='text-left mt-3'>
                                    <span>
                                        Đồ khô - giảm ngay 10% cho 100 khách hàng đầu tiên và những hội viên của chúng tôi
                                    </span>
                                </div>
                                <div className='flex justify-between mt-6'>
                                    <div className='text-left my-auto'>
                                        <span className='text-sm font-semibold'>
                                            Thời gian còn lại: 5 ngày
                                        </span>
                                    </div>
                                    <div>
                                        <button className='border px-2 py-2 rounded-md border-green-light text-white text-sm bg-green-light'>
                                            <span className='font-semibold'>Xem ngay</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mx-3 my-5 shadow-xl rounded-xl'>
                            <div>
                                <img src={imgPromo} alt="" width='100%' />
                            </div>
                            <div className='p-3'>
                                <div className='text-left'>
                                    <span className='font-bold'>Chương trình tháng 3 may mắn</span>
                                </div>
                                <div className='text-left mt-3'>
                                    <span>
                                        Đồ khô - giảm ngay 10% cho 100 khách hàng đầu tiên và những hội viên của chúng tôi
                                    </span>
                                </div>
                                <div className='flex justify-between mt-6'>
                                    <div className='text-left my-auto'>
                                        <span className='text-sm font-semibold'>
                                            Thời gian còn lại: 5 ngày
                                        </span>
                                    </div>
                                    <div>
                                        <button className='border px-2 py-2 rounded-md border-green-light text-white text-sm bg-green-light'>
                                            <span className='font-semibold'>Xem ngay</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mx-3 my-5 shadow-xl rounded-xl'>
                            <div>
                                <img src={imgPromo} alt="" width='100%' />
                            </div>
                            <div className='p-3'>
                                <div className='text-left'>
                                    <span className='font-bold'>Chương trình tháng 3 may mắn</span>
                                </div>
                                <div className='text-left mt-3'>
                                    <span>
                                        Đồ khô - giảm ngay 10% cho 100 khách hàng đầu tiên và những hội viên của chúng tôi
                                    </span>
                                </div>
                                <div className='flex justify-between mt-6'>
                                    <div className='text-left my-auto'>
                                        <span className='text-sm font-semibold'>
                                            Thời gian còn lại: 5 ngày
                                        </span>
                                    </div>
                                    <div>
                                        <button className='border px-2 py-2 rounded-md border-green-light text-white text-sm bg-green-light'>
                                            <span className='font-semibold'>Xem ngay</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between relative bottom-96 -mx-10'>
                    <div>
                        <img src={vegetable} alt="" />
                    </div>
                    <div>
                        <img src={vegetable} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promotions