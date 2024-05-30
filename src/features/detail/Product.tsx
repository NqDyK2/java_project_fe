import React from 'react'
import grapeTree from "../../img/GrapeTree.png"
import subImg1 from "../../img/subImg1.png";
import subImg2 from "../../img/SubImg2.png";
import subImg3 from "../../img/subImg3.png";
import subImg4 from "../../img/subImg4.png";
import subImg5 from "../../img/subImg5.png";

type Props = {}

const Product = (props: Props) => {
  return (
    <>
      <div className='flex mx-auto w-[1440px]'>
        <div>
          <div className='flex gap-10 bg-white'>
            <div>
              <img src={grapeTree} alt="" width={'100%'}/>
              <div className='flex justify-center gap-3 pt-3 pb-2'>
                <img src={subImg1} alt="" />
                <img src={subImg2} alt="" />
                <img src={subImg3} alt="" />
                <img src={subImg4} alt="" />
                <img src={subImg5} alt="" />
              </div>
            </div>
            <div className='text-left'>
              <div>
                <h3>Bưởi Da Xanh VietGAP (size 1.2-1.4 kg)</h3>
              </div>

              <div>
                <span>Danh mục:</span>  <span>Bưởi các loại </span> - <span>Tình trạng:</span>  <span> Còn hàng</span>
              </div>

              <div>
                <span>30.000đ/kg</span> <del>35.000đ/kg</del> <span>-50%</span>
              </div>

              <div>
                <ul>
                  <li><span>Ngày đăng bán: 22/02/2022</span></li>
                  <li><span>Số lượt xem: 368</span></li>
                  <li><span>Đánh giá: ___(0)</span></li>
                </ul>
              </div>

              <div className='text-left'>
                <label htmlFor="" className='mr-3'>Giao hàng từ</label>
                <select name="" id="" className='text-left w-[250px] py-1 px-1 border border-gray-500 rounded-sm'>
                  <option selected className='text-left'>Tất cả (mới nhất) </option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                </select>
              </div>

              <div>
                <button>
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            !!!!!
          </div>
        </div>
      </div >
    </>
  )
}

export default Product