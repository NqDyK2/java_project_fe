import React from 'react'
import avt from "../../img/avt.jpg"
import grapeTree from "../../img/GrapeTree.png"
import subImg1 from "../../img/subImg1.png";
import subImg2 from "../../img/SubImg2.png";
import subImg3 from "../../img/subImg3.png";
import subImg4 from "../../img/subImg4.png";
import subImg5 from "../../img/subImg5.png";
import shield from "../../img/shield-tick.jpg";
import like from "../../img/like.jpg";
import music from "../../img/music-play.jpg";
import new1 from "../../img/new1.png"
import { IoMdStar } from 'react-icons/io';
import { RiShieldCheckFill, RiShieldCheckLine } from "react-icons/ri";

import Item from '../../components/client/component/Item';

type Props = {}

const Product = (props: Props) => {
  return (
    <>
      <div className='flex mx-auto w-[1440px]'>
        <div>
          <div className='flex gap-10 bg-white rounded-lg mt-5'>
            <div className='ml-2 mt-5'>
              <img src={grapeTree} alt="" width={'100%'} />
              <div className='flex justify-center gap-3 pt-4 pb-2'>
                <img src={subImg1} alt="" />
                <img src={subImg2} alt="" />
                <img src={subImg3} alt="" />
                <img src={subImg4} alt="" />
                <img src={subImg5} alt="" />
              </div>
            </div>
            <div className='text-left mr-8'>
              <div className='text-xl font-semibold mt-5'>
                <h3>Bưởi Da Xanh VietGAP (size 1.2-1.4 kg)</h3>
              </div>

              <div className='my-3'>
                <span>Danh mục:</span>  <span className='text-green-light font-semibold'>Bưởi các loại </span> - <span>Tình trạng:</span>  <span className='text-green-light font-semibold'> Còn hàng</span>
              </div>

              <div>
                <span className='text-red-500 font-semibold text-xl'>30.000đ/kg</span> <del className='text-gray-400 pl-5'>35.000đ/kg</del> <span className='text-white bg-green-light rounded-md p-1 ml-3'>-50%</span>
              </div>

              <div>
                <ul className='list-disc ml-7 my-4 text-sm'>
                  <li><span>Ngày đăng bán: 22/02/2022</span></li>
                  <li><span>Số lượt xem: 368</span></li>
                  <li><span>Đánh giá: ___(0)</span></li>
                </ul>
              </div>

              <div className='text-left'>
                <label htmlFor="" className='mr-3'>Giao hàng từ</label>
                <select name="" id="" className='text-left w-[250px] py-1 px-1 border border-gray-500 rounded-lg'>
                  <option selected className='text-left'>Tất cả (mới nhất) </option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                </select>
              </div>

              <div className='text-center mt-10 bg-green-light py-3 rounded-lg text-white text-xl font-semibold'>
                <button>
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
          <div className='mt-4 bg-white'>
            CONTENT
          </div>
        </div>
        <div className='mt-5 ml-8 w-[32%]'>
          <div className='bg-white rounded-lg'>
            <div className='flex'>
              <div className='ml-4 mt-3 w-[130px]'>
                <img src={`https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/352805846_1708185722961590_7052693284025380994_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHNnHKi0NMRqwbqph2-SLUgIsSNGdAoRvkixI0Z0ChG-au_n9XTgW5SeXOOyZ3NmYFmjxCanBSBezx_rKixSYwM&_nc_ohc=I_cQKhg6JjUQ7kNvgHNd_Ra&_nc_ht=scontent.fhan5-8.fna&oh=00_AYBIQw1vMxtqZRe6jDMURQafIqlfyOKwMstp7hQyMERprA&oe=665E7879`} alt="" width={'100%'} className='rounded-full' />
              </div>
              <div className='ml-4 mt-3 w-full'>
                <div className='text-left pl-2 mb-2'>
                  <h4 className='font-semibold'>Vườn bưởi chị Anh</h4>
                </div>
                <div className='flex text-[#FF9933] my-1 ml-2'>
                  <IoMdStar className='text-xl' />
                  <IoMdStar className='text-xl' />
                  <IoMdStar className='text-xl' />
                  <IoMdStar className='text-xl' />
                  <IoMdStar className='text-xl' />
                </div>
                <div className=' text-left pl-3 mt-2'>
                  <span className='text-gray-500'>Hoạt động 1 giờ trước</span>
                </div>
              </div>
            </div>
            <div className='flex justify-center gap-2 mt-4 pb-4'>
              <div className='border border-gray-400 px-9 py-1 text-sm rounded-md'><button>Theo dõi +</button></div>
              <div className='px-9 py-1 text-sm bg-green-light text-white rounded-md'><button>Xem cửa hàng</button></div>
            </div>
          </div>

          <div className='bg-white rounded-lg mt-3'>
            <div className='flex justify-center gap-3 pt-4'>
              <div className='flex gap-1 bg-green-light text-white p-1 text-sm rounded-lg'>
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
              <div className='font-semibold'><span>Nông trại đối tác Vườn Xanh</span></div>
            </div>
            <div className='mt-4 '>
              <div className='flex justify-center gap-5 -ml-2'>
                <div className='mx-3 text-center'>
                  <div className=''>
                    <img src={shield} alt="" className='pl-10' />
                  </div>
                  <div className='w-fit'>
                    <span>Pháp lý an toàn</span>
                  </div>
                </div>
                <div className=''>
                  <img src={like} alt="" className='pl-16' />
                  <div className='w-fit'>
                    <span>
                      Nông sản thật
                      giá thật
                    </span>
                  </div>
                </div>
                <div className=''>
                  <img src={music} alt="" className='pl-9' />
                  <div className='w-fit'>
                    <span>
                      Hỗ trợ khiếu nại
                    </span>
                  </div>
                </div>
              </div>
              <div className='mt-5 pb-5 text-blue-600 font-semibold'>
                <span>Tìm hiểu thêm</span>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg mt-3 text-left pl-5'>
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

          <div className='rounded-lg mt-3 text-left shadow-lg'>
            <div className='text-white pl-5 py-3 bg-green-light rounded-t-lg'>
              <h3>TIN TỨC MỚI NHẤT</h3>
            </div>
            <div>
              <img src={new1} alt="" width={'100%'} />
            </div>
            <div className='bg-white text-center pt-5 font-semibold text-green-light'>
              <span>Chương trình tuyển đại lý
                giống măng tây giá cả tốt</span>
            </div>
            <div className='bg-white rounded-b-lg text-center py-3 font-semibold'>
              <span>
                Hạt dinh dưỡng các loại lại về
                đầy kho rồi cả nhà nhé! + FREE
                SHIP toàn quốc với đơn hàng ...
              </span>
            </div>
          </div>

          <div className='rounded-lg mt-3 text-left shadow-lg'>
            <div className='text-white pl-5 py-3 bg-green-light rounded-t-lg'>
              <h3>TIN TỨC MỚI NHẤT</h3>
            </div>
            <div>
              <img src={new1} alt="" width={'100%'} />
            </div>
            <div className='bg-white text-center pt-5 font-semibold text-green-light'>
              <span>Chương trình tuyển đại lý
                giống măng tây giá cả tốt</span>
            </div>
            <div className='bg-white rounded-b-lg text-center py-3 font-semibold'>
              <span>
                Hạt dinh dưỡng các loại lại về
                đầy kho rồi cả nhà nhé! + FREE
                SHIP toàn quốc với đơn hàng ...
              </span>
            </div>
          </div>


        </div>
      </div >
      <div className='mx-auto w-[1440px]'>
        <div className='mt-4 bg-white'>
          <div className='pt-4 -mb-8 text-green-light font-semibold text-2xl'><h1>SẢN PHẨM LIÊN QUAN</h1></div>
          <Item mode="detail" />
        </div>
      </div>
    </>
  )
}

export default Product