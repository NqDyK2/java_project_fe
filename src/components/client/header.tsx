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
import SearchBar from './component/SearchBar';
import { useAppSelector } from '../../hooks/useStore';
type Props = {}

const Header = (props: Props) => {

    const [statusAuth, setStatusAuth] = useState(false);
    const [fullName, setFullName] = useState("")
    const [idUser, setIdUser] = useState()
    const [roles, setRoles] = useState([])
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate()

    const searchResults = useAppSelector((state: any) => state.search.result);

    useEffect(() => {
        if (localStorage.getItem("account")) {
            let local: any = localStorage.getItem("account")
            local = JSON.parse(local)
            setIdUser(local.id)
            setFullName(local.fullName)
            setRoles(local.roles)
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

    const formatPrice = (price: any) => {
        const priceStr = price.toString();
        const lastThreeDigits = priceStr.slice(-3); // lấy 3 số cuối
        const restOfNumber = priceStr.slice(0, -3); // lấy phần còn lại của số

        if (restOfNumber) {
            return `${restOfNumber}.${lastThreeDigits}`;
        }
        return lastThreeDigits;
    };
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
                                        {roles.includes("ROLE_ADMIN") ? <Link to={`/admin/users`}>
                                            <MenuItem placeholder={"Menu"} className='my-1'>
                                                Đi đến Admin
                                            </MenuItem>
                                        </Link> : ""}
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
                                        <Link to={`/all-prds`}>
                                            <MenuItem placeholder={"Menu"} className='my-1'>
                                                Quản lý sản phẩm
                                            </MenuItem>
                                        </Link>
                                        <MenuItem placeholder={"Menu"} onClick={() => logoutBtn()} className='hover:border-none hover:text-orange-300 mt-1'>
                                            Đăng xuất
                                        </MenuItem>
                                    </MenuList>
                                </Menu> : <div className='my-auto flex pl-8'>
                                    <Link to={'/login'}>
                                        <span className='px-2 hover:underline hover:text-orange-300 cursor-pointer'><TiLockClosed className='inline-block text-xl mb-1 mr-2 hover:underline hover:text-orange-300' />Đăng nhập</span>
                                    </Link>
                                    <Link to={'/register'}>
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
                        <Link to={"/"}>
                            <div className='pt-3 '>
                                <img src={imgLogo} alt="" width={240} />
                            </div>
                        </Link>
                        <SearchBar onFocusChange={setIsFocused} />
                        <div className='pt-7'>
                            <div className=' bg-main-color w-[200px] h-10 m-auto py-auto rounded-full text-white'>
                                <button className='pt-2 text-center font-semibold'><GiVibratingSmartphone className='inline-block text-2xl mb-1 mr-2' />0373 99 7970</button>
                            </div>
                        </div>
                    </div>
                    {isFocused && (
                        <div className="rounded-lg bg-white shadow-md my-0.5 pin-t pin-l w-[910px] ml-[302px] absolute z-10">
                            <ul className='list-reset'>
                                {searchResults.result?.productList?.map((product) => (
                                    <li key={product.id} className=''>
                                        <Link to={"/"}>
                                            <div className='flex gap-5 cursor-pointer text-black text-sm hover:text-black leading-3 tracking-normal py-2 hover:bg-gray-100 px-3 font-normal'>
                                                <div className='ml-10'>
                                                    <img src={product.image} className="w-14 h-14 mx-auto object-cover rounded-full bg-[#f7f7f7]" alt="" />
                                                </div>
                                                <p className="my-auto text-left">{product.title}</p>
                                                <p className="my-auto text-left">{formatPrice(product.price)}đ/{product.unit}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>)}
                </div>
            </div>
            <div className='bg-main-color'>
                <div className=' w-[1440px] mx-auto flex'>
                    <div className='bg-[#F4FFED] py-3'>
                        <span className='flex font-semibold '>
                            {/* <Menu
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
                            </Menu> */}
                        </span>
                    </div>
                    <div className='mx-auto text-center my-auto py-3'>
                        <ul className='' >
                            <Link to={'/'}>
                                <li className='inline-block px-5 text-white hover:underline hover:text-orange-300'>Trang chủ</li>
                            </Link>
                            <Link to={'/products'}>
                                <li className='inline-block px-5 text-white hover:underline hover:text-orange-300'>Sản phẩm</li>
                            </Link>
                            <Link to={'news'}>
                                <li className='inline-block px-5 text-white hover:underline hover:text-orange-300'>Tin tức</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header