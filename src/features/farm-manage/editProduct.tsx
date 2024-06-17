import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { apiAddCate, apiAddPrds, apiEditProduct, apiGetAllCate, apiGetDetailProductById } from './manage-farm.action'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import MultiSelect from '../../components/client/component/MultiSelect'

type Props = {}
type FormProductsValue = {
    title: string
    content: string
    price: number
    amount: number
    image: string
    unit: string
    categories: string[]
}
const EditProduct = (props: Props) => {
    const [categoryMode, setCategoryMode] = useState(true)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const detailProduct = useAppSelector((state: any) => state.products)
    // const { resultPrds, loadingPrds, errorPrds } = useAppSelector((state: any) => state.category)
    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<FormProductsValue>()
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        dispatch(apiGetDetailProductById(Number(id)));
    }, [dispatch, id]);
    const item = detailProduct.result?.result
    if (item) {
        setValue("title", item?.title ? item?.title : "Chưa có thông tin")
        setValue("price", item?.price ? item?.price : "Chưa có thông tin")
        setValue("unit", item?.unit ? item?.unit : "Chưa có thông tin")
        setValue("amount", item?.amount ? item?.amount : "Chưa có thông tin")
        setValue("image", item?.image ? item?.image : "Chưa có thông tin")
        setValue("content", item?.content ? item?.content : "Chưa có thông tin")
        // setValue("content", item?.content ? item?.content : "Chưa có thông tin")
    }
    const onSubmit: SubmitHandler<FormProductsValue> = (data) => {
        if (data.title == "" || data.title == item?.title) {
            data.title = null;
        }
        if (data.price.toString() == "" || data.price == item?.price) {
            data.price = null;
        }
        if (data.unit == "" || data.unit == item?.unit) {
            data.unit = null;
        }
        if (data.amount.toString() == "" || data.amount == item?.amount) {
            data.amount = null;
        }
        if (data.image == "" || data.image == item?.image) {
            data.image = null;
        }
        if (data.content == "" || data.content == item?.content) {
            data.content = null;
        }
        data.categories = null
        dispatch(apiEditProduct({ id, data: data }))
            .unwrap().then(() => {
                toast.success("Thêm sản phẩm thành công.")
                navigate("/all-prds")
            }).catch(() => {
                toast.error("Đã có lỗi xảy ra!!!")
            })

    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-no-wrap items-start">
                    <div className="w-[1440px] mx-auto">
                        <div className="py-4 px-2">
                            <div className="bg-white rounded shadow py-7">
                                <div className="hidden lg:block md:hidden">
                                    <div className="px-7 header flex bg-white lg:justify-around md:justify-around justify-start py-[30px] border-b-[2px] border-slate-100 flex-wrap gap-x-4 ">
                                        <a className="cursor-pointer">
                                            <div className="flex items-center instance group">
                                                <div className="svg-container">
                                                    <svg
                                                        className="text-[#1E293B] group-hover:text-indigo-700"
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M17.5 17.5V9.375"
                                                            stroke="Currentcolor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M2.5 9.375V17.5"
                                                            stroke="Currentcolor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M14.9401 1.875H5.05964C4.20847 1.875 3.43972 2.34375 3.10925 3.06484L1.41785 6.75781C0.848315 8.00039 1.79402 9.4082 3.26121 9.45312C3.28725 9.45312 3.31329 9.45312 3.33933 9.45312C4.56589 9.45312 5.56003 8.46953 5.56003 7.41289C5.56003 8.46758 6.55456 9.45312 7.78113 9.45312C9.00769 9.45312 9.99988 8.53984 9.99988 7.41289C9.99988 8.46758 10.994 9.45312 12.2206 9.45312C13.4471 9.45312 14.4417 8.53984 14.4417 7.41289C14.4417 8.53984 15.4358 9.45312 16.6624 9.45312C16.6884 9.45312 16.7138 9.45312 16.7385 9.45312C18.2057 9.40742 19.1514 7.99961 18.5819 6.75781L16.8905 3.06484C16.56 2.34375 15.7913 1.875 14.9401 1.875Z"
                                                            stroke="Currentcolor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M1.25 18.125H18.75"
                                                            stroke="Currentcolor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M5.3125 11.25H8.4375C8.68614 11.25 8.9246 11.3488 9.10041 11.5246C9.27623 11.7004 9.375 11.9389 9.375 12.1875V15.625H4.375V12.1875C4.375 11.9389 4.47377 11.7004 4.64959 11.5246C4.8254 11.3488 5.06386 11.25 5.3125 11.25Z"
                                                            stroke="Currentcolor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M11.25 18.125V12.1875C11.25 11.9389 11.3488 11.7004 11.5246 11.5246C11.7004 11.3488 11.9389 11.25 12.1875 11.25H14.6875C14.9361 11.25 15.1746 11.3488 15.3504 11.5246C15.5262 11.7004 15.625 11.9389 15.625 12.1875V18.125"
                                                            stroke="Currentcolor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="pl-3 heading-container">
                                                    <p className="text-base font-medium leading-none text-slate-800 group-hover:text-indigo-700">
                                                        Các loại quả
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="cursor-pointer">
                                            <div className="flex items-center group ">
                                                <div className="svg-container">
                                                    <svg
                                                        className="text-[#1E293B] group-hover:text-indigo-700"
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                                            stroke="Currentcolor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875"
                                                            stroke="Currentcolor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75"
                                                            stroke="Currentcolor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="pl-3 heading-container">
                                                    <p className="text-base font-medium leading-none text-slate-800 group-hover:text-indigo-700">
                                                        Sản phẩm
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="block px-6 lg:hidden md:block">
                                    <div className="relative top-1 ">
                                        <div className="relative w-full mt-2 rounded outline-none dropdown-one bg-gray-50">
                                            <button
                                                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
                                            >
                                                <div className="relative w-5 h-5 bg-indigo-100 rounded">
                                                    <svg
                                                        id="rotate"
                                                        className="absolute inset-x-0 inset-y-0 z-10 mx-auto my-auto cursor-pointer"
                                                        width={10}
                                                        height={6}
                                                        viewBox="0 0 10 6"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M0.5 0.75L5 5.25L9.5 0.75"
                                                            stroke="#4338ca"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </button>
                                            <div
                                                className="absolute right-0 z-20 hidden w-full px-2 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                                                id="drop-down-div-two_form_layout_wizard3"
                                            >
                                                <div className="flex gap-x-2 group">
                                                    <p
                                                        className=" flex flex-row-reverse	 justify-end gap-x-2  text-base font-medium leading-none text-gray-600 mt-[1px] cursor-pointer group-hover:bg-indigo-100 group-hover:font-medium group-hover:text-indigo-700 group-hover:rounded w-full p-3"
                                                    >
                                                        Location
                                                        <svg
                                                            className=" group-hover:text-indigo-700"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M2.07556 7.81027L17.7006 1.8966C17.7569 1.87504 17.8183 1.87026 17.8774 1.88284C17.9364 1.89543 17.9905 1.92483 18.0332 1.96751C18.0758 2.01018 18.1052 2.0643 18.1178 2.12332C18.1304 2.18234 18.1256 2.24375 18.1041 2.30011L12.1904 17.9251C12.1669 17.9845 12.1258 18.0352 12.0726 18.0704C12.0194 18.1057 11.9566 18.1238 11.8928 18.1224C11.829 18.1209 11.7672 18.1 11.7156 18.0623C11.6641 18.0247 11.6253 17.9722 11.6045 17.9118L8.97165 11.4239C8.94096 11.332 8.8893 11.2485 8.82076 11.1799C8.75222 11.1114 8.66868 11.0597 8.57673 11.029L2.08884 8.39855C2.02772 8.37821 1.97438 8.33949 1.93612 8.28767C1.89785 8.23586 1.87653 8.17348 1.87508 8.10909C1.87363 8.04469 1.89211 7.98142 1.92799 7.92793C1.96388 7.87444 2.01542 7.83334 2.07556 7.81027V7.81027Z"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M17.9688 2.03125L8.86719 11.1328"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div className="flex   gap-x-2 group">
                                                    <p
                                                        className=" flex flex-row-reverse	 justify-end gap-x-2 text-base font-medium leading-none text-gray-600 mt-[1px] cursor-pointer group-hover:bg-indigo-100 group-hover:font-medium group-hover:text-indigo-700 group-hover:rounded w-full p-3"
                                                    >
                                                        Customer
                                                        <svg
                                                            className=" group-hover:text-indigo-700"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M15.7035 6.5625C15.5891 8.15117 14.4106 9.375 13.1254 9.375C11.8403 9.375 10.6598 8.15156 10.5473 6.5625C10.4301 4.90977 11.5774 3.75 13.1254 3.75C14.6735 3.75 15.8207 4.93984 15.7035 6.5625Z"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M13.1248 11.875C10.5791 11.875 8.1311 13.1395 7.51781 15.602C7.43656 15.9277 7.64086 16.25 7.97563 16.25H18.2745C18.6092 16.25 18.8123 15.9277 18.7323 15.602C18.119 13.1 15.6709 11.875 13.1248 11.875Z"
                                                                stroke="Currentcolor"
                                                                strokeMiterlimit={10}
                                                            />
                                                            <path
                                                                d="M7.81116 7.26328C7.71975 8.53203 6.76741 9.53125 5.74085 9.53125C4.71429 9.53125 3.76038 8.53242 3.67054 7.26328C3.57718 5.94336 4.50413 5 5.74085 5C6.97757 5 7.90452 5.96758 7.81116 7.26328Z"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M8.04726 11.9531C7.34218 11.6301 6.56562 11.5059 5.74257 11.5059C3.71132 11.5059 1.75429 12.5156 1.26405 14.4824C1.1996 14.7426 1.36288 15 1.63007 15H6.01601"
                                                                stroke="Currentcolor"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                            />
                                                        </svg>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end */}
                                    </div>
                                </div>
                                {/* end */}
                                <div className="mt-10 px-7">
                                    <p className="text-xl font-semibold leading-tight text-gray-800">
                                        Thêm sản phẩm
                                    </p>
                                    <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                                        <div className="text-left">
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Tên sản phẩm
                                            </p>
                                            {/*-Dropdown*/}
                                            <input {...register("title")} className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                            {/* end */}
                                        </div>
                                        <div className="text-left">
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Giá:
                                            </p>
                                            <input {...register("price")} className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                            {/* end */}
                                        </div>
                                        <div className="text-left">
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Đơn vị bán (Ví dụ: kg, quả)
                                            </p>
                                            <input {...register("unit")} className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Số lượng tồn kho
                                            </p>
                                            <input {...register("amount")} className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        </div>
                                    </div>
                                    <div className="w-full pt-6 text-left">
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            Liên kết ảnh sản phẩm
                                        </p>
                                        {/*-Dropdown*/}
                                        <input {...register("image")} className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        {/* end */}
                                    </div>
                                    <div className="pt-6 text-left">
                                        <p className="text-base font-medium leading-none text-gray-800">
                                            Loại sản phẩm
                                        </p>
                                        <div className="w-full pt-6">
                                            <Controller
                                                name="categories"
                                                control={control}
                                                render={({ field, fieldState }) => (
                                                    <MultiSelect
                                                        onChange={(e) => field.onChange(e)}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 border-gray-300 mt-2 px-7 ">
                                    <p className="text-base font-semibold leading-4 text-gray-800">
                                        Mô tả
                                    </p>
                                    <div className="mt-5 border border-gray-300 rounded">
                                        <div className="flex flex-wrap items-center px-4 py-3 border-b border-gray-300">
                                            <div className="flex h-full gap-2 p-2 rounded cursor-pointer hover:bg-blue-50 w-fit">
                                                <p className="text-sm leading-none text-gray-600">
                                                    Normal
                                                </p>{" "}
                                                <svg
                                                    width={12}
                                                    height={12}
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2.625 4.3125L6 7.6875L9.375 4.3125"
                                                        stroke="#475569"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="flex items-center gap-5 ml-0 lg:ml-7 md:ml-3">
                                                <button className="p-1 hover:bg-gray-100 focus:bg-gray-100">
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M5.8335 4.99984C5.8335 4.77882 5.92129 4.56686 6.07757 4.41058C6.23385 4.2543 6.44582 4.1665 6.66683 4.1665H10.8335C11.5106 4.16646 12.1716 4.37262 12.7287 4.75753C13.2857 5.14245 13.7123 5.68788 13.9517 6.32123C14.1911 6.95458 14.232 7.64582 14.0688 8.30296C13.9057 8.96011 13.5463 9.55199 13.0385 9.99984C13.5463 10.4477 13.9057 11.0396 14.0688 11.6967C14.232 12.3539 14.1911 13.0451 13.9517 13.6784C13.7123 14.3118 13.2857 14.8572 12.7287 15.2421C12.1716 15.6271 11.5106 15.8332 10.8335 15.8332H6.66683C6.44582 15.8332 6.23385 15.7454 6.07757 15.5891C5.92129 15.4328 5.8335 15.2209 5.8335 14.9998V4.99984ZM10.8335 9.1665C11.2755 9.1665 11.6994 8.99091 12.012 8.67835C12.3246 8.36579 12.5002 7.94187 12.5002 7.49984C12.5002 7.05781 12.3246 6.63389 12.012 6.32133C11.6994 6.00877 11.2755 5.83317 10.8335 5.83317H7.50016V9.1665H10.8335ZM7.50016 10.8332H10.8335C11.2755 10.8332 11.6994 11.0088 12.012 11.3213C12.3246 11.6339 12.5002 12.0578 12.5002 12.4998C12.5002 12.9419 12.3246 13.3658 12.012 13.6783C11.6994 13.9909 11.2755 14.1665 10.8335 14.1665H7.50016V10.8332Z"
                                                            fill="#475569"
                                                        />
                                                    </svg>
                                                </button>
                                                <button className="p-1 hover:bg-gray-100 focus:bg-gray-100">
                                                    <svg
                                                        width={10}
                                                        height={12}
                                                        viewBox="0 0 10 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0.833496 1.00033C0.833496 0.779312 0.921294 0.56735 1.07757 0.41107C1.23385 0.25479 1.44582 0.166992 1.66683 0.166992H8.3335C8.55451 0.166992 8.76647 0.25479 8.92275 0.41107C9.07903 0.56735 9.16683 0.779312 9.16683 1.00033C9.16683 1.22134 9.07903 1.4333 8.92275 1.58958C8.76647 1.74586 8.55451 1.83366 8.3335 1.83366H5.8335V10.167H8.3335C8.55451 10.167 8.76647 10.2548 8.92275 10.4111C9.07903 10.5674 9.16683 10.7793 9.16683 11.0003C9.16683 11.2213 9.07903 11.4333 8.92275 11.5896C8.76647 11.7459 8.55451 11.8337 8.3335 11.8337H1.66683C1.44582 11.8337 1.23385 11.7459 1.07757 11.5896C0.921294 11.4333 0.833496 11.2213 0.833496 11.0003C0.833496 10.7793 0.921294 10.5674 1.07757 10.4111C1.23385 10.2548 1.44582 10.167 1.66683 10.167H4.16683V1.83366H1.66683C1.44582 1.83366 1.23385 1.74586 1.07757 1.58958C0.921294 1.4333 0.833496 1.22134 0.833496 1.00033Z"
                                                            fill="#475569"
                                                        />
                                                    </svg>
                                                </button>
                                                <button className="p-1 hover:bg-gray-100 focus:bg-gray-100">
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M5 14.5882H15V16H5V14.5882ZM6.85714 12.6824C7.24571 13.054 7.70773 13.3424 8.21429 13.5294C8.78065 13.7606 9.38721 13.8805 10 13.8824C10.6128 13.8805 11.2193 13.7606 11.7857 13.5294C12.2759 13.3298 12.7192 13.0324 13.0879 12.6559C13.4566 12.2794 13.7427 11.8319 13.9286 11.3412C14.1505 10.8025 14.2715 10.2285 14.2857 9.64706V4H12.7143V9.64706C12.7138 10.0563 12.6413 10.4624 12.5 10.8471C12.3974 11.183 12.2274 11.4951 12 11.7647C11.7599 12.0131 11.4672 12.2059 11.1429 12.3294C10.7806 12.4767 10.3916 12.5488 10 12.5412C9.60839 12.5488 9.21938 12.4767 8.85714 12.3294C8.52587 12.1855 8.23258 11.9681 8 11.6941C7.77097 11.4257 7.60072 11.1132 7.5 10.7765C7.36902 10.4135 7.2967 10.0323 7.28571 9.64706V4H5.71429V9.64706C5.70569 10.2241 5.80247 10.798 6 11.3412C6.18927 11.8418 6.48107 12.2984 6.85714 12.6824Z"
                                                            fill="#475569"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-end ml-2 gap-x-3 lg:ml-auto md:ml-auto">
                                                <svg
                                                    className=" "
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_810_19372)">
                                                        <path
                                                            d="M7.5025 6.875C7.5025 7.37228 7.30496 7.84919 6.95333 8.20083C6.6017 8.55246 6.12478 8.75 5.6275 8.75C5.13022 8.75 4.65331 8.55246 4.30168 8.20083C3.95005 7.84919 3.7525 7.37228 3.7525 6.875C3.7525 6.37772 3.95005 5.90081 4.30168 5.54917C4.65331 5.19754 5.13022 5 5.6275 5C6.12478 5 6.6017 5.19754 6.95333 5.54917C7.30496 5.90081 7.5025 6.37772 7.5025 6.875Z"
                                                            fill="#475569"
                                                        />
                                                        <path
                                                            d="M1.875 2.5C1.37772 2.5 0.900805 2.69754 0.549175 3.04917C0.197544 3.40081 0 3.87772 0 4.375L0 15.625C0 16.1223 0.197544 16.5992 0.549175 16.9508C0.900805 17.3025 1.37772 17.5 1.875 17.5H18.125C18.6223 17.5 19.0992 17.3025 19.4508 16.9508C19.8025 16.5992 20 16.1223 20 15.625V4.375C20 3.87772 19.8025 3.40081 19.4508 3.04917C19.0992 2.69754 18.6223 2.5 18.125 2.5H1.875ZM18.125 3.75C18.2908 3.75 18.4497 3.81585 18.5669 3.93306C18.6842 4.05027 18.75 4.20924 18.75 4.375V11.875L14.0312 9.44125C13.914 9.38253 13.7813 9.36216 13.6519 9.38302C13.5224 9.40388 13.4028 9.46492 13.31 9.5575L8.6725 14.195L5.3475 11.98C5.22745 11.9001 5.08345 11.8641 4.93992 11.8783C4.79639 11.8924 4.66217 11.9557 4.56 12.0575L1.2525 15V15.675C1.25101 15.6584 1.25017 15.6417 1.25 15.625V4.375C1.25 4.20924 1.31585 4.05027 1.43306 3.93306C1.55027 3.81585 1.70924 3.75 1.875 3.75H18.125Z"
                                                            fill="#475569"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_810_19372">
                                                            <rect width={20} height={20} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <textarea
                                            {...register("content")}
                                            className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                                            placeholder="Start typing here ..."
                                            defaultValue={" "}
                                        />
                                    </div>
                                </div>
                                <hr className="h-[1px] bg-gray-100 my-14" />
                                <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                                    <button onClick={() => navigate(-1)} className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full ">
                                        Cancel
                                    </button>
                                    <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form></>
    )
}

export default EditProduct