import React, { useEffect, useState } from 'react'
import "../../../style/cart.css"
import { GiShoppingCart } from "react-icons/gi";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { context } from '../../../App';

type Props = {}

const Cart = (props: Props) => {
    const [show, setShow] = useState(false);
    const [hideCart, setHideCart] = useState(false);
    const locationUrl = useLocation();
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (locationUrl.pathname == "/login" || locationUrl.pathname == "/register" || locationUrl.pathname == "/admin/users" || locationUrl.pathname == "/admin/add-user" || locationUrl.pathname == `/admin/${id}/edit-users` || locationUrl.pathname == "/admin/orders") {
            setHideCart(true)
        }
    }, [hideCart])

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [count, setCount] = useState(1);
    const contextState = React.useContext(context)

    useEffect(() => {
        // Lấy dữ liệu từ localStorage khi component được mount
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            setCartItems(parsedCart);

            // Tính tổng giá trị các sản phẩm
            const total = parsedCart.reduce((acc, item) => acc + item.price, 0);
            setTotalPrice(total);
        }
    }, []);

    const formatPrice = (price: any) => {
        const priceStr = price?.toString();
        const lastThreeDigits = priceStr?.slice(-3); // lấy 3 số cuối
        const restOfNumber = priceStr?.slice(0, -3); // lấy phần còn lại của số

        if (restOfNumber) {
            return `${restOfNumber}.${lastThreeDigits}`;
        }
        return lastThreeDigits;
    };

    const handleRemoveItem = (id: any) => {
        // Xóa sản phẩm khỏi giỏ hàng
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);

        // Cập nhật lại localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Tính lại tổng giá trị các sản phẩm
        const total = updatedCart.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
    };
    const moveToCheckout = () => {
        let local: any = localStorage.getItem("account")
        local = JSON.parse(local)
        setShow(!show)
        navigate(`check-out/${local.id}`)
    }
    return (
        <>
            {
                hideCart ? "" : <div onClick={() => setShow(!show)} className="bg-[#AAD490] flex justify-center items-center px-2 rounded-full hover:text-white hover:bg-[#50A41C]" id="back-to-top">
                    <div className="relative py-2 hover:text-white">
                        <div className="t-0 absolute left-5 top-0.5">
                            <p className="flex h-1 w-1 items-center justify-center rounded-full p-2 text-xs text-white bg-red-500">{contextState?.cartItems.length > 0 ? contextState?.cartItems.length : cartItems.length}</p>
                        </div>
                        <GiShoppingCart className="file: h-8 w-8 text-white" />
                    </div>
                </div >
            }
            <div className='absolute z-[1000]'>
                {show && (
                    <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="flex md:flex-row flex-col justify-end" id="cart">
                                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                    <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                        <p className="text-sm pl-2 leading-none">Trở lại</p>
                                    </div>
                                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Giỏ hàng</p>
                                    {
                                        cartItems?.map((item: any) => (
                                            <div key={item.id} className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                                                <div className="w-1/4">
                                                    <img src={`${item?.img}`} className="w-full h-full object-center object-cover" />
                                                </div>
                                                <div className="md:pl-3 md:w-3/4">
                                                    <div className="flex items-center justify-between w-full pt-1">
                                                        <p className="text-base font-black leading-none text-gray-800">{item.title}</p>
                                                        <div className="flex flex-row justify-between">
                                                            <div className="flex">
                                                                <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center w-14 pb-1" type="text" min={1} max={item.amount} value={item.count} onChange={(e) => (e.target.value > item?.amount ? setCount(item?.amount) : setCount(Number(e.target.value)))} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <p className="text-xs leading-3 text-gray-600 pt-2 text-left">Đơn giá: 10 inches</p> */}
                                                    <div className="flex items-center justify-between pt-5 pr-6">
                                                        <div className="flex itemms-center" onClick={() => handleRemoveItem(item.id)}>
                                                            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Xóa</p>
                                                        </div>
                                                        <p className="text-base font-black leading-none text-gray-800">{formatPrice(item.price)} vnđ</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Tổng hóa đơn</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Số tiền sản phẩm</p>
                                                <p className="text-base leading-none text-gray-800">{formatPrice(totalPrice)} vnđ</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Phí ship</p>
                                                <p className="text-base leading-none text-gray-800">30.000 vnđ</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Tổng tiền</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">{formatPrice(totalPrice + 30000)} vnđ</p>
                                            </div>
                                            <button onClick={() => moveToCheckout()} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Thanh toán
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart