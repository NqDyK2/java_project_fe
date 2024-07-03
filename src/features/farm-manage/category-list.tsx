import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { apiGetAllCate } from './manage-farm.action';

type Props = {}

const Category = (props: Props) => {
  const [openPopUps, setOpenPopUps] = useState<{ [key: number]: boolean }>({});

  const togglePopUp = (id: number) => {
    setOpenPopUps((prevOpenPopUps: any) => ({
      ...prevOpenPopUps,
      [id]: !prevOpenPopUps[id],
    }));
  };
  window.onclick = function (event: any) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns?.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.add("hidden");
      }
    }
  };
  function checkAll(element: any) {
    let rows = element.parentElement.parentElement.parentElement.nextElementSibling.children;
    for (var i = 0; i < rows?.length; i++) {
      if (element.checked) {
        rows[i].classList.add("bg-gray-100");
        rows[i].classList.add("dark:bg-gray-700");
        let checkbox = rows[i].getElementsByTagName("input")[0];
        if (checkbox) {
          checkbox.checked = true;
        }
      } else {
        rows[i].classList.remove("bg-gray-100");
        rows[i].classList.remove("dark:bg-gray-700");
        let checkbox = rows[i].getElementsByTagName("input")[0];
        if (checkbox) {
          checkbox.checked = false;
        }
      }
    }
  }


  // const { result, loading, error } = useAppSelector((state: any) => state.allUsers.result)
  const dispatch = useAppDispatch()
  const allCategories = useAppSelector((state: any) => state.category.result)
  const [page, setPage] = useState(1)
  useEffect(() => {
    const local: any = localStorage.getItem("account")
    const getIdLocal = JSON.parse(local);
    dispatch(apiGetAllCate({ id: getIdLocal.id, page: page, size: 6 }))
  }, [dispatch, page])
  const onChangePage = (index: any) => {
    setPage(index)
  }
  console.log( allCategories);
  
  return (
    <>
      <div className='flex flex-col'>
        <div className="bg-gradient-to-b from-[#ABDF8A] to-white">
          <div className="py-20">
            <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
              <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center">
                  <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
                    <ul className="flex justify-center items-center">
                      {
                        [...Array(allCategories.result?.totalPage).keys()].map((item, index) => (

                          <li key={index}>
                            <span onClick={() => onChangePage(item + 1)} className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-1 rounded px-3 py-2 focus:outline-none">{item + 1}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <Link to={"/manage-data"}>
                    <div className="lg:ml-6 flex items-center">
                      <div className="text-white cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={12} y1={5} x2={12} y2={19} />
                          <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                <table className="min-w-full bg-white dark:bg-gray-800">
                  <thead>
                    <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                      <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onClick={() => checkAll(this)} />
                      </th>
                      <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Tên loại quả.</th>
                      <td className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Thêm</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      allCategories.result?.categoryList?.map((item: any) => (
                        <tr key={item.id} className="h-24 border-gray-300 dark:border-gray-200 border-b">
                          <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                            <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" />
                          </td>
                          <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-left">{item.name ? item.name : "Thiếu thông tin"}</td>
                          <td className="pr-8 relative text-left">
                            {
                              openPopUps[item.id] && <div className={`dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 w-32`}>
                                <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                                  <Link to={`/edit-category/${item.id}`}>
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Cập nhật</li>
                                  </Link>
                                  <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Xóa</li>
                                </ul>
                              </div>
                            }
                            <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => togglePopUp(item.id)} className="icon icon-tabler icon-tabler-dots-vertical dropbtn" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={12} cy={19} r={1} />
                                <circle cx={12} cy={5} r={1} />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category