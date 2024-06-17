import React, { useEffect, useState } from 'react'
import imgFarm1 from "../../img/farm1.png"
import imgFarm2 from "../../img/farm2.png"
import imgFarm3 from "../../img/farm3.png"
import shield from "../../img/shield-tick.jpg";
import like from "../../img/like.jpg";
import music from "../../img/music-play.jpg";
import { RiShieldCheckFill, RiShieldCheckLine } from 'react-icons/ri'
import { IoMdStar } from 'react-icons/io'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { apiGetAllProductsOfUser } from './seller.action';
import { apiGetUser } from '../admin/user/edit-user/editUser.action';
type Props = {}

const DetailSeller = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const [modeProducts, setModeProducts] = useState(true)
  const sellerDetail = useAppSelector((state: any) => state.seller)
  const [page, setPage] = useState(1)
  const { result, loadling, error } = useAppSelector((state: any) => state.editUser)
  const changeModeIntroduce = () => {
    setModeProducts(false)
  }

  const changeModeProducts = () => {
    setModeProducts(true)
  }

  useEffect(() => {
    dispatch(apiGetAllProductsOfUser({ id: Number(id), page: page, size: 6 }));
    dispatch(apiGetUser(Number(id)));
  }, [dispatch, id, page]);


  const groupedArray = [];
  const listProducts = sellerDetail.result?.result?.productList

  for (let i = 0; i < listProducts?.length; i += 3) {
    groupedArray.push(listProducts?.slice(i, i + 3));
  }

  const onChangePage = (index: any) => {
    setPage(index);
  }

  const formatPrice = (price: any) => {
    const priceStr = price.toString();
    const lastThreeDigits = priceStr.slice(-3); // lấy 3 số cuối
    const restOfNumber = priceStr.slice(0, -3); // lấy phần còn lại của số

    if (restOfNumber) {
      return `${restOfNumber}.${lastThreeDigits}`;
    }
    return lastThreeDigits;
  };
  console.log("sellerDetail:", sellerDetail);
  
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
                    <img src={result.result?.avatar ? result.result?.avatar : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"} className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
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
              <h3>Vườn nhà {result.result?.fullName}</h3>
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
                  {result.result?.address}
                </span>
              </div>
            </div>
            <div className='bg-green-light mx-5 py-2 rounded-md text-white mt-2'>
              <button>LIÊN HỆ: {result.result?.phone}</button>
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
              <div onClick={() => changeModeProducts()} className={`p-5 font-semibold ${modeProducts ? "text-green-light border-t-2 border-t-green-light" : ""}`}>
                <button>
                  SẢN PHẨM
                </button>
              </div>
              <div onClick={() => changeModeIntroduce()} className={`p-5 font-semibold ${modeProducts == false ? "text-green-light border-t-2 border-t-green-light" : ""}`}>
                <button>
                  GIỚI THIỆU
                </button>
              </div>
            </nav>
            <section className='bg-white mt-3 pb-5 mb-4'>
              <div className='text-left ml-5 py-5 font-semibold'>
                <span>Ảnh trang trại</span>
              </div>
              {
                modeProducts ?
                  <>
                    {groupedArray.map((block: any, index) => (
                      <div key={index} className={`flex ${block?.length == 3 ? "justify-evenly" : "ml-5"} pb-5`}>
                        {block.map((item: any) => (
                          <div key={item.id} className={`bg-white rounded-lg w-[280px] ${block?.length == 3 ? "" : "mx-5"} shadow-lg pt-3 `}>
                            <div>
                              <img src={item?.image ? item?.image : `https://bizweb.dktcdn.net/100/396/015/articles/e529a8dc22bd84a37f6f8ae6b8ce40d3.jpg?v=1679472706363`} alt="" className='rounded-t-lg w-[280px] h-[255px]' />
                            </div>
                            <div title={item?.title} className='my-2 font-semibold text-xl truncate'>
                              <span>
                                {item?.title}
                              </span>
                            </div>
                            <div className='flex justify-center gap-5 pb-2'>
                              <span className='text-green-light text-xl font-semibold text-right  w-fit'>
                                {formatPrice(item.price)} đ/{item.unit}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                    <div className='flex justify-center'>
                      {
                        [...Array(sellerDetail.result.result?.totalPage).keys()].map((item, index) => (
                          <div key={index} onClick={() => onChangePage(item + 1)} className={`${item + 1 == sellerDetail.result.result?.pageNumber ? 'px-2 bg-green-light text-white rounded-sm' : 'border border-gray-400 px-2 rounded-sm cursor-pointer'} border border-gray-400 px-2 rounded-sm w-8 mx-2`}><span>{item + 1}</span></div>
                        ))
                      }
                    </div>
                  </>
                  // {
                  //     [...Array(result.result?.totalPage).keys()].map((item, index) => (
                  // <div key={index} onClick={() => onChangePage(item + 1)} className={`${item + 1 == result.result?.pageNumber ? 'px-2 bg-green-light text-white rounded-sm' : 'border border-gray-400 px-2 rounded-sm cursor-pointer'} border border-gray-400 px-2 rounded-sm`}><span>{item + 1}</span></div>
                  // ))
                  // }
                  : <><div className='flex justify-center px-3 my-3'>
                    <div className='w-full px-1'>
                      <img src={`https://danviet.mediacdn.vn/296231569849192448/2021/11/18/image001-1637230850716366821507.jpg`} alt="" className='w-[315px] h-[236px] rounded-xl' />
                    </div>
                    <div className='w-full px-1'>
                      <img src={imgFarm2} alt="" width={'100%'} className='w-[315px] h-[236px] rounded-xl' />
                    </div>
                    <div className='w-full px-1'>
                      <img src={`https://png.pngtree.com/thumb_back/fw800/background/20230804/pngtree-trees-full-of-apples-in-an-orchard-image_12998684.jpg`} alt="" width={'100%'} className='w-[315px] h-[236px] rounded-xl' />
                    </div>
                  </div>
                    <div className='flex justify-center px-3 my-3'>
                      <div className='w-full px-1'>
                        <img src={imgFarm1} alt="" width={'100%'} className='w-[315px] h-[236px] rounded-xl' />
                      </div>
                      <div className='w-full px-1'>
                        <img src={`https://danviet.mediacdn.vn/296231569849192448/2021/11/18/image003-16372308507731681618491.jpg`} alt="" width={'100%'} className='w-[315px] h-[236px] rounded-xl' />
                      </div>
                      <div className='w-full px-1'>
                        <img src={imgFarm3} alt="" width={'100%'} className='w-[315px] h-[236px] rounded-xl' />
                      </div>
                    </div>
                    <div className='flex justify-center px-3 my-3'>
                      <div className='w-full px-1'>
                        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpMs7xSfE-vTiuM1Uej5G_muqQGb5s0CThg&s`} alt="" width={'100%'} className='w-[315px] h-[236px] rounded-xl' />
                      </div>
                      <div className='w-full px-1'>
                        <img src={imgFarm2} alt="" width={'100%'} className='w-[315px] h-[236px] rounded-xl' />
                      </div>
                      <div className='w-full px-1'>
                        <img src={imgFarm3} alt="" width={'100%'} className='w-[315px] h-[236px] rounded-xl' />
                      </div>
                    </div>
                  </>
              }
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailSeller