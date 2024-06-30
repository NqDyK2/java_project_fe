import React, { useEffect, useState } from 'react'
import { FaMoneyBills } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

type Props = {}

const Sidebar = (props: Props) => {
    const [inPage, setInPage] = useState("users")
    return (
        <>
            <ul aria-orientation="vertical" className=" py-6">
                <Link to={"/admin/users"} onClick={() => setInPage("users")}>
                    <li className={`pl-6 cursor-pointer text-sm leading-3 tracking-normal pb-4 pt-5 ${inPage == "users" ? `text-indigo-700 focus:text-indigo-700` : ``}  focus:outline-none`}>
                        <div className="flex items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                            </div>
                            <span className="ml-2">Quản lý người dùng</span>
                        </div>
                    </li>
                </Link>
                <Link to={"/admin/orders"} onClick={() => setInPage("orders")}>
                    <li className={`pl-6 cursor-pointer text-sm leading-3 tracking-normal pb-4 pt-5 ${inPage == "orders" ? `text-indigo-700 focus:text-indigo-700` : ``}  focus:outline-none`}>
                        <div className="flex items-center">
                            <div>
                                <FaMoneyBills className="icon icon-tabler icon-tabler-grid" width={35} height={35} />
                            </div>
                            <span className="ml-2">Quản lý đơn hàng</span>
                        </div>
                    </li>
                </Link>
            </ul>
        </>

    )
}

export default Sidebar