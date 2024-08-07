import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoMdStar } from 'react-icons/io'
import dummyImg from "../../../img/imgDummy.png"
import { FaCaretRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type Props = {
    name?: string
    heading?: boolean | false
    btnNext?: boolean | false
    mode?: string
    list?: []
}

type List = {
    id: any,
    title: string,
    content: string,
    price: number,
    amount: number,
    image: string,
    unit: string,
    status: number,
    categories: []
    userId: string,
};

const Item = (props: Props) => {
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
            <div className={` ${props.mode ? "" : 'w-[1440px]'} mx-auto my-5 bg-white rounded-xl`}>
                {
                    props.btnNext ? <div className='flex justify-between px-5'>
                        <div className='text-left font-bold text-2xl py-3 px-9'>
                            <span>{props.name}</span>
                        </div>
                        <div className='mt-5'>
                            <Link to={"/products"}>
                                <button className='border px-2 py-2 rounded-md border-green-light text-green-light text-sm'>
                                    <span>Xem đầy đủ <FaCaretRight className='inline-block mb-1 pl-2' /></span>
                                </button>
                            </Link>
                        </div>
                    </div> : <div className='text-left font-bold text-2xl pt-3 px-16'>
                        <span>{props.name}</span>
                    </div>
                }
                {
                    props.heading ? <div className='text-left mx-12 mt-1 flex'>
                        <div className='text-left mx-2 flex border border-green-light px-3 py-2 rounded-full  text-green-light'><span>Hoa quả Đà Lạt</span></div>
                        <div className='text-left mx-2 flex border px-3 py-2 rounded-full text-gray-500'><span>Hoa quả nhập khẩu</span></div>
                        <div className='text-left mx-2 flex border px-3 py-2 rounded-full text-gray-500'><span>Hoa quả xuất khẩu</span></div>
                        <div className='text-left mx-2 flex border px-3 py-2 rounded-full text-gray-500'><span>Hoa quả đóng hộp</span></div>
                    </div> : ""
                }
                <div className='flex justify-evenly py-5'>
                    {
                        props.list?.map((item: List) => {

                            return (<div key={item.id} className='bg-white rounded-lg w-[280px] shadow-lg'>
                                <div className='w-[280px] h-[300px]'>
                                    <img src={item.image} alt="" className='rounded-t-lg h-[300px]' width={'100%'} height={'100%'} />
                                </div>
                                <div className='my-2 font-semibold text-xl'>
                                    <span>
                                        {item.title}
                                    </span>
                                </div>
                                {/* <div>
                                    <div className='px-2 py-1 text-lg text-gray-500'>
                                        <span><CiLocationOn className='inline-block mb-1 pl-2 text-3xl text-green-light' /> Bắc Giang </span>
                                    </div>
                                </div> */}
                                <div className='flex justify-center text-[#FF9933] my-1'>
                                    <IoMdStar className='text-xl' />
                                    <IoMdStar className='text-xl' />
                                    <IoMdStar className='text-xl' />
                                    <IoMdStar className='text-xl' />
                                    <IoMdStar className='text-xl' />
                                </div>
                                <div className='flex justify-center gap-5'>
                                    <span className='text-green-light text-xl font-semibold text-right  w-fit'>
                                        {formatPrice(item.price)} đ/{item.unit}
                                    </span>
                                </div>
                                <div>
                                    <Link to={`/products/detail/${item.id}`}>
                                        <button className='border px-2 py-2 my-4 border-green-light text-white text-sm bg-green-light rounded-md'>
                                            <span className='font-semibold px-24'>Mua ngay</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Item