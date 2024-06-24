import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { useNavigate, useParams } from 'react-router-dom';
import { apiEditCategory, getDetailCateById } from './manage-farm.action';
import { toast } from 'react-toastify';

type Props = {}
type FormCategoryValue = {
    name: string
}
const EditCategory = (props: Props) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormCategoryValue>()
    const { result, loading, error } = useAppSelector((state: any) => state.category)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        dispatch(getDetailCateById(Number(id)));
    }, [dispatch, id]);

    if (result) {
        setValue("name", result.result?.name ? result.result?.name : "Chưa có thông tin")
    }
    
    const onSubmit: SubmitHandler<FormCategoryValue> = (data) => {
        dispatch(apiEditCategory({ id, data: data }))
            .unwrap()
            .then(() => {
                toast.success("Bạn đã cập nhật loại quả này")
                navigate("/all-cate")
            })
            .catch((error) => {
                console.error('Failed to update product:', error);
            });
    };
    return (
        <div> <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-2 flex flex-col h-[770px]">
                <div className="flex flex-no-wrap items-start w-[1440px] mx-auto my-auto">
                    <div className="w-full ">
                        <div className="py-4 px-2">
                            <div className="bg-white rounded shadow py-7">
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
                                        Cập nhật loại quả
                                    </p>
                                    <div className="gap-7 mt-7 ">
                                        <div className="text-left">
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Tên loại :
                                            </p>
                                            <input {...register("name")} className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="h-[1px] bg-gray-100 my-14" />
                                <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                                    <button type="button" onClick={() => navigate(-1)} className="bg-white border-green-light rounded-lg hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-green-light border lg:max-w-[95px]  w-full ">
                                        Hủy
                                    </button>
                                    <button type="submit" className="bg-green-light hover:bg-green-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full rounded-lg">
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </form></div>
    )
}

export default EditCategory