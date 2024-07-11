import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { apiGetOrderByUser } from './oder.action'
import { useParams } from 'react-router-dom'
import { FaCaretRight } from 'react-icons/fa'
import ModalsDetailOrder from '../../components/client/component/ModalsDetailOrder'

type Props = {}

const OrderOfUser = (props: Props) => {
    const dispatch = useAppDispatch()
    const allOrderOfUser = useAppSelector((state) => state.order.result)
    const { id } = useParams<{ id: string }>();
    const [detailOrder, setDetailOrder] = useState();
    const [showModal, setShowModal] = useState(false);
    const [statusCode, setStatusCode] = useState(0)

    useEffect(() => {
        dispatch(apiGetOrderByUser({ userId: id, status: statusCode }))
    }, [dispatch, statusCode])
    console.log("allOrderOfUser", allOrderOfUser);

    const formatPrice = (price: any) => {
        const priceStr = price?.toString();
        const lastThreeDigits = priceStr?.slice(-3); // lấy 3 số cuối
        const restOfNumber = priceStr?.slice(0, -3); // lấy phần còn lại của số

        if (restOfNumber) {
            return `${restOfNumber}.${lastThreeDigits}`;
        }
        return lastThreeDigits;
    };

    let showStatus: string;
    const funcConvertStatus = (statusId: number) => {
        if (statusId === -1) {
            showStatus = "Hủy"
            return showStatus
        } else if (statusId === 0) {
            showStatus = "Đang chờ xác nhận"
            return showStatus
        } else {
            showStatus = "Đã Xác nhận"
            return showStatus
        }
    }
    const handleChangeOptionStatus = (e: any) => {
        const value = parseInt(e.target.value);
        switch (value) {
            case 0:
                setStatusCode(0)
                break;
            case -1:
                setStatusCode(-1)
                break;
            case 1:
                setStatusCode(1)
                break;
            default:
                break;
        }
    }
    const openModalDetailOrder = (data: any) => {
        setDetailOrder(data)
        setShowModal(true)
    }

    const handleToggle = (value: boolean) => {
        setShowModal(value);
    };

    return (
        <>
            <div className='flex flex-col h-[790px]'>
                <h1 className="text-4xl font-black leading-10 text-gray-800 pt-5">Đơn hàng</h1>
                <div className="pb-20 pt-5">
                    <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                            <div className='pb-8 pl-20'>
                                <div className="relative h-12 w-60 mx-2 mt-5 min-w-[200px]">
                                    <select
                                        onChange={handleChangeOptionStatus}
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                        <option value={0}>Mặc định</option>
                                        <option value={-1}>Hủy</option>
                                        <option value={0}>Đang chờ xác nhận</option>
                                        <option value={1}>Xác nhận</option>
                                    </select>
                                    <label
                                        className="before:content[' '] after:content[' '] font-semibold pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Sắp xếp theo:
                                    </label>
                                </div>
                            </div>
                            <table className="min-w-full bg-white dark:bg-gray-800">
                                <thead>
                                    <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                        <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">Họ và tên</th>
                                        <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">Địa chỉ</th>
                                        <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-center text-sm tracking-normal leading-4">Số điện thoại</th>
                                        <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">Tổng tiền</th>
                                        <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">Số sản phẩm</th>
                                        <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">Trạng thái</th>
                                        <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4"></th>
                                        <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">
                                            <div className="opacity-0 w-2 h-2 rounded-full bg-indigo-400" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allOrderOfUser?.map((item: any) => (
                                            <tr key={item.orderId} className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.note}</td>
                                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.address}</td>
                                                <td className="pr-6 whitespace-no-wrap">
                                                    <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">{item.phone}</p>
                                                </td>
                                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{formatPrice(item.totalAmount)} đ</td>
                                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.orderDetailResponses.length}</td>
                                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{funcConvertStatus(item.status)}</td>
                                                <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">
                                                    <button onClick={() => openModalDetailOrder(item.orderDetailResponses)} className='border px-2 py-1 rounded-md border-green-light text-green-light text-sm'>
                                                        <span>Chi tiết<FaCaretRight className='inline-block mb-1 pl-2' /></span>
                                                    </button>
                                                </th>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {
                    showModal && (<ModalsDetailOrder onClick={handleToggle} data={detailOrder} isAdmin={false} />)
                }
            </div>
        </>
    )
}

export default OrderOfUser