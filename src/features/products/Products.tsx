import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {}

const Products = (props: Props) => {
    return (
        <>
            <div className='flex justify-center gap-5 mx-auto'>
                <div >
                    <div className='bg-white'>
                        <div>
                            <span className='px-2'><RxHamburgerMenu className='inline-block text-lg mb-1 mr-2' />Tất cả danh mục</span>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div>Hi chào cậu!!</div>
                </div>
            </div>
        </>
    )
}

export default Products