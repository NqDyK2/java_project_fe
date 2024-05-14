import React from 'react'
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";
import { TiLockClosed } from "react-icons/ti";
import { PiKeyFill } from "react-icons/pi";
import imgLogo from "../../logoJavPrjFE.png"
import { GiVibratingSmartphone } from "react-icons/gi";

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <div>
                {/* Top Header */}
                <div className='bg-main-color'>
                    <div className=' w-[1440px] mx-auto'>
                        <div className='grid grid-cols-2 gap-3 text-white h-10'>
                            {/* Right top header */}
                            <div className='my-auto flex'>
                                <span className='px-2'>Kênh người bán</span> |
                                <span className='px-2'> Kết nối <PiInstagramLogoFill className='inline-block text-lg mb-1 ml-2' /> <FaFacebook className='inline-block text-base mb-1 ml-1' /></span>
                            </div>
                            {/* Left top header */}
                            <div className='grid grid-cols-2'>
                                <div className='my-auto flex flex-row-reverse'>
                                    <span className='px-2'><BsQuestionCircleFill className='inline-block text-base mb-1 mr-2' />Hỗ trợ</span>
                                    <span className='px-2'><FaBell className='inline-block text-base mb-1 mr-2' />Thông báo</span>
                                </div>
                                <div className='my-auto flex pl-8'>
                                    <span className='px-2'><TiLockClosed className='inline-block text-xl mb-1 mr-2' />Đăng nhập</span>
                                    <span className='px-2'><PiKeyFill className='inline-block text-lg mb-1 mr-2' />Đăng ký</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-[1440px] h-24 mx-auto'>
                        <div className='flex my-auto gap-3'>
                            <div className='pt-3 flex-none'>
                                <img src={imgLogo} alt="" width={240} />
                            </div>
                            <div className='pt-3 flex-auto'>
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                </div>
                            </div>
                            <div className='flex-auto pt-3 '>
                                <div className='bg-main-color w-[220px] h-10 m-auto py-auto rounded-full text-white'>
                                    <button className='pt-2 text-center'><GiVibratingSmartphone className='inline-block text-lg mb-1 mr-2' />039 522 5277</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[1440px] mx-auto'>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div >
                        </>
                        )
}

                        export default Header