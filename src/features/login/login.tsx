import React from 'react'
import Footer from '../../components/client/footer'
import imgLogo from '../../img/logoLogin.png'
import fb from '../../img/fb.png'
import gg from '../../img/gg.png'

type Props = {}
const Login = (props: Props) => {
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
                                <form action="">
                                    <div className="mb-5">
                                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="SDT/Email" required />
                                    </div>
                                    <div className="mb-5">
                                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder="Mật khẩu" required />
                                    </div>
                                    <div className='bg-[#AAD490] text-white p-2.5 rounded-lg'>
                                        <button>Đăng nhập</button>
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
                                <span>Bạn chưa có tài khoản ?</span><span className='text-green-light font-semibold underline pl-2 cursor-pointer hover:text-orange-300'>Đăng ký</span>
                            </div>
                        </div>
                        <div>
                            <img className=' rounded-r-[400px]  rounded-l-full w-[610px] h-full' src="https://s3-alpha-sig.figma.com/img/b11e/285c/48e1ebf2a17b48edab282ee42752f29b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y~PjmnWlWrzexH5FZEFi1WNde-8Nlt9mU59X8pLhZ~r4HYE3eDIY6QciLKwbmOP~h4vB6ONXkH8X71RB-J5KCEU6GEFeKVSlE8hOVo6t1aW51jNk2wHfhw-j0kC4Ta5Somilzji2EyeEFmP6T2WAYj2EsHbMOwUdrTfy-qMLJernjcYviHcUBtiuGKmDZQgo5pG5yq6kpKJa-cqzFKjzmIvXnvR7e1WQK7CyqaGmG-dhJuWXuCDTVHfmphLwxMhJPqqntA0wXd9yTrI6i9Ryj~hBWlMrN6T4Slb2yAnT1UzwrI52~rDa1M9Av78QC-pd~szm~Vas3Helj4wPviYUDA__" alt="" />
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