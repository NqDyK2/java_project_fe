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
import MultiRangeSlider from '../../components/client/component/MultiRangeSlider';

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
    const [selectedQuantityShow, setSelectedQuantityShow] = useState(12);
    const [optionSort, setOptionSort] = useState(0);
    const [sortBy, setSortBy] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const groupedArray = [];

    useEffect(() => {
        dispatch(apiGetAllPrd({ page: page, size: selectedQuantityShow, sortBy: sortBy, orderBy: orderBy }))
    }, [dispatch, page, selectedQuantityShow, optionSort, sortBy, orderBy])

    const handleChange = (event: any) => {
        setSelectedQuantityShow(event.target.value);
    };

    const handleChangeOptionSort = (e: any) => {
        const value = parseInt(e.target.value);

        switch (value) {
            case 0:
                setSortBy("");
                setOrderBy("");
                break;
            case 1:
                setSortBy("title");
                setOrderBy("asc");
                break;
            case 2:
                setSortBy("title");
                setOrderBy("desc");
                break;
            case 3:
                setSortBy("price");
                setOrderBy("asc");
                break;
            case 4:
                setSortBy("price");
                setOrderBy("desc");
                break;
            default:
                break;
        }
    }

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
                <span><Link to={"/"}>Trang chủ</Link> / Danh sách sản phẩm</span>
            </div>
            <h1 className='text-center text-3xl text-green-light font-semibold mt-5 mb-8'></h1>
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
                                                <p className="text-gray-800 text-left pl-10 text-base">Táo mỹ</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Táo tàu</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Táo xanh</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="pl-1 flex items-center hover:cursor-pointer" onClick={() => handleClickButton("dropdown2")}>
                                    {
                                        dropdowns.dropdown2 ?
                                            <>
                                                <RiArrowDropDownFill className='text-2xl text-green-light' /> <p className="text-base ml-2 text-green-light font-semibold">Bưởi</p>
                                            </> :
                                            <>
                                                <RiArrowDropRightFill className='text-2xl' /> <p className="text-base ml-2 text-gray-800 font-semibold">Bưởi</p>
                                            </>
                                    }
                                </div>
                                {dropdowns.dropdown2 && (
                                    <div className="pb-3">
                                        <div className=" ">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Bưởi Diễn</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Bưởi T10</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Bưởi da xanh</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="pl-1 flex items-center hover:cursor-pointer" onClick={() => handleClickButton("dropdown3")}>
                                    {
                                        dropdowns.dropdown3 ?
                                            <>
                                                <RiArrowDropDownFill className='text-2xl text-green-light' /> <p className="text-base ml-2 text-green-light font-semibold">Cam</p>
                                            </> :
                                            <>
                                                <RiArrowDropRightFill className='text-2xl' /> <p className="text-base ml-2 text-gray-800 font-semibold">Cam</p>
                                            </>
                                    }
                                </div>
                                {dropdowns.dropdown3 && (
                                    <div className="pb-3">
                                        <div className=" ">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Cam Canh</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Cam Đường</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Cam Sành</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="pl-1 flex items-center hover:cursor-pointer" onClick={() => handleClickButton("dropdown4")}>
                                    {
                                        dropdowns.dropdown4 ?
                                            <>
                                                <RiArrowDropDownFill className='text-2xl text-green-light' /> <p className="text-base ml-2 text-green-light font-semibold">Củ</p>
                                            </> :
                                            <>
                                                <RiArrowDropRightFill className='text-2xl' /> <p className="text-base ml-2 text-gray-800 font-semibold">Củ</p>
                                            </>
                                    }
                                </div>
                                {dropdowns.dropdown4 && (
                                    <div className="pb-3">
                                        <div className=" ">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Sắn</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Khoai</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Từ</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="pl-1 flex items-center hover:cursor-pointer" onClick={() => handleClickButton("dropdown5")}>
                                    {
                                        dropdowns.dropdown5 ?
                                            <>
                                                <RiArrowDropDownFill className='text-2xl text-green-light' /> <p className="text-base ml-2 text-green-light font-semibold">Khác</p>
                                            </> :
                                            <>
                                                <RiArrowDropRightFill className='text-2xl' /> <p className="text-base ml-2 text-gray-800 font-semibold">Khác</p>
                                            </>
                                    }
                                </div>
                                {dropdowns.dropdown5 && (
                                    <div className="">
                                        <div className=" ">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Tổ Yến</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Chân Yến</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Yến Viên</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <p className="text-gray-800 text-left pl-10 text-base">Vải</p>
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
                                    SẮP XẾP SẢN PHẨM
                                </span>
                            </div>
                            <div className='pb-8'>
                                <div className="relative h-12 w-60 mx-2 mt-5 min-w-[200px]">
                                    <select onChange={handleChangeOptionSort}
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                        <option value={0}>Mặc định</option>
                                        <option value={1}>A → Z</option>
                                        <option value={2}>Z → A</option>
                                        <option value={3}>Giá tăng dần</option>
                                        <option value={4}>Giá giảm dần</option>
                                    </select>
                                    <label
                                        className="before:content[' '] after:content[' '] font-semibold pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Sắp xếp theo:
                                    </label>
                                </div>
                            </div>
                            <div className='pb-8 mb-3'>
                                <h2 className='mt-1'>
                                    GIÁ
                                </h2>
                                <MultiRangeSlider min={5000}
                                    max={500000}
                                    onChange={({ min, max }) =>
                                        console.log(`min = ${min}, max = ${max}`)
                                    } />
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
                                    <label className=''>Nam Định</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Ninh Bình</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Hưng Yên</label>
                                </div>
                                <div className='flex items-center gap-2 px-4 py-1'>
                                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                                    <label className=''>Nghệ An</label>
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
                                <label htmlFor="" className='mr-3'>Hiển thị số sản phẩm:</label>
                                <select onChange={handleChange} value={selectedQuantityShow || ''} className='text-left w-[250px] py-1 px-1 border border-gray-500 rounded-lg'>
                                    <option defaultValue={'selected'} value={12}>12 Sản phẩm</option>
                                    <option value={24}>24 Sản phẩm</option>
                                    <option value={36}>36 sản phẩm</option>
                                    <option value={result.result?.totalPage ? result.result?.totalCount : "null"}>Hiển thị tất cả</option>
                                </select>
                            </div>
                            <div>
                                <span>Hiển thị {result.result?.pageSize ? result.result?.pageSize : ""}/{result.result?.totalPage ? result.result?.totalCount : ""} sản phẩm</span>
                            </div>
                        </div>
                        <div className='bg-white pb-1 mb-10'>
                            {
                                groupedArray.map((block: any, index) => (
                                    <div key={index} className={`flex ${block?.length == 4 ? "justify-around" : ""} my-5 pt-2 pb-2`}>
                                        {block.map((item: any) => (
                                            <div key={item.id} className={`border border-gray-300 shadow-md ${block?.length == 4 ? "mx-5" : "mx-7"} w-full max-w-[245px] rounded-lg`}>
                                                <div>
                                                    <img src={item.image} alt="" className='rounded-lg px-2 pt-3 w-[245px] h-[165px]' />
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
                                result.result?.totalPage == 1 ?
                                    ""
                                    : [...Array(result.result?.totalPage).keys()].map((item, index) => (
                                        <div key={index} onClick={() => onChangePage(item + 1)} className={`${item + 1 == result.result?.pageNumber ? 'px-2 bg-green-light text-white rounded-sm' : 'border border-gray-400 px-2 rounded-sm cursor-pointer'} border border-gray-400 px-2 rounded-sm`}><span>{item + 1}</span></div>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Products