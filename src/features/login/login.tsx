import React, { useEffect } from 'react'
import Footer from '../../components/client/footer'
import imgLogo from '../../img/logoLogin.png'
import fb from '../../img/fb.png'
import gg from '../../img/gg.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { Resolver, useForm } from 'react-hook-form'
import { callApiLogin } from './Login.action'
import { authenticated } from '../../utils/Authenticate'
import { toast } from 'react-toastify'

type Props = {}
type FormValues = {
    username: string
    password: string
}
const Login = (props: Props) => {
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
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver })
    const { result, loadling, error } = useAppSelector((state: any) => state.login)

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onSubmit = (data: any) => {
        dispatch(callApiLogin(data));
    };

    useEffect(() => {
        if (result && result.result && result.token) {
            authenticated(result.result, result.token,() => {
                navigate("/");
                toast.success(`Chào mừng ${result.fullName ? result.fullName : "người dùng"} trở lại.`)
            });
        }
    }, [result]);

    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <header>
                    <div className=''>
                        <div className='w-[1440px] flex gap-5 mx-auto text-white py-4'>
                            <div className='w-fit'><img src={imgLogo} alt="" className='' width={240} /></div>
                        </div>
                    </div>
                </header>

                <div className="bg-gradient-to-b from-[#ABDF8A] to-white pt-10 pb-40 flex-grow flex items-center justify-center">
                    <div className='w-[1288px] mx-auto flex justify-between bg-white gap-5 rounded-xl'>
                        <div className='m-auto w-[35%]'>
                            <div className='text-xl font-semibold mb-8 mt-10'>
                                <h3>CHÀO MỪNG QUAY TRỞ LẠI</h3>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-5">
                                        <input {...register("username", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="SDT/Email" />
                                        {errors.username && <p className='text-left text-red-500'>Bạn cần kiểm tra lại tài khoản</p>}
                                    </div>
                                    <div className="mb-5">
                                        <input {...register("password", { required: true })} type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Mật khẩu" />
                                        {errors.password && <p className='text-left text-red-500'>Bạn cần kiểm tra lại mật khẩu</p>}
                                    </div>
                                    <div className='bg-[#AAD490] text-white p-2.5 rounded-lg'>
                                        <button className='w-full'>Đăng nhập</button>
                                    </div>
                                </form>
                                <div className='flex justify-between mt-7'>
                                    <div>
                                        <div className='flex items-center gap-2 pb-1 pt-3'>
                                            <input type="checkbox" name="" id="" className='w-5 h-5 text-gray-400' />
                                            <label className='text-gray-500'>Ghi nhớ đăng nhập</label>
                                        </div>
                                    </div>
                                    <div className='items-center gap-2 pb-1 pt-3 text-gray-500'>
                                        <span>Quên mật khẩu ?</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mt-5">
                                <hr className="flex-grow border-t border-gray-300" />
                                <span className="px-4 text-lg font-semibold">HOẶC</span>
                                <hr className="flex-grow border-t border-gray-300" />
                            </div>
                            <div className='flex justify-center gap-5 mt-7'>
                                <div className='border border-gray-400 py-1 px-9 rounded-lg'>
                                    <button>
                                        <div className='flex gap-5 my-auto'>
                                            <div className='pt-1.5'>
                                                <img src={fb} alt="" width={'25px'} height={'25px'} />
                                            </div>
                                            <div className='text-xl pt-1'>
                                                <span> Facebook</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className='border border-gray-400 py-1 px-12 rounded-lg'>
                                    <button>
                                        <div className='flex gap-5 my-auto'>
                                            <div className='pt-1.5'>
                                                <img src={gg} alt="" width={'25px'} height={'25px'} />
                                            </div>
                                            <div className='text-xl pt-1'>
                                                <span> Google</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='my-10'>
                                <span>Bạn chưa có tài khoản ?</span>
                                <Link to={"/register"}>
                                    <span className='text-green-light font-semibold underline pl-2 cursor-pointer hover:text-orange-300'>Đăng ký</span>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img className=' rounded-r-[400px]  rounded-l-full w-[610px] h-full' src="https://doanhnghiepkinhtexanh.vn/uploads/images/2022/09/26/a1-1664182170.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Login