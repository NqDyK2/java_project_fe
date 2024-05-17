import React from 'react'
import imgLogo from "../../logoWhite.png"

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <div className='bg-green-light'>
                <div className='w-[1440px] flex gap-5 mx-auto text-white py-4'>
                    <div className='w-fit'><img src={imgLogo} alt="" className='' width={240} /></div>
                    {/* <div className='my-auto w-5/12'>
                        <form className='w-full'>
                            <input type="email" placeholder='Email kết nối....' required className='text-black w-10/12 py-2 px-3 mr-3 rounded-lg'/>
                            <input type="submit" value="Gửi" className="text-white font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" />
                        </form>
                    </div> */}
                    <div className='my-auto text-center mx-auto'><span>2024. All Rights Reserved</span></div>
                </div>
            </div>
        </>
    )
}

export default Footer