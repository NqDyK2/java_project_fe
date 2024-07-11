import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { useNavigate, useParams } from 'react-router-dom';
import { apiGetUser } from '../admin/user/edit-user/editUser.action';
import { SubmitHandler, useForm } from 'react-hook-form';
import { apiCreateOrder } from './oder.action';
import { toast } from 'react-toastify';

type Props = {}
const CheckOut = (props: Props) => {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [changeText1, setChangeText1] = useState("City");
    const { id } = useParams<{ id: string }>();
    const { result, loadling, error } = useAppSelector((state: any) => state.editUser)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const HandleText1 = (e: any) => {
        setChangeText1(e);
        setDropdown1(false);
    };

    useEffect(() => {
        dispatch(apiGetUser(Number(id)));
    }, [dispatch, id]);



    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [count, setCount] = useState(1);
    const [productQuantities, setProductQuantities] = useState([]);

    useEffect(() => {
        // Lấy dữ liệu từ localStorage khi component được mount
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            setCartItems(parsedCart);
            const transformedData = parsedCart.map(item => ({
                productId: item.id,
                quantity: item.count
            }));
            setProductQuantities(transformedData);
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
    type FormOrderValue = {
        note: string
        email?: string
        phone: string
        address: string
        username?: string
        productQuantities: object
    }

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<FormOrderValue>()
    useEffect(() => {
        if (result) {
            setValue("note", result.result?.fullName || "")
            setValue("email", result.result?.email ? result.result?.email : "")
            setValue("address", result.result?.address ? result.result?.address : "")
            setValue("phone", result.result?.phone ? result.result?.phone : "")
            setValue("username", result.result?.username ? result.result?.username : "")
        }
    }, [result, setValue])

    const onSubmit: SubmitHandler<FormOrderValue> = (data) => {
        const { note, phone, address } = data;
        const postData = {
            note,
            phone,
            address,
            productQuantities
        };
        dispatch(apiCreateOrder(postData))

    }
    const statusOrder = useAppSelector((state: any) => state.order)
    if (statusOrder.result?.status) {
        localStorage.removeItem("cart")
        toast.success("Đặt hàng thành công")
        navigate(`/orders/${id}`)
        navigate(0)
    }
    return (
        <form onClick={handleSubmit(onSubmit)}>
            <div className="overflow-y-hidden flex flex-col min-h-[790px]">
                <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                    <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                        <div className="flex w-full  flex-col justify-start items-start">
                            <div>
                                <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Thanh toán</p>
                            </div>
                            <div className="mt-12">
                                <p className="text-xl font-semibold leading-5 text-gray-800">Thông tin</p>
                            </div>
                            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                                <input {...register("note")} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Họ và Tên" />
                                <input {...register("address")} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Địa chỉ" />
                                <input {...register("email")} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Email" />
                                <input {...register("phone")} className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Số điện thoại" />
                                <input {...register("username")} disabled className="cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Thông tin tài khoản" />
                            </div>
                            <button className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Xác nhận</button>
                        </div>
                        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                            <div>
                                <h1 className="text-2xl font-semibold leading-6 text-gray-800">Hóa đơn thanh toán</h1>
                            </div>
                            <div className="flex mt-7 flex-col items-end w-full space-y-6">
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Tổng số sản phẩm</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">{cartItems.length}</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Tổng giá</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">{formatPrice(totalPrice)} vnđ</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Tiền ship</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">30.000 vnđ</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center mt-32">
                                <p className="text-xl font-semibold leading-4 text-gray-800">Tổng tiền</p>
                                <p className="text-lg font-semibold leading-4 text-gray-800">{formatPrice(totalPrice + 30000)} vnđ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CheckOut