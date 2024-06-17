import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import { getAllUsers } from './Users.action';
import { getAllUserPage } from '../../../../apis/manage-user';
import { Link } from 'react-router-dom';

type Props = {}

const Users = (props: Props) => {

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
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.add("hidden");
      }
    }
  };
  function checkAll(element: any) {
    let rows = element.parentElement.parentElement.parentElement.nextElementSibling.children;
    for (var i = 0; i < rows.length; i++) {
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
  const allUser = useAppSelector((state: any) => state.allUsers)
  const [page, setPage] = useState(1)
  const [listAll, setListAll] = useState([])
  useEffect(() => {
    dispatch(getAllUsers(page))
  }, [dispatch, page])

  const onChangePage = (index: any) => {
    setPage(index)
  }
  if (allUser.loading) {
    return (
      <div>Chờ đi</div>)
  } else {
    return (
      <>
        <div className="py-20">
          <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
            <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
              <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                <div className="flex items-center">
                  <a className="text-gray-600 dark:text-gray-400 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                  </a>
                  <a className="text-gray-600 dark:text-gray-400 mx-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                  </a>
                  <a className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </a>
                  <a className="text-gray-600 dark:text-gray-400 mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={8} y={8} width={12} height={12} rx={2} />
                      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                    </svg>
                  </a>
                  <a className="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={7} x2={20} y2={7} />
                      <line x1={10} y1={11} x2={10} y2={17} />
                      <line x1={14} y1={11} x2={14} y2={17} />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
                  <ul className="flex justify-center items-center">
                    {
                      [...Array(allUser.result?.result?.totalPage).keys()].map((item, index) => (
                        <li key={index}>
                          <span onClick={() => onChangePage(index+1)} className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-1 rounded px-3 py-2 focus:outline-none">{item + 1}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="flex items-center lg:border-r border-gray-300 dark:border-gray-200 pb-3 lg:pb-0 lg:px-6">
                  <div className="relative w-32 z-10">
                    <div className="pointer-events-none text-gray-600 dark:text-gray-400 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    <select aria-label="Selected tab" className="focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent">
                      <option>List View</option>
                      <option>Grid View</option>
                    </select>
                  </div>
                </div>
                <div className="lg:ml-6 flex items-center">
                  <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm">Download All</button>
                  <Link to={'/admin/add-user'}>
                    <div className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={12} y1={5} x2={12} y2={19} />
                        <line x1={5} y1={12} x2={19} y2={12} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
              <table className="min-w-full bg-white dark:bg-gray-800">
                <thead>
                  <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                    <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                      <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onClick={() => checkAll(this)} />
                    </th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Số điện thoại</th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Địa chỉ</th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Họ và tên</th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Email</th>
                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Username</th>
                    <td className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Thêm</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    allUser.result?.result?.userList?.map((item: any) => (
                      <tr key={item.id} className="h-24 border-gray-300 dark:border-gray-200 border-b">
                        <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                          <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"/>
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-left">{item.phone ? item.phone : "Thiếu thông tin"}</td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-left">{item.address ? item.address : "Thiếu thông tin"}</td>
                        <td className="pr-6 whitespace-no-wrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8">
                              <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" className="h-full w-full rounded-full overflow-hidden shadow" />
                            </div>
                            <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">{item.fullName ? item.fullName : "Thiếu thông tin"}</p>
                          </div>
                        </td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-left">{item.email ? item.email : "Thiếu thông tin"}</td>
                        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-left">{item.username ? item.username : "Thiếu thông tin"}</td>
                        <td className="pr-8 relative text-left">
                          {
                            openPopUps[item.id] && <div className={`dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 w-32`}>
                              <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                                <Link to={`/admin/${item.id}/edit-user`}>
                                  <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                </Link>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
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
      </>
    )
  }
}

export default Users
