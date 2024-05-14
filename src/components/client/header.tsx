import React from 'react'
import { PiInstagramLogoFill } from "react-icons/pi";


type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <div className='bg-main-color'>
                <div className='w-[1440px]'>
                    <div className='grid grid-cols-2 text-white h-10'>
                        <div className='my-auto'>
                            <span>Kênh người bán</span> |
                            <span> Kết nối <PiInstagramLogoFill className='inline-block text-lg mb-1 ml-2'/></span>
                        </div>
                        <div className='my-auto'>
                            <p>Hello!!</p>
                        </div>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Header