import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore'
import { useNavigate, useParams } from 'react-router-dom'
import { apiAddUser } from '../add-user/addUser.action'
import { toast } from 'react-toastify'
import { Resolver, useForm } from 'react-hook-form'
import { apiEditUser, apiGetUser } from './editUser.action'

type Props = {}
type FormValues = {
    // id: any,
    fullName: string
    email: string
    address: string
    phone: string
}
const EditUser = (props: Props) => {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<FormValues>()
    const { result, loadling, error, mode } = useAppSelector((state: any) => state.editUser)
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
        setValue("fullName", result.result?.fullName ? result.result?.fullName : null)
        setValue("email", result.result?.email ? result.result?.email : null)
        setValue("address", result.result?.address ? result.result?.address : null)
        setValue("phone", result.result?.phone ? result.result?.phone : null)
    }
    const onSubmit = ((data: any) => {
        if(data.fullName == "" || data.fullName == result.result?.fullName) {
            data.fullName = null;
        }
        if(data.email == "" || data.email == result.result?.email) {
            data.email = null;
        }
        if(data.address == "" || data.address == result.result?.address) {
            data.address = null;
        }
        if(data.phone == "" || data.phone == result.result?.phone) {
            data.phone = null;
        }
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-center" >
                <div className="xl:w-10/12 w-full px-8">
                    <div className="xl:px-24">
                        <div className="px-5 py-4 bg-gray-100 rounded-lg mt-7">
                            <div className="text-center">
                                <p className="text-gray-800 font-semibold text-xl">SỬA THÔNG TIN NGƯỜI DÙNG - NHÀ VƯỜN SẢN XUẤT - NHÀ THẦU</p>
                            </div>
                        </div>
                        <div className='bg-gray-100 p-5 mt-5 rounded-xl'>
                            <div className="mt-16 lg:flex justify-center">
                                {/* <div className="w-80">
                                    <div className="flex items-center">
                                        <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Personal Information</h1>
                                    </div>
                                    <p className="mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                                </div> */}
                                <div>
                                    <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                        <div className="md:w-64 text-left">
                                            {/* <input type="hidden" {...register("id")} tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="John" /> */}
                                            <label className="text-sm leading-none text-gray-800" id="firstName" >Họ và tên</label>
                                            <input type="name" {...register("fullName")} tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="John" />
                                        </div>
                                        <div className="md:w-64 text-left md:ml-12 md:mt-0 mt-4">
                                            <label className="text-sm leading-none text-gray-800" id="lastName">Địa chỉ</label>
                                            <input type="name" {...register("address")} tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="md:flex items-center lg:ml-24 mt-8">
                                        <div className="md:w-64 text-left">
                                            <label className="text-sm leading-none text-gray-800" id="emailAddress">Địa chỉ E-mail</label>
                                            <input type="email" {...register("email")} tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
                                        </div>
                                        <div className="md:w-64 text-left md:ml-12 md:mt-0 mt-4">
                                            <label className="text-sm leading-none text-gray-800" id="phone" >Số điện thoại</label>
                                            <input type="name" {...register("phone")} tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="0373997970" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full px-8 mx-auto">
                <div className="xl:px-24">
                    <div className="px-5 py-4 rounded-lg mt-7">
                        <div className="text-center">
                            <button className=' xl:w-10/12 w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                                Sửa người dùng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form >
    )
}

export default EditUser