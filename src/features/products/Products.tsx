import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropRightFill } from "react-icons/ri";
import { RiArrowDropDownFill } from "react-icons/ri";
import grapeFruitPromotions from "../../img/grapeFruitProducts.png"
import bananaPrds from "../../img/bananaPrds.png"
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { apiGetAllPrd } from '../farm-manage/manage-farm.action';

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

    const { result, loading, error } = useAppSelector((state: any) => state.products)
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const groupedArray = [];

    useEffect(() => {
        dispatch(apiGetAllPrd({ page: page, size: 12 }))
    }, [dispatch, page])

    for (let i = 0; i < result.result?.productList?.length; i += 4) {
        groupedArray.push(result.result?.productList.slice(i, i + 4));
    }

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

    const onChangePage = (index: any) => {
        setPage(index)
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
            <div className='w-[1440px] mx-auto mt-3 text-left font-semibold'>
                <span>Trang chủ / Rau củ quả nhiệt đới</span>
            </div>
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
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Tất cả</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>An Giang</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Hà Nội</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bắc Giang</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bình Dương</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Hải Phòng</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
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
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Tất cả</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>An Giang</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Hà Nội</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bắc Giang</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bình Dương</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Hải Phòng</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Bắc Ninh</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
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
                        <div className='mt-5 flex justify-between	'>
                            <div className='text-left'>
                                <label htmlFor="" className='mr-3'>Lọc sản phẩm:</label>
                                <select name="" id="" className='text-left w-[250px] py-1 px-1 border border-gray-500 rounded-sm'>
                                    <option defaultValue={'selected'} className='text-left'>Tất cả (mới nhất) </option>
                                    <option value="">Option 1</option>
                                    <option value="">Option 2</option>
                                    <option value="">Option 3</option>
                                </select>
                            </div>
                            <div>
                                <span>Hiển thị 16/200 sản phẩm</span>
                            </div>
                        </div>
                        <div className='bg-white pb-1 mb-10'>
                            {
                                groupedArray.map((block: any, index) => (
                                    <div key={index} className={`flex  ${block?.length == 4 ? "justify-around" : ""} my-5 pt-2 pb-2`}>
                                        {block.map((item: any) => (
                                            <div key={item.id} className={`border border-gray-300 shadow-md ${block?.length == 4 ? "mx-5" : "mx-7"} w-full max-w-[245px] rounded-lg`}>
                                                <div>
                                                    <img src={bananaPrds} alt="" width={'100%'} className='rounded-lg px-2 pt-3' />
                                                </div>
                                                <div className='text-xl font-semibold mt-5 truncate'>
                                                    <span title={`${item.title}`}>{item.title}</span>
                                                </div>
                                                <div className='flex justify-center text-[#FF9933] my-2'>
                                                    <IoMdStar className='text-xl' />
                                                    <IoMdStar className='text-xl' />
                                                    <IoMdStar className='text-xl' />
                                                    <IoMdStar className='text-xl' />
                                                    <IoMdStar className='text-xl' />
                                                </div>
                                                <div className='flex justify-center gap-5 mt-3'>
                                                    <div className='text-sm font-semibold mt-0.5'><span>{item.unit}</span></div>
                                                    <div><span className='text-green-light font-semibold'>{formatPrice(item.price)}đ</span></div>
                                                </div>
                                                <Link to={`detail/${item.id}`}>
                                                    <div className='mt-7 mb-5'>
                                                        <span className='bg-green-light text-white rounded-sm px-20 py-2'>Mua ngay</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex justify-center gap-4 mb-5'>
                            {
                                [...Array(result.result?.totalPage).keys()].map((item, index) => (
                                    <div key={index} onClick={() => onChangePage(item + 1)} className={`${item + 1 == result.result?.pageNumber ? 'px-2 bg-green-light text-white rounded-sm' : 'border border-gray-400 px-2 rounded-sm cursor-pointer'} border border-gray-400 px-2 rounded-sm`}><span>{item + 1}</span></div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products