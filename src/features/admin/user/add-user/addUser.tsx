import React, { useEffect } from 'react'
import { apiAddUser } from './addUser.action';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import { toast } from 'react-toastify';
import { Resolver, useForm } from 'react-hook-form';

type Props = {}
type FormValues = {
  fullName: string
  email: string
  password: string
  address: string
  username: string
  phone: string
}
const AddUser = (props: Props) => {
  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.username ? values : {},
      errors: !values.username ? {
        username: {
          type: "required",
          message: "Bạn cần nhập trường này."
        },
        password: {
          type: "required",
          message: "Bạn cần nhập trường này."
        },
      } : {

      }
    }
  }
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ resolver })
  const { result, loadling, error } = useAppSelector((state: any) => state.addUser)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = ((data: any) => {
    dispatch(apiAddUser(data))
    reset()
  })
  if (result?.message) {
    toast.success("Thêm người dùng thành công")
    navigate("/admin/users")
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center" >
          <div className="xl:w-10/12 w-full px-8">
            <div className="xl:px-24">
              <div className="px-5 py-4 bg-gray-100 rounded-lg mt-7">
                <div className="text-center">
                  <p className="text-gray-800 font-semibold text-xl">THÊM NGƯỜI DÙNG - NHÀ VƯỜN SẢN XUẤT - NHÀ THẦU</p>
                </div>
              </div>
              <div className='bg-gray-100 p-5 mt-5 rounded-xl'>
                <div className="mt-16 lg:flex justify-between">
                  <div className="w-80">
                    <div className="flex items-center">
                      <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Personal Information</h1>
                    </div>
                    <p className="mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                  </div>
                  <div>
                    <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div className="md:w-64 text-left">
                        <label className="text-sm leading-none text-gray-800" id="firstName" >Họ và tên</label>
                        <input type="name" {...register("fullName")} tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="John" />
                      </div>
                      <div className="md:w-64 md:ml-12 md:mt-0 mt-4 text-left">
                        <label className="text-sm leading-none text-gray-800" id="lastName">Địa chỉ</label>
                        <input type="name" {...register("address")} tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="md:flex items-center lg:ml-24 mt-8">
                      <div className="md:w-64 text-left">
                        <label className="text-sm leading-none text-gray-800" id="emailAddress">Địa chỉ E-mail</label>
                        <input type="email" {...register("email")} tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
                      </div>
                      <div className="md:w-64 md:ml-12 md:mt-0 mt-4 text-left">
                        <label className="text-sm leading-none text-gray-800" id="phone" >Số điện thoại</label>
                        <input type="name" {...register("phone")} tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="0373997970" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 lg:flex justify-between">
                  <div className="w-80">
                    <div className="flex items-center">
                      <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Security</h1>
                    </div>
                    <p className="mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                  </div>
                  <div>
                    <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div className="md:w-64 text-left">
                        <label className="text-sm leading-none text-gray-800" id="password">Tài khoản</label>
                        <input type="name" {...register("username", { required: true, pattern: /^\S+@\S+$/i })} tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="password" placeholder="Enter your password" />
                      </div>
                      <div className="md:w-64 md:ml-12 md:mt-0 mt-4 text-left">
                        <label className="text-sm leading-none text-gray-800" id="securityCode">Role - Vai trò</label>
                        <input type="name" tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-300 cursor-not-allowed	" aria-labelledby="securityCode" value={"Nhà thầu"} disabled />
                      </div>
                    </div>
                    <div className="md:flex items-center lg:ml-24 mt-8 text-left">
                      <div className="md:w-64">
                        <label className="text-sm leading-none text-gray-800" id="recoverEmail">Mật khẩu</label>
                        <input {...register("password")} type="password" tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="recoveryEmail" placeholder="Your recovery email" />
                      </div>
                      {/* <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label className="text-sm leading-none text-gray-800" id="altPhone">Alternate phone number</label>
                    <input type="name" tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="altPhone" placeholder="Your alternate phone number" />
                  </div> */}
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
                  Thêm người dùng
                </button>
              </div>
            </div>
          </div>
        </div>

      </form >
    </>
  )
}

export default AddUser