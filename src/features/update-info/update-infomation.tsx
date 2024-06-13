import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiEditUser, apiGetUser } from "../admin/user/edit-user/editUser.action";
import { toast } from "react-toastify";

type FormValues = {
    // id: any,
    fullName: string
    email: string
    address: string
    phone: string
}

const UpdateUser = () => {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<FormValues>()
    const { result, loadling, error } = useAppSelector((state: any) => state.editUser)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        if (id) {
            dispatch(apiGetUser(Number(id)));
        }
    }, [dispatch, id]);
    if (result) {
        // setValue("id", result.result?.id)
        setValue("fullName", result.result?.fullName ? result.result?.fullName : "Bổ sung thông tin")
        setValue("email", result.result?.email ? result.result?.email : "Bổ sung thông tin")
        setValue("address", result.result?.address ? result.result?.address : "Bổ sung thông tin")
        setValue("phone", result.result?.phone ? result.result?.phone : "Bổ sung thông tin")
    }
    const onSubmit = ((data: any) => {
        dispatch(apiEditUser({ id, data: data }))
            .unwrap()
            .then(() => {
                toast.success("Sửa người dùng thành công")
                navigate("/admin/users")
            })
            .catch((error) => {
                console.error('Failed to update product:', error);
            });
    })

    return (
        <>
            <div className="h-[750px]">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="bg-white w-[1440px] mx-auto mt-5 rounded-xl">
                        <div className="container mx-auto bg-white rounded p-5">
                            <div className="xl:w-full border-b border-gray-300 py-5 bg-white">
                                <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                    <p className="text-lg text-gray-800 font-bold">Profile</p>
                                    <div className="ml-2 cursor-pointer text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto">
                                <div className="xl:w-full w-11/12 mx-auto xl:mx-0">
                                    <div className="rounded relative mt-8 h-48">
                                        <img src="https://t3.ftcdn.net/jpg/01/63/13/30/240_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg" className="w-full h-full object-cover rounded absolute shadow" />
                                        <div className="absolute bg-black opacity-25 top-0 right-0 bottom-0 left-0 rounded" />
                                        <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                                            <p className="text-xs text-gray-100">Change Cover Photo</p>
                                            <div className="ml-2 text-gray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                    <line x1={16} y1={5} x2={19} y2={8} />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                                            <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
                                            <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                                            <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                    <line x1={16} y1={5} x2={19} y2={8} />
                                                </svg>
                                                <p className="text-xs text-gray-100">Thay đổi Avt</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto bg-white mt-10 rounded px-4">
                            <div className="xl:w-full border-b border-gray-300 py-5">
                                <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                    <p className="text-lg text-gray-800 font-bold">Thông tin cá nhân</p>
                                    <div className="ml-2 cursor-pointer text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto pt-4">
                                <div className="mx-auto flex justify-around gap-10">
                                    <div className="w-full">
                                        <div className="flex flex-col mb-6">
                                            <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800">
                                                Họ và tên
                                            </label>
                                            <input {...register("fullName")} type="text" id="FirstName" name="firstName" required className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500" />
                                        </div>
                                        <div className="flex flex-col mb-6">
                                            <label htmlFor="Email" className="pb-2 text-sm font-bold text-gray-800">
                                                Email
                                            </label>
                                            <div className="border border-gray-300 shadow-sm rounded flex">
                                                <div className="px-4 py-3 flex items-center border border-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <rect x={3} y={5} width={18} height={14} rx={2} />
                                                        <polyline points="3 7 12 13 21 7" />
                                                    </svg>
                                                </div>
                                                <input {...register("email")} type="text" id="Email" name="email" required className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500" placeholder="example@gmail.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex flex-col mb-6">
                                            <label htmlFor="State/Province" className="pb-2 text-sm font-bold text-gray-800">
                                                Địa chỉ
                                            </label>
                                            <input {...register("address")} type="text" id="State/Province" name="state" required className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500" placeholder="California" />
                                        </div>
                                        <div className="flex flex-col mb-6">
                                            <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800">
                                                Số điện thoại
                                            </label>
                                            <input {...register("phone")} type="text" id="Country" name="country" required className="border bg-transparent border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500" placeholder="United States" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto w-11/12 xl:w-full px-5 mb-5 rounded-xl">
                            <div className="w-full py-4 sm:px-0 bg-white flex justify-end">
                                <button onClick={() => navigate(-1)} type="button" className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 rounded text-indigo-600 px-6 py-2 text-xs mr-4">
                                    Hủy
                                </button>
                                <button type="submit" className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm">
                                    Lưu
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
export default UpdateUser;
