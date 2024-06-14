import React, { useEffect, useState } from 'react'
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";
import { TiLockClosed } from "react-icons/ti";
import { PiKeyFill } from "react-icons/pi";
import imgLogo from "../../img/logoJavPrjFE.png"
import diamond from "../../img/Group.png"
import { GiVibratingSmartphone } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa6";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { logout } from '../../apis/user';
import { toast } from 'react-toastify';
type Props = {}

const Header = (props: Props) => {

    const [statusAuth, setStatusAuth] = useState(false);
    const [fullName, setFullName] = useState("")
    const [idUser, setIdUser] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("account")) {
            let local: any = localStorage.getItem("account")
            local = JSON.parse(local)
            setIdUser(local.id)
            setFullName(local.fullName)
            setStatusAuth(true)
        }
    }, [localStorage.getItem("account")])

    const logoutBtn = async () => {
        await logout();
        localStorage.removeItem("account")
        toast.info("Bạn sẽ đăng xuất sau 2s tiếp theo.")
        setTimeout(() => {
            navigate("/")
            navigate(0)
        }, 2000);
    }
    return (
        <>
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
                            {
                                statusAuth ? <Menu
                                    animate={{
                                        mount: { y: 0 },
                                        unmount: { y: 25 },
                                    }}
                                >
                                    <MenuHandler>
                                        <Button placeholder={"Menu 2"} className='text-white ml-10 text-sm px-[8px] shadow-none w-fit hover:text-orange-300'>Xin chào, {fullName ? fullName : "Người dùng"}</Button>
                                    </MenuHandler>
                                    <MenuList placeholder={"Menu 2"} className='-mt-2'>
                                        <Link to={`/infomation/${idUser}`}>
                                            <MenuItem placeholder={"Menu"} className='my-1'>
                                                Thông tin cá nhân
                                            </MenuItem>
                                        </Link>
                                        <Link to={`/manage-data`}>
                                            <MenuItem placeholder={"Menu"} className='my-1'>
                                                Quản lý trang trại
                                            </MenuItem>
                                        </Link>
                                        <Link to={`/all-cate`}>
                                            <MenuItem placeholder={"Menu"} className='my-1'>
                                                Quản lý loại quả
                                            </MenuItem>
                                        </Link>
                                        <MenuItem placeholder={"Menu"} onClick={() => logoutBtn()} className='hover:border-none hover:text-orange-300 mt-1'>
                                            Đăng xuất
                                        </MenuItem>
                                    </MenuList>
                                </Menu> : <div className='my-auto flex pl-8'>
                                    <Link to={'login'}>
                                        <span className='px-2 hover:underline hover:text-orange-300 cursor-pointer'><TiLockClosed className='inline-block text-xl mb-1 mr-2 hover:underline hover:text-orange-300' />Đăng nhập</span>
                                    </Link>
                                    <Link to={'register'}>
                                        <span className='px-2 hover:underline hover:text-orange-300 cursor-pointer'><PiKeyFill className='inline-block text-lg mb-1 mr-2' />Đăng ký</span>
                                    </Link>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-[1440px] h-24 mx-auto'>
                    <div className='flex justify-between my-auto gap-3'>
                        <div className='pt-3 '>
                            <img src={imgLogo} alt="" width={240} />
                        </div>
                        <div className='flex-auto pt-6'>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                            <div className="relative ml-12 mr-4">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full pt-3 pr-4 pb-3 pl-14 ps-10 text-sm text-gray-900 shadow-lg bg-gray-50 rounded-2xl" placeholder="Tìm kiếm sản phẩm" required />
                                <button type="submit" className="border-l border-gray-300 absolute end-2.5 bottom-1.5 font-medium text-base text-green-light px-3 py-1">Tìm kiếm</button>
                            </div>
                        </div>
                        <div className='pt-7'>
                            <div className=' bg-main-color w-[200px] h-10 m-auto py-auto rounded-full text-white'>
                                <button className='pt-2 text-center font-semibold'><GiVibratingSmartphone className='inline-block text-2xl mb-1 mr-2' />039 522 5277</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-main-color'>
                <div className=' w-[1440px] mx-auto flex'>
                    <div className='bg-[#F4FFED] py-3'>
                        <span className='flex font-semibold '>
                            <Menu
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}
                            >
                                <div className=''>
                                    <MenuHandler>
                                        <Button placeholder={"Menu 2"} className='text-black text-sm px-[8px] shadow-none'>Danh mục sản phẩm</Button>
                                    </MenuHandler>
                                </div>
                                <div className='ml-20 my-auto text-xs px-[8px]'>
                                    <FaCaretDown />
                                </div>
                                <MenuList placeholder={"Menu 2"} className='ml-[54px] pl-[8px] pr-[18px] bg-white border-none'>
                                    <MenuItem placeholder={"Menu 2"} className='flex gap-5 h-auto font-semibold py-3'>
                                        <div>
                                            <img src={diamond} alt="" width={24} />
                                        </div>
                                        <div>
                                            Độc quyền tại vườn xanh
                                        </div>
                                    </MenuItem>
                                    <MenuItem placeholder={"Menu 2"} className='h-auto font-semibold py-3'>Menu Item 2</MenuItem>
                                    <MenuItem placeholder={"Menu 2"} className='h-auto font-semibold py-3'>Menu Item 4</MenuItem>
                                    <MenuItem placeholder={"Menu 2"} className='h-auto font-semibold py-3'>Menu Item 3</MenuItem>
                                    <MenuItem placeholder={"Menu 2"} className='h-auto font-semibold py-3'>Menu Item 5</MenuItem>
                                    <MenuItem placeholder={"Menu 2"} className='h-auto font-semibold py-3'>Menu Item 6</MenuItem>
                                    <MenuItem placeholder={"Menu 2"} className='h-auto font-semibold py-3'>Menu Item 7</MenuItem>
                                    <MenuItem placeholder={"Menu 2"} className='h-auto font-semibold py-3'>Menu Item 8</MenuItem>
                                    <MenuItem placeholder={"Menu 2"} className='h-auto font-semibold py-3'>Menu Item 9</MenuItem>
                                    <MenuItem placeholder={"Menu 2"} className='h-auto font-semibold py-3'>Menu Item 10</MenuItem>
                                    <MenuItem placeholder={"Menu 2"} className='h-auto font-semibold py-3'>Menu Item 11</MenuItem>
                                    <MenuItem placeholder={"Menu 2"} className='h-auto font-semibold py-3'>Menu Item 12</MenuItem>

                                </MenuList>
                            </Menu>
                        </span>
                    </div>
                    <div className='mx-auto text-center my-auto'>
                        <ul className='' >
                            <Link to={'/'}>
                                <li className='inline-block px-5 text-white hover:underline hover:text-orange-300'>Trang chủ</li>
                            </Link>
                            <Link to={'products'}>
                                <li className='inline-block px-5 text-white hover:underline hover:text-orange-300'>Sản phẩm</li>
                            </Link>
                            <Link to={'news'}>
                                <li className='inline-block px-5 text-white hover:underline hover:text-orange-300'>Tin tức</li>
                            </Link>
                            <li className='inline-block px-5 text-white'>Giao hàng</li>
                            <li className='inline-block px-5 text-white'>Liên hệ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header