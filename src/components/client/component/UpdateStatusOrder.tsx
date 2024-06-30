import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/useStore';
import { apiUpdateStatusOrder } from '../../../features/admin/orders/oderAdmin.action';
import { useNavigate } from 'react-router-dom';

interface ChildComponentProps {
    onClick: (value: any) => void;
    data: any; // Dữ liệu truyền từ component cha
    isAdmin: boolean; // Trạng thái hiển thị component con
}
const UpdateStatusOrder: React.FC<ChildComponentProps> = ({ onClick, data, isAdmin }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
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
    const handleToggle = () => {
        onClick(false);
    };
    let statusOrder: number;
    const handleChangeOptionStatus = (e: any) => {
        const value = parseInt(e.target.value);
        switch (value) {
            case 0:
                statusOrder = 0
                break;
            case -1:
                statusOrder = -1
                break;
            case 1:
                statusOrder = 1
                break;
            default:
                break;
        }
    }

    const handleChangeStatus = () => {
        dispatch(apiUpdateStatusOrder({ idOrder: data.orderId, status: statusOrder }))
        onClick(false);
        navigate(0)
    }
    return (
        <div className='z-[1000] fixed w-full min-h-screen bg-black bg-opacity-70 top-0 overflow-y-auto overflow-x-hidden sticky-0'>
            <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="mt-40 overflow-y-auto overflow-x-hidden mx-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-[1440px] md:inset-0 h-[calc(100%-1rem)] min-h-full">
                <div className="relative p-4 w-[1000px] ml-56 max-w-2xl max-h-full">
                    <div className="relative bg-white w-[1000px] rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Cập nhật trạng thái đơn hàng
                            </h3>
                            <button onClick={handleToggle} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only" >Close modal</span>
                            </button>
                        </div>
                        <div className='min-w-full bg-white dark:bg-gray-800'>
                            <div className='mx-5 py-4'>
                                <label htmlFor="countries" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chọn trạng thái</label>
                                <select onChange={handleChangeOptionStatus} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option defaultValue={data.status}>{funcConvertStatus(data.status)}</option>
                                    <option value={-1}>Hủy</option>
                                    <option value={0}>Chờ xác nhận</option>
                                    <option value={1}>Xác nhận</option>
                                </select>
                                <div onClick={handleToggle} className="mt-5 flex items-center pt-4 pl-4 pr-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={() => handleChangeStatus()} data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Xác nhận</button>
                                    <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Hủy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateStatusOrder;