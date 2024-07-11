import React, { useEffect, useMemo, useState } from 'react'
import avt from "../../img/avtfb.jpg"
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
import imgContent from "../../img/imgcontent.png";

import { IoMdStar } from 'react-icons/io';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiShieldCheckFill, RiShieldCheckLine } from "react-icons/ri";

import Item from '../../components/client/component/Item';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { apiGetAllCate, apiGetDetailProductById } from '../farm-manage/manage-farm.action';
import { CiLocationOn } from 'react-icons/ci';
import { apiGetUser } from '../admin/user/edit-user/editUser.action';
import AddToCartBtn from '../../components/client/component/AddToCartBtn';

type Props = {}

const Product = (props: Props) => {
  const productDetail = useAppSelector((state: any) => state.products)
  const listCategory = useAppSelector((state: any) => state.category)
  const infomationUser = useAppSelector((state: any) => state.editUser)
  // const allProducts = useAppSelector
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    dispatch(apiGetDetailProductById(Number(id)));
  }, [dispatch]);
  const item = productDetail.result?.result
  useEffect(() => {
    if (item?.userId) {
      dispatch(apiGetAllCate(item?.userId))
      dispatch(apiGetUser(item?.userId))
    }
  }, [dispatch, productDetail]);
  const cate = listCategory.result?.result?.categoryList
  const user = infomationUser.result?.result
  const matchedData = useMemo(() => {
    return item?.categories?.map(id => {
      const matchedItem = cate.find(secondItem => secondItem.id === id);
      return {
        id,
        name: matchedItem ? matchedItem.name : 'Not Found'
      };
    });
  }, [listCategory.result?.result?.categoryList, cate]);

  const formatPrice = (price: any) => {
    const priceStr = price?.toString();
    const lastThreeDigits = priceStr?.slice(-3); // lấy 3 số cuối
    const restOfNumber = priceStr?.slice(0, -3); // lấy phần còn lại của số

    if (restOfNumber) {
      return `${restOfNumber}.${lastThreeDigits}`;
    }
    return lastThreeDigits;
  };
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount((prev) => (prev + 1 >= item?.amount ? item?.amount : prev + 1));
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => (prev - 1 < 1 ? 1 : prev - 1));
    }
  };

  return (
    <>
      < div className='text-left mx-auto w-[1440px] mt-3 mb-4'>
        <span><Link to={"/"}>Trang chủ</Link> / Sản phẩm chi tiết</span>
      </div >
      <div className='flex mx-auto w-[1440px]'>
        <div>
          <div className='flex gap-10 bg-white rounded-lg mt-5'>
            <div className='ml-2 mt-5'>
              {/* 510 380 */}
              <img src={item?.image} alt="" width={'510px'} height={'380px'} />
              <div className='flex justify-center gap-3 pt-4 pb-2'>
                <img src={`https://picsum.photos/93/80?grayscale`} alt="" />
                <img src={`https://picsum.photos/93/80`} alt="" />
                <img src={subImg3} alt="" />
                <img src={`https://picsum.photos/93/80`} alt="" />
                <img src={`https://picsum.photos/93/80/?blur`} alt="" />
              </div>
            </div>
            <div className='text-left mr-8'>
              <div className='text-xl font-semibold mt-5'>
                <h3>{item?.title ? item?.title : ""}</h3>
              </div>

              <div className='my-3'>
                <span>Danh mục:</span>  <span className='text-green-light font-semibold'>{matchedData?.map(item => item.name).join(', ')}</span>
                <br />
                <span>Tình trạng:</span>  <span className='text-green-light font-semibold'> Còn hàng</span>
              </div>

              <div>
                <span className='text-red-500 font-semibold text-xl'>{formatPrice(item?.price)}đ/{item?.unit}</span>
                {/* <del className='text-gray-400 pl-5'>35.000đ/kg</del> <span className='text-white bg-green-light rounded-md p-1 ml-3'>-50%</span> */}
              </div>

              <div>
                <ul className='list-disc ml-7 my-4 text-sm'>
                  <li><span>Ngày đăng bán: 22/02/2022</span></li>
                  <li><span>Còn lại: {item?.amount}{item?.unit}</span></li>
                  {/* <li><span>Đánh giá: ___(0)</span></li> */}
                </ul>
              </div>

              {/* <div className='text-left'>
                <label htmlFor="" className='mr-3'>Giao hàng từ</label>
                <select name="" id="" className='text-left w-[250px] py-1 px-1 border border-gray-500 rounded-lg'>
                  <option defaultValue={'selected'} className='text-left'>Tất cả (mới nhất) </option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                </select>
              </div> */}
              <div className="flex flex-row justify-between">
                <p className=" font-medium text-base leading-4 text-gray-600">Điều chỉnh số lượng</p>
                <div className="flex">
                  <span onClick={minusCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
                    -
                  </span>
                  <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center w-14 pb-1" type="text" min={1} max={item?.amount} value={count} onChange={(e) => (e.target.value > item?.amount ? setCount(item?.amount) : setCount(Number(e.target.value)))} />
                  <span onClick={addCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 ">
                    +
                  </span>
                </div>
              </div>
              <AddToCartBtn item={{ item, count }} />
              <Link to={`/detail-seller/${item?.userId}`}>
                <div className='text-center mt-10 bg-green-light py-3 rounded-lg text-white text-xl font-semibold'>
                  <button>
                    Liên hệ
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className='mt-4 bg-white rounded-lg'>
            <div>
              <ul className='text-left border border-b-gray-400'>
                <li className='inline-block px-10 py-2 border border-gray-400 text-green-light rounded-tl-lg'>Chi tiết</li>
                {/* <li className='inline-block px-10 py-2 border border-gray-400'>Chứng thực</li>
                <li className='inline-block px-10 py-2 border border-gray-400'>Video</li>
                <li className='inline-block px-10 py-2 border border-gray-400'>Đánh giá (10)</li> */}
              </ul>
            </div>
            <div className='px-5 pt-5'>
              <div className='flex gap-1 text-sm text-gray-500 rounded-lg py-2'>
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
              <div className='flex gap-1 text-sm text-gray-500 rounded-lg py-2'>
                <div className='my-auto text-lg'>
                  <span>
                    <HiOutlineLocationMarker />
                  </span>
                </div>
                <div>
                  <span>
                    Đã được kiểm duyệt
                  </span>
                </div>
              </div>
              <div className='text-left px-1 text-wrap w-[900px]'>
                <p>{item?.content}</p>
              </div>
              <div className='mt-7 mb-6'>
                <img src={item?.image} alt="" className='mx-auto' />
              </div>
              {/* <div className='text-left px-1 pb-10 text-wrap w-[900px]'>
                <p>Xã Đại Minh (huyện Yên Bình, tỉnh Yên Bái) giáp ranh với huyện Đoan Hùng (tỉnh Phú Thọ) nằm cạnh bờ sông Chảy. Hiện vẫn còn nhiều cây bưởi cổ trên 100 tuổi được mệnh danh là “bưởi tiến vua” trên vùng đất ven sông Chảy.
                  Vùng trồng bưởi ở xã Đại Minh có độ cao khoảng 500 đến 600 m so với mực nước biển. Đất trồng bưởi có độ tơi xốp cao, giàu mùn, nhiều dinh dưỡng. Trong vùng có lượng mưa bình quân lớn, khí hậu mát mẻ. Trên địa bàn có 780 hộ thì có tới 650 hộ trồng bưởi. Vài năm trở lại đây, được sự giúp đỡ của Viện nghiên cứu rau quả Trung ương, cán bộ khuyến nông huyện, xã và sự nỗ lực của bà con trong việc áp dụng những phương pháp khoa học kỹ thuật, cách chăm sóc mới, khiến bưởi ra quả nhiều hơn, năng suất cao hơn. Vì thế, diện tích bưởi cứ ngày một tăng lên.
                  Bưởi Đại Minh ngon có tiếng, từ lâu đã trở thành đặc sản của vùng quê này và là niềm tự hào của người dân Yên Bái. Phát huy tiềm năng, thế mạnh sẵn có, Yên Bái đang tiếp tục nghiên cứu nâng cao chất lượng, sản lượng bưởi để mở rộng thị trường, xây dựng thương hiệu bưởi Đại Minh có chỗ đứng vững chắc trên thị trường. Bưởi Đại Minh hiện tại có rất nhiều loại Bưởi Tôm đỏ, Bưởi tôm vàng, Bưởi khả lĩnh, bưởi chua đại minh. Các cây bưởi ở đây rất sai quả, quả da mỏng, múi mọng. Bưởi ngọt mát có mùi thơm dịu.
                  Lợi ích của việc ăn bưởi: Giúp tăng cường hệ thống miễn dịch, phòng chống sỏi thận, giúp đốt cháy chất béo tự nhiên, tăng cường trao đổi chất, giải độc gan, phòng chống lại căn bệnh ung thư tuyến tiền liệt, Ngăn ngừa ung thư phổi, Làm giảm lượng cholesterol xấu, giúp đối phó các bệnh về nướu.
                  Vào mùa thu hoạch, bưởi Đại Minh được các thương lái tới tận nhà vườn để thu mua. Thậm chí các thương lái muốn có bưởi Đại Minh còn phải đến tận vườn bưởi từ khi trái bưởi còn nhỏ để thỏa thuận, đặt cọc với chủ nhà đến khi thu hoạch để họ giữ lại bán cho mình.</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className='mt-5 ml-8 w-[32%]'>
          <div className='bg-white rounded-lg'>
            <div className='flex'>
              <div className='ml-4 mt-3 w-[130px]'>
                <img src={user?.avatar ? user?.avatar : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"} alt="" width={'100%'} className='rounded-full' />
              </div>
              <div className='ml-4 mt-3 w-full'>
                <div className='text-left pl-2 mb-2'>
                  <h4 className='font-semibold'>{user?.fullName ? user?.fullName : "Vườn nhà người dùng"}</h4>
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
              <Link to={`/detail-seller/${user?.id}`}>
                <div className='px-9 py-1 text-sm bg-green-light text-white rounded-md'><button>Xem cửa hàng</button></div>
              </Link>
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
      {/* <div className='mx-auto w-[1440px]'>
        <div className='mt-4 bg-white'>
          <div className='pt-4 -mb-8 text-green-light font-semibold text-2xl'><h1>SẢN PHẨM LIÊN QUAN</h1></div>
          <div className='flex justify-evenly py-5 mt-10'>
            <div className='bg-white rounded-lg w-[280px] shadow-lg'>
              <div>
                <img src={subImg2} width={'280px'} height={'224px'} alt="" className='rounded-t-lg' />
              </div>
              <div className='my-2 font-semibold text-xl'>
                <span>
                  Bưởi da xanh
                </span>
              </div>
              <div>
                <div className='px-2 py-1 text-lg text-gray-500'>
                  <span><CiLocationOn className='inline-block mb-1 pl-2 text-3xl text-green-light' /> Bắc Giang </span>
                </div>
              </div>
              <div className='flex justify-center text-[#FF9933] my-1'>
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
              </div>
              <div className='flex justify-center gap-5'>
                <span className='text-green-light text-xl font-semibold text-right  w-fit'>
                  30.000 đ/kg
                </span>
                <del className='text-gray-400 my-auto text-lg w-fit'>
                  35.000 đ/kg
                </del>
              </div>
              <div>
                <Link to={"detail-seller/1"}>
                  <button className='border px-2 py-2 my-4 border-green-light text-white text-sm bg-green-light rounded-md'>
                    <span className='font-semibold px-24'>Liên hệ</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className='bg-white rounded-lg w-[280px] shadow-lg'>
              <div>
                <img src={subImg1} width={'280px'} height={'224px'} alt="" className='rounded-t-lg' />
              </div>
              <div className='my-2 font-semibold text-xl'>
                <span>
                  Bưởi da xanh
                </span>
              </div>
              <div>
                <div className='px-2 py-1 text-lg text-gray-500'>
                  <span><CiLocationOn className='inline-block mb-1 pl-2 text-3xl text-green-light' /> Bắc Giang </span>
                </div>
              </div>
              <div className='flex justify-center text-[#FF9933] my-1'>
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
              </div>
              <div className='flex justify-center gap-5'>
                <span className='text-green-light text-xl font-semibold text-right  w-fit'>
                  30.000 đ/kg
                </span>
                <del className='text-gray-400 my-auto text-lg w-fit'>
                  35.000 đ/kg
                </del>
              </div>
              <div>
                <Link to={"detail-seller/1"}>
                  <button className='border px-2 py-2 my-4 border-green-light text-white text-sm bg-green-light rounded-md'>
                    <span className='font-semibold px-24'>Liên hệ</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className='bg-white rounded-lg w-[280px] shadow-lg'>
              <div>
                <img src={subImg3} width={'280px'} height={'224px'} alt="" className='rounded-t-lg' />
              </div>
              <div className='my-2 font-semibold text-xl'>
                <span>
                  Bưởi da xanh
                </span>
              </div>
              <div>
                <div className='px-2 py-1 text-lg text-gray-500'>
                  <span><CiLocationOn className='inline-block mb-1 pl-2 text-3xl text-green-light' /> Bắc Giang </span>
                </div>
              </div>
              <div className='flex justify-center text-[#FF9933] my-1'>
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
              </div>
              <div className='flex justify-center gap-5'>
                <span className='text-green-light text-xl font-semibold text-right  w-fit'>
                  30.000 đ/kg
                </span>
                <del className='text-gray-400 my-auto text-lg w-fit'>
                  35.000 đ/kg
                </del>
              </div>
              <div>
                <Link to={"detail-seller/1"}>
                  <button className='border px-2 py-2 my-4 border-green-light text-white text-sm bg-green-light rounded-md'>
                    <span className='font-semibold px-24'>Liên hệ</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className='bg-white rounded-lg w-[280px] shadow-lg'>
              <div>
                <img src={subImg4} width={'280px'} height={'224px'} alt="" className='rounded-t-lg' />
              </div>
              <div className='my-2 font-semibold text-xl'>
                <span>
                  Bưởi da xanh
                </span>
              </div>
              <div>
                <div className='px-2 py-1 text-lg text-gray-500'>
                  <span><CiLocationOn className='inline-block mb-1 pl-2 text-3xl text-green-light' /> Bắc Giang </span>
                </div>
              </div>
              <div className='flex justify-center text-[#FF9933] my-1'>
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
                <IoMdStar className='text-xl' />
              </div>
              <div className='flex justify-center gap-5'>
                <span className='text-green-light text-xl font-semibold text-right  w-fit'>
                  30.000 đ/kg
                </span>
                <del className='text-gray-400 my-auto text-lg w-fit'>
                  35.000 đ/kg
                </del>
              </div>
              <div>
                <Link to={"detail-seller/1"}>
                  <button className='border px-2 py-2 my-4 border-green-light text-white text-sm bg-green-light rounded-md'>
                    <span className='font-semibold px-24'>Liên hệ</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}

export default Product