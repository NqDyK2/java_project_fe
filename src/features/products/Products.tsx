import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropRightFill } from "react-icons/ri";
import { RiArrowDropDownFill } from "react-icons/ri";
import grapeFruitPromotions from "../../img/grapeFruitProducts.png"
type Props = {}

type DropdownState = {
    dropdown1: boolean,
    dropdown2: boolean,
    dropdown3: boolean,
    dropdown4: boolean,
    dropdown5: boolean,
};

const Products = (props: Props) => {
    // const [openDropdown, setOpenDropdown] = useState(null);

    // const handleButtonClick = (dropdown: any) => {
    //     if (openDropdown === dropdown) {
    //         setOpenDropdown(null); // Nếu nhấp vào nút đã mở, thì đóng nó lại
    //     } else {
    //         setOpenDropdown(dropdown); // Mở dropdown mới và đóng dropdown hiện tại
    //     }
    // };
    // type DropdownState = {
    //     dropdown1: boolean;
    //     dropdown2: boolean;
    // };

    const [dropdowns, setDropdowns] = useState<DropdownState>({
        dropdown1: false,
        dropdown2: false,
        dropdown3: false,
        dropdown4: false,
        dropdown5: false,
    });

    const handleClickButton = (dropdown: keyof DropdownState) => {
        setDropdowns(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };
    return (
        <>
            <h1 className='text-center text-3xl text-green-light font-semibold mt-5 mb-8'>SẢN PHẨM</h1>
            <div className='flex justify-center gap-5 mx-auto'>
                <div >
                    <div className='bg-white rounded-md'>
                        <div>
                            <div className='border-b-green-light border-b-2 py-2 pl-3 pr-10 font-semibold'>
                                <span className=''>
                                    <RxHamburgerMenu className='inline-block text-lg mb-1 mr-2' />TẤT CẢ DANH MỤC
                                </span>
                            </div>
                            <div className='pb-6 pt-3'>
                                <div className="pl-1 flex items-center hover:cursor-pointer" onClick={() => handleClickButton('dropdown1')}>
                                    {
                                        dropdowns.dropdown1 ?
                                            <>
                                                <RiArrowDropDownFill className='text-2xl text-green-light' /> <p className="text-base ml-2 text-green-light font-semibold">Táo</p>
                                            </> :
                                            <>
                                                <RiArrowDropRightFill className='text-2xl' /> <p className="text-base ml-2 text-gray-800 font-semibold">Táo</p>
                                            </>
                                    }
                                </div>
                                {dropdowns.dropdown1 && (
                                    <div className="pb-3">
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">USA</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Germany</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Italy</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="pl-1 flex items-center hover:cursor-pointer" onClick={() => handleClickButton("dropdown2")}>
                                    {
                                        dropdowns.dropdown2 ?
                                            <>
                                                <RiArrowDropDownFill className='text-2xl text-green-light' /> <p className="text-base ml-2 text-green-light font-semibold">Táo</p>
                                            </> :
                                            <>
                                                <RiArrowDropRightFill className='text-2xl' /> <p className="text-base ml-2 text-gray-800 font-semibold">Táo</p>
                                            </>
                                    }
                                </div>
                                {dropdowns.dropdown2 && (
                                    <div className="pb-3">
                                        <div className=" ">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">USA</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Germany</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Italy</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="pl-1 flex items-center hover:cursor-pointer" onClick={() => handleClickButton("dropdown3")}>
                                    {
                                        dropdowns.dropdown3 ?
                                            <>
                                                <RiArrowDropDownFill className='text-2xl text-green-light' /> <p className="text-base ml-2 text-green-light font-semibold">Táo</p>
                                            </> :
                                            <>
                                                <RiArrowDropRightFill className='text-2xl' /> <p className="text-base ml-2 text-gray-800 font-semibold">Táo</p>
                                            </>
                                    }
                                </div>
                                {dropdowns.dropdown3 && (
                                    <div className="pb-3">
                                        <div className=" ">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">USA</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Germany</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Italy</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="pl-1 flex items-center hover:cursor-pointer" onClick={() => handleClickButton("dropdown4")}>
                                    {
                                        dropdowns.dropdown4 ?
                                            <>
                                                <RiArrowDropDownFill className='text-2xl text-green-light' /> <p className="text-base ml-2 text-green-light font-semibold">Táo</p>
                                            </> :
                                            <>
                                                <RiArrowDropRightFill className='text-2xl' /> <p className="text-base ml-2 text-gray-800 font-semibold">Táo</p>
                                            </>
                                    }
                                </div>
                                {dropdowns.dropdown4 && (
                                    <div className="pb-3">
                                        <div className=" ">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">USA</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Germany</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Italy</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="pl-1 flex items-center hover:cursor-pointer" onClick={() => handleClickButton("dropdown5")}>
                                    {
                                        dropdowns.dropdown5 ?
                                            <>
                                                <RiArrowDropDownFill className='text-2xl text-green-light' /> <p className="text-base ml-2 text-green-light font-semibold">Táo</p>
                                            </> :
                                            <>
                                                <RiArrowDropRightFill className='text-2xl' /> <p className="text-base ml-2 text-gray-800 font-semibold">Táo</p>
                                            </>
                                    }
                                </div>
                                {dropdowns.dropdown5 && (
                                    <div className="">
                                        <div className=" ">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">USA</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Germany</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Italy</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='bg-white mt-3 rounded-md'>
                        <div>
                            <div className='border-b-green-light border-b-2 py-2 pl-3 pr-10 font-semibold text-left'>
                                <span className=''>
                                    NƠI BÁN
                                </span>
                            </div>
                            <div className='pb-8 mb-3'>
                                <div className='flex items-center gap-2 px-4 pb-1 pt-3'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Tất cả</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>An Giang</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Hà Nội</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Giang</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bình Dương</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Hải Phòng</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Ninh</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white mt-3 rounded-md'>
                        <div>
                            <div className='border-b-green-light border-b-2 py-2 pl-3 pr-10 font-semibold text-left'>
                                <span className=''>
                                    NƠI BÁN
                                </span>
                            </div>
                            <div className='pb-8 mb-3'>
                                <div className='flex items-center gap-2 px-4 pb-1 pt-3'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Tất cả</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>An Giang</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Hà Nội</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Giang</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bình Dương</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Hải Phòng</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5'/>
                                    <label className=''>Bắc Ninh</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='bg-white'>
                            <div className='border-b-2 border-b-green-light text-left mb-5 py-3 px-3'>
                                <span className='font-semibold text-xl'>GIÁ ƯU ĐÃI</span>
                            </div>
                            <div className='flex gap-3 px-3 pb-4'>
                                <div className='flex gap-3 w-fit'>
                                    <div>
                                        <img src={grapeFruitPromotions} alt="" className='h-[105%]' />
                                    </div>
                                    <div className='w-[260px] text-left'>
                                        <div className='w-[200px]'>
                                            <span className='font-semibold text-lg'>Bưởi da xanh Bắc Giang loại 1</span>
                                        </div>
                                        <div className='text-lg'>
                                            <span>Giá bán:</span> <span className='text-green-light font-semibold'>30.000 đ/kg</span>
                                        </div>
                                        <div className='mt-4'>
                                            <span className='bg-green-light text-white rounded-sm px-10 py-2'>Liên hệ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3 w-fit'>
                                    <div>
                                        <img src={grapeFruitPromotions} alt="" className='h-[105%]' />
                                    </div>
                                    <div className='w-[260px] text-left'>
                                        <div className='w-[200px]'>
                                            <span className='font-semibold text-lg'>Bưởi da xanh Bắc Giang loại 1</span>
                                        </div>
                                        <div className='text-lg'>
                                            <span>Giá bán:</span> <span className='text-green-light font-semibold'>30.000 đ/kg</span>
                                        </div>
                                        <div className='mt-4'>
                                            <span className='bg-green-light text-white rounded-sm px-10 py-2'>Liên hệ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3 w-fit'>
                                    <div>
                                        <img src={grapeFruitPromotions} alt="" className='h-[105%]' />
                                    </div>
                                    <div className='w-[260px] text-left'>
                                        <div className='w-[200px]'>
                                            <span className='font-semibold text-lg'>Bưởi da xanh Bắc Giang loại 1</span>
                                        </div>
                                        <div className='text-lg'>
                                            <span>Giá bán:</span> <span className='text-green-light font-semibold'>30.000 đ/kg</span>
                                        </div>
                                        <div className='mt-4'>
                                            <span className='bg-green-light text-white rounded-sm px-10 py-2'>Liên hệ</span>
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

export default Products