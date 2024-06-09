import React from 'react'
import imgFarm1 from "../../img/farm1.png"
import imgFarm2 from "../../img/farm2.png"
import imgFarm3 from "../../img/farm3.png"
import { RiShieldCheckFill } from 'react-icons/ri'
type Props = {}

const DetailSeller = (props: Props) => {
  return (
    <>
      <div className='w-[1440px] mx-auto'>
        <div className='flex gap-5 mt-4 mb-4'>
          <div className='w-[30%] bg-white'>
            <div className="mx-auto">
              <div className="xl:w-full w-11/12 mx-auto xl:mx-0">
                <div className="rounded relative h-48">
                  <img src="https://t3.ftcdn.net/jpg/01/63/13/30/240_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg" className="w-full h-full object-cover rounded absolute shadow" />
                  <div className="absolute bg-black opacity-15 top-0 right-0 bottom-0 left-0 rounded" />
                  <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-5 shadow flex items-center justify-center border-2 border-white">
                    <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
                    <div className="absolute top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                  </div>
                </div>
                <div className='flex gap-1 bg-green-light p-1 text-sm rounded-lg w-20 z-10'>
                  <div className='my-auto text-lg'>
                    <span>
                      <RiShieldCheckFill />
                    </span>
                  </div>
                  <div>
                    <span>
                      Đối tác
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[70%]'>
            <nav className='flex justify-around bg-white'>
              <div className='p-5 font-semibold'>
                <button>
                  SẢN PHẨM
                </button>
              </div>
              <div className='p-5 font-semibold text-green-light border-t-2 border-t-green-light'>
                <button>
                  GIỚI THIỆU
                </button>
              </div>
              <div className='p-5 font-semibold'>
                <button>
                  LIÊN HỆ
                </button>
              </div>
              <div className='p-5 font-semibold'>
                <button>
                  ĐÁNH GIÁ
                </button>
              </div>
              <div className='p-5 font-semibold'>
                <button>
                  TIN TỨC
                </button>
              </div>
            </nav>
            <section className='bg-white mt-3 pb-5 mb-4'>
              <div className='text-left ml-5 py-5 font-semibold'>
                <span>Ảnh trang trại</span>
              </div>
              <div className='flex justify-center px-3 my-3'>
                <div className='w-full px-1'>
                  <img src={imgFarm1} alt="" width={'100%'} />
                </div>
                <div className='w-full px-1'>
                  <img src={imgFarm2} alt="" width={'100%'} />
                </div>
                <div className='w-full px-1'>
                  <img src={imgFarm3} alt="" width={'100%'} />
                </div>
              </div>
              <div className='flex justify-center px-3 my-3'>
                <div className='w-full px-1'>
                  <img src={imgFarm1} alt="" width={'100%'} />
                </div>
                <div className='w-full px-1'>
                  <img src={imgFarm2} alt="" width={'100%'} />
                </div>
                <div className='w-full px-1'>
                  <img src={imgFarm3} alt="" width={'100%'} />
                </div>
              </div>
              <div className='flex justify-center px-3 my-3'>
                <div className='w-full px-1'>
                  <img src={imgFarm1} alt="" width={'100%'} />
                </div>
                <div className='w-full px-1'>
                  <img src={imgFarm2} alt="" width={'100%'} />
                </div>
                <div className='w-full px-1'>
                  <img src={imgFarm3} alt="" width={'100%'} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailSeller