import React from 'react'
import imgFarm1 from "../../img/farm1.png"
import imgFarm2 from "../../img/farm2.png"
import imgFarm3 from "../../img/farm3.png"
import shield from "../../img/shield-tick.jpg";
import like from "../../img/like.jpg";
import music from "../../img/music-play.jpg";
import { RiShieldCheckFill, RiShieldCheckLine } from 'react-icons/ri'
import { IoMdStar } from 'react-icons/io'
import { HiOutlineLocationMarker } from 'react-icons/hi'
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
                  <div className="w-24 h-24 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-5 shadow flex items-center justify-center border-2 border-white">
                    <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
                    <div className="absolute top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                  </div>
                </div>
                <div className='text-right mr-5 border w-fit text-sm float-right py-1 px-5 mt-3 rounded-lg'>
                  <button>Theo dõi +</button>
                </div>
                <div className='flex gap-1 bg-green-light p-1 absolute text-sm rounded-lg w-20 z-10 mt-5 ml-7 text-white'>
                  <div className='my-auto text-lg'>
                    <span>
                      <RiShieldCheckFill />
                    </span>
                  </div>
                  <div className='font-semibold'>
                    <span>
                      Đối tác
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute mt-14 ml-6 font-semibold text-base'>
              <h3>VƯỜN BƯỞI CHỊ ANH</h3>
            </div>
            <div className='absolute mt-[85px] flex ml-6'>
              <div>
                <span>5.0</span>
              </div>
              <div className='flex justify-center text-[#FF9933] px-3 my-1'>
                <IoMdStar className='text-lg' />
                <IoMdStar className='text-lg' />
                <IoMdStar className='text-lg' />
                <IoMdStar className='text-lg' />
                <IoMdStar className='text-lg' />
              </div>
              <div className='text-blue-500'>
                <span>
                  (25) nhận xét
                </span>
              </div>
            </div>
            <div className='flex gap-1 text-sm text-gray-600 rounded-lg py-2 mt-28 ml-5 font-semibold'>
              <div className='my-auto text-lg'>
                <span>
                  <HiOutlineLocationMarker />
                </span>
              </div>
              <div>
                <span>
                  Bố Hạ, Yên Thế, Bắc Giang
                </span>
              </div>
            </div>
            <div className='bg-green-light mx-5 py-2 rounded-md text-white mt-2'>
              <button>LIÊN HỆ</button>
            </div>
            <div className='mt-5 border border-gray-300 rounded-lg mx-5'>
              <div className='font-semibold text-left ml-5 mt-3'><span>Nông trại đối tác Vườn Xanh</span></div>
              <div className='flex justify-center gap-2 -ml-2 mt-7'>
                <div className='mx-3 text-center'>
                  <div className=''>
                    <img src={shield} alt="" className='pl-7' />
                  </div>
                  <div className='w-fit text-base'>
                    <span>Pháp lý an toàn</span>
                  </div>
                </div>
                <div className=''>
                  <img src={like} alt="" className='pl-14' />
                  <div className='w-fit text-base'>
                    <span>
                      Nông sản thật
                      giá thật
                    </span>
                  </div>
                </div>
                <div className=''>
                  <img src={music} alt="" className='pl-8' />
                  <div className='w-fit text-base'>
                    <span>
                      Hỗ trợ khiếu nại
                    </span>
                  </div>
                </div>
              </div>
              <div className='mt-5 mb-7 text-blue-500'>
                <span>
                  Tìm hiểu thêm
                </span>
              </div>
            </div>
            <div className='bg-white rounded-lg mt-3 border border-gray-300 mx-5 py-3 text-left pl-5'>
              <div className='font-semibold'>
                <span>Chính sách và ưu đãi nổi bật</span>
              </div>
              <div className=''>
                <div className='py-1'>
                  <div className='flex gap-3 p-1 text-sm rounded-lg'>
                    <div className='my-auto text-2xl text-green-light'>
                      <span>
                        <RiShieldCheckLine />
                      </span>
                    </div>
                    <div>
                      <span>
                        Bao kiểm tra hàng
                      </span>
                    </div>
                  </div>
                </div>
                <div className='py-1'>
                  <div className='flex gap-3 p-1 text-sm rounded-lg'>
                    <div className='my-auto text-2xl text-green-light'>
                      <span>
                        <RiShieldCheckLine />
                      </span>
                    </div>
                    <div>
                      <span>
                        Hỗ trợ giao hàng
                      </span>
                    </div>
                  </div>
                </div>
                <div className='py-1'>
                  <div className='flex gap-3 p-1 text-sm rounded-lg'>
                    <div className='my-auto text-2xl text-green-light'>
                      <span>
                        <RiShieldCheckLine />
                      </span>
                    </div>
                    <div>
                      <span>
                        Bao kiểm tra hàng
                      </span>
                    </div>
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