import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import dummyImg from "../../../img/imgDummy.png"
import "../../../style/hint.css"
import { Link } from 'react-router-dom';
type Props = {}

const Hint = (props: Props) => {
    return (
        <>
            <div className='background-img w-[1440px] mx-auto my-1'>
                <div className='text-left text-white font-bold text-2xl py-3 px-9 border-b-[1px] border-white'>
                    <span>Tươi ngon mỗi ngày</span>
                </div>
                <div className='flex justify-evenly py-5'>
                    <div className='bg-white rounded-lg w-[280px] shadow-lg'>
                        <div>
                            <img src={dummyImg} alt="" className='rounded-t-lg w-[280px] h-[225px]' />
                        </div>
                        <div className='my-2 font-semibold text-xl'>
                            <span>
                                Bưởi da xanh
                            </span>
                        </div>
                        <div>
                            <div className='px-2 py-1 text-lg text-gray-500'>
                                <span><CiLocationOn className='inline-block mb-1 pl-2 text-3xl text-green-light' /> Bắc Giang </span>
                            </div>
                        </div>
                        <div className='flex justify-center text-[#FF9933] my-1'>
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                        </div>
                        <div className='flex justify-center gap-5'>
                            <span className='text-green-light text-xl font-semibold text-right  w-fit'>
                                12.000 đ/Quả
                            </span>
                        </div>
                        <div>
                            <Link to={"detail-seller/1"}>
                                <button className='border px-2 py-2 my-4 border-green-light text-white text-sm bg-green-light rounded-md'>
                                    <span className='font-semibold px-24'>Liên hệ</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg w-[280px] shadow-lg'>
                        <div>
                            <img src={`https://hoaquafuji.com/storage/app/media/cam-canh-gia-bao-nhieu-0-12.jpg`} alt="" className='rounded-t-lg w-[280px] h-[225px]' />
                        </div>
                        <div className='my-2 font-semibold text-xl'>
                            <span>
                                Cam canh
                            </span>
                        </div>
                        <div>
                            <div className='px-2 py-1 text-lg text-gray-500'>
                                <span><CiLocationOn className='inline-block mb-1 pl-2 text-3xl text-green-light' /> Bắc Giang </span>
                            </div>
                        </div>
                        <div className='flex justify-center text-[#FF9933] my-1'>
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                        </div>
                        <div className='flex justify-center gap-5'>
                            <span className='text-green-light text-xl font-semibold text-right  w-fit'>
                                32.000 đ/kg
                            </span>
                        </div>
                        <div>
                            <Link to={"detail-seller/3"}>
                                <button className='border px-2 py-2 my-4 border-green-light text-white text-sm bg-green-light rounded-md'>
                                    <span className='font-semibold px-24'>Liên hệ</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg w-[280px] shadow-lg'>
                        <div>
                            <img src={`https://images2.thanhnien.vn/528068263637045248/2024/6/12/edit-502166b3-a83e-4a1e-8877-e741b029e21e-17181952941732106639029.jpeg`} alt="" className='rounded-t-lg w-[280px] h-[225px]' />
                        </div>
                        <div className='my-2 font-semibold text-xl'>
                            <span>
                                Vải thiều
                            </span>
                        </div>
                        <div>
                            <div className='px-2 py-1 text-lg text-gray-500'>
                                <span><CiLocationOn className='inline-block mb-1 pl-2 text-3xl text-green-light' /> Bắc Giang </span>
                            </div>
                        </div>
                        <div className='flex justify-center text-[#FF9933] my-1'>
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                        </div>
                        <div className='flex justify-center gap-5'>
                            <span className='text-green-light text-xl font-semibold text-right  w-fit'>
                                30.000 đ/kg
                            </span>
                        </div>
                        <div>
                            <Link to={"detail-seller/5"}>
                                <button className='border px-2 py-2 my-4 border-green-light text-white text-sm bg-green-light rounded-md'>
                                    <span className='font-semibold px-24'>Liên hệ</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg w-[280px] shadow-lg'>
                        <div>
                            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5agHxRI_JwW-blozp7P4ZEc8imP3UoVUdQA&s`} alt="" className='rounded-t-lg w-[280px] h-[225px]' />
                        </div>
                        <div className='my-2 font-semibold text-xl'>
                            <span>
                                Nhãn lồng Hưng Yên
                            </span>
                        </div>
                        <div>
                            <div className='px-2 py-1 text-lg text-gray-500'>
                                <span><CiLocationOn className='inline-block mb-1 pl-2 text-3xl text-green-light' /> Bắc Giang </span>
                            </div>
                        </div>
                        <div className='flex justify-center text-[#FF9933] my-1'>
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                            <IoMdStar className='text-xl' />
                        </div>
                        <div className='flex justify-center gap-5'>
                            <span className='text-green-light text-xl font-semibold text-right  w-fit'>
                                30.000 đ/kg
                            </span>
                        </div>
                        <div>
                            <Link to={"detail-seller/8"}>
                                <button className='border px-2 py-2 my-4 border-green-light text-white text-sm bg-green-light rounded-md'>
                                    <span className='font-semibold px-24'>Liên hệ</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hint