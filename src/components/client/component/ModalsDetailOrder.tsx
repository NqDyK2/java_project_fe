import React, { useState } from 'react';

interface ChildComponentProps {
    onClick: (value: any) => void;
    data: any; // Dữ liệu truyền từ component cha
    isAdmin: boolean; // Trạng thái hiển thị component con
}
const ModalsDetailOrder: React.FC<ChildComponentProps> = ({ onClick, data, isAdmin }) => {
    console.log(data);
    const formatPrice = (price: any) => {
        const priceStr = price?.toString();
        const lastThreeDigits = priceStr?.slice(-3); // lấy 3 số cuối
        const restOfNumber = priceStr?.slice(0, -3); // lấy phần còn lại của số

        if (restOfNumber) {
            return `${restOfNumber}.${lastThreeDigits}`;
        }
        return lastThreeDigits;
    };
    const handleToggle = () => {
        onClick(false); // hoặc false, tùy thuộc vào logic của bạn
    };
    return (
        <div className='z-[1000] fixed w-full min-h-screen bg-black bg-opacity-70 top-0 overflow-y-auto overflow-x-hidden sticky-0'>
            <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="mt-40 overflow-y-auto overflow-x-hidden mx-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-[1440px] md:inset-0 h-[calc(100%-1rem)] min-h-full">
                <div className="relative p-4 w-[1000px] ml-56 max-w-2xl max-h-full">
                    <div className="relative bg-white w-[1000px] rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Chi tiết đơn hàng
                            </h3>
                            <button onClick={handleToggle} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only" >Close modal</span>
                            </button>
                        </div>
                        <table className="min-w-full bg-white dark:bg-gray-800">
                            <thead>
                                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                    <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">Tên sản phẩm</th>
                                    <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">Ảnh</th>
                                    <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">Số lượng</th>
                                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-center text-sm tracking-normal leading-4">Đơn giá</th>
                                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-center text-sm tracking-normal leading-4">Đơn vị</th>
                                    <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">Tổng tiền</th>
                                    <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4"></th>
                                    <th className="text-center text-gray-600 dark:text-gray-400 font-normal pr-6 text-sm tracking-normal leading-4">
                                        <div className="opacity-0 w-2 h-2 rounded-full bg-indigo-400" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((item: any) => (
                                        <tr key={item.id} className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.productInfoResponse.title}</td>
                                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                                <img src={`${item.productInfoResponse.image}`} alt="" width={100} height={100} />
                                            </td>
                                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.quantity}</td>
                                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{formatPrice(item.productInfoResponse.price)}</td>
                                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{item.productInfoResponse.unit}</td>
                                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{formatPrice(item.productInfoResponse.price * item.quantity)}vnđ</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalsDetailOrder;