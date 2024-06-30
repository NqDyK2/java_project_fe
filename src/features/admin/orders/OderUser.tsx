import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore'
import { apiGetAllOrder } from '../../checkout/oder.action'
import { FaCaretRight } from 'react-icons/fa'
import ModalsDetailOrder from '../../../components/client/component/ModalsDetailOrder'
import UpdateStatusOrder from '../../../components/client/component/UpdateStatusOrder'

type Props = {}

const OderUser = (props: Props) => {
    const allOrders = useAppSelector((state) => state.orderAdmin)
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(apiGetAllOrder({ page: page, size: 7 }))
    }, [dispatch, page])
    const allOrder = allOrders.result?.data
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

    const onChangePage = (index: any) => {
        setPage(index)
    }

    const [detailOrder, setDetailOrder] = useState();
    const [showModal, setShowModal] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const openModalDetailOrder = (data: any) => {
        setDetailOrder(data)
        setShowModal(true)
    }

    const openModalUpdateStatus = (data: any) => {
        setDetailOrder(data)
        setShowModalUpdate(true)
    }

    const handleToggle = (value: boolean) => {
        setShowModal(value);
        setShowModalUpdate(value);
    };
    return (
        <>
            <div>
                <div className="pb-20 pt-5">
                    <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                            <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center">
                                    <div className="flex items-center lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
                                        <ul className="flex justify-center items-center">
                                            {
                                                [...Array(allOrders?.result.totalPage).keys()].map((item, index) => (
                                                    <li key={index}>
                                                        <span onClick={() => onChangePage(item + 1)} className={`flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-1 rounded px-3 py-2 focus:outline-none`}>{item + 1}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
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
                                        allOrder?.map((item: any) => (
                                            <tr key={item.orderId} className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.note}</td>
                                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.address}</td>
                                                <td className="pr-6 whitespace-no-wrap">
                                                    <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">{item.phone}</p>
                                                </td>
                                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{formatPrice(item.totalAmount)}vnđ</td>
                                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.orderDetailResponses.length}</td>
                                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{funcConvertStatus(item.status)}</td>
                                                <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">
                                                    <button onClick={() => openModalDetailOrder(item)} className='border px-2 py-1 rounded-md border-green-light text-green-light hover:border-red-400 hover:text-red-400 text-sm'>
                                                        <span>Chi tiết<FaCaretRight className='inline-block mb-1 pl-2' /></span>
                                                    </button>
                                                </th>
                                                <th className="text-left text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">
                                                    <button onClick={() => openModalUpdateStatus(item)} className='border px-2 py-1 rounded-md border-blue-300 hover:border-red-400 text-blue-300 hover:text-red-400 text-sm'>
                                                        <span>Cập nhật<FaCaretRight className='inline-block mb-1 pl-2' /></span>
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
            </div>
            {
                showModal && (<ModalsDetailOrder onClick={handleToggle} data={detailOrder} isAdmin={true} />)
            }
            {
                showModalUpdate && (<UpdateStatusOrder onClick={handleToggle} data={detailOrder} isAdmin={true} />)
            }
        </>
    )
}

export default OderUser