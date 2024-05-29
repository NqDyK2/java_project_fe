import React from 'react'
import imgItem from "../../../img/image 29.png";
import imgGG from '../../../img/image 30.png'
type Props = {}

const Branch = (props: Props) => {
    return (
        <>
            <div className='bg-white'>
                <div className='w-[1440px] mx-auto'>
                    <div className='py-10'>
                        <h1 className='text-3xl font-semibold text-green-light'>CHI NHÁNH CỦA CHÚNG TÔI</h1>
                    </div>
                    <div className='flex justify-center gap-4 pb-10'>
                        <div className='bg-gray-100 text-left w-fit max-w-[400px] rounded-2xl'>
                            <div>
                                <img src={imgItem} alt="" className='rounded-2xl' />
                            </div>
                            <div>
                                <div className='p-3 font-bold'>
                                    <span>Trụ sở chính Bếp Xanh</span>
                                </div>
                                <div>
                                    <ul className='block list-disc pl-9 pr-2 mr-5 font-semibold'>
                                        <li><span className='text-base'>Địa chỉ: số 11 đường Kim Đồng phường Giáp Bát quận Hoàng Mai Tp Hà Nội</span></li>
                                        <li><span className='text-base'>Số ĐKKD 0108783652 do Sở KHĐT Tp. Hà Nội cấp ngày 14/06/2019 tại SKH đầu tư Hà Nội</span></li>
                                        <li><span className='text-base'>Người đại diện: Nguyễn Thị Hằng</span></li>
                                    </ul>
                                </div>
                                <div className='flex justify-center gap-2 py-5'>
                                    <div className='bg-green-light text-white px-3 py-2 rounded-full'>
                                        1900986865
                                    </div>
                                    <div className='flex bg-white px-3 py-2 rounded-full border border-green-light'>
                                        <div>
                                            <img src={imgGG} alt="" className='pt-1 px-2' />
                                        </div>
                                        <div className='text-green-light'>
                                            Đi tới maps
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-100 text-left w-fit max-w-[400px] rounded-2xl'>
                            <div>
                                <img src={imgItem} alt="" className='rounded-2xl' />
                            </div>
                            <div>
                                <div className='p-3 font-bold'>
                                    <span>Trụ sở chính Bếp Xanh</span>
                                </div>
                                <div>
                                    <ul className='block list-disc pl-9 pr-2 mr-5 font-semibold'>
                                        <li><span className='text-base'>Địa chỉ: số 11 đường Kim Đồng phường Giáp Bát quận Hoàng Mai Tp Hà Nội</span></li>
                                        <li><span className='text-base'>Số ĐKKD 0108783652 do Sở KHĐT Tp. Hà Nội cấp ngày 14/06/2019 tại SKH đầu tư Hà Nội</span></li>
                                        <li><span className='text-base'>Người đại diện: Nguyễn Thị Hằng</span></li>
                                    </ul>
                                </div>
                                <div className='flex justify-center gap-2 py-5'>
                                    <div className='bg-green-light text-white px-3 py-2 rounded-full'>
                                        1900986865
                                    </div>
                                    <div className='flex bg-white px-3 py-2 rounded-full border border-green-light'>
                                        <div>
                                            <img src={imgGG} alt="" className='pt-1 px-2' />
                                        </div>
                                        <div className='text-green-light'>
                                            Đi tới maps
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-100 text-left w-fit max-w-[400px] rounded-2xl'>
                            <div>
                                <img src={imgItem} alt="" className='rounded-2xl' />
                            </div>
                            <div>
                                <div className='p-3 font-bold'>
                                    <span>Trụ sở chính Bếp Xanh</span>
                                </div>
                                <div>
                                    <ul className='block list-disc pl-9 pr-2 mr-5 font-semibold'>
                                        <li><span className='text-base'>Địa chỉ: số 11 đường Kim Đồng phường Giáp Bát quận Hoàng Mai Tp Hà Nội</span></li>
                                        <li><span className='text-base'>Số ĐKKD 0108783652 do Sở KHĐT Tp. Hà Nội cấp ngày 14/06/2019 tại SKH đầu tư Hà Nội</span></li>
                                        <li><span className='text-base'>Người đại diện: Nguyễn Thị Hằng</span></li>
                                    </ul>
                                </div>
                                <div className='flex justify-center gap-2 py-5'>
                                    <div className='bg-green-light text-white px-3 py-2 rounded-full'>
                                        1900986865
                                    </div>
                                    <div className='flex bg-white px-3 py-2 rounded-full border border-green-light'>
                                        <div>
                                            <img src={imgGG} alt="" className='pt-1 px-2' />
                                        </div>
                                        <div className='text-green-light'>
                                            Đi tới maps
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Branch