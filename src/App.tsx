import "./App.css"
import Home from "./features/home"
import { Route, Routes } from "react-router-dom"
import ClientLayout from "./layouts/client/layout"
import Products from "./features/products/Products"
import Company from "./features/company/Company"
import Product from "./features/detail/Product"
import News from "./features/news/News"
import Login from "./features/login/login"
import Register from "./features/register/register"
import StoreProvider from "./providers/index"
import AdminLayout from "./layouts/admin/layout"
import Users from "./features/admin/user/manager-data/users"
import AddUser from "./features/admin/user/add-user/addUser"
import UpdateUser from "./features/update-info/update-infomation"
import { useEffect, useState } from "react"
import EditUser from "./features/admin/user/edit-user/editUser"
import DetailSeller from "./features/detail-seller/detail"
import FormFarmManage from "./features/farm-manage/formFarmMange"
import Category from "./features/farm-manage/category-list"
import EditCategory from "./features/farm-manage/editCategory"
import ProductsList from "./features/farm-manage/products-list"
import EditProduct from "./features/farm-manage/editProduct"


interface IProps extends React.HTMLAttributes<HTMLDivElement> { }
const App: React.FC<IProps> = (props: IProps): JSX.Element => {
  return (
    <StoreProvider>
      <div className="App bg-gray-100 overflow-x-hidden	">
        <Routes>
          <Route element={<ClientLayout />} >
            <Route index path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="company" element={<Company />} />
            <Route path='news' element={<News />} />
            <Route path="infomation/:id" element={<UpdateUser />} />
            <Route path="detail-seller/:id" element={<DetailSeller />} />
            <Route path="manage-data" element={<FormFarmManage />} />
            <Route path="all-cate" element={<Category />} />
            <Route path="edit-category/:id" element={<EditCategory />} />
            <Route path="all-prds" element={<ProductsList />} />
            <Route path="edit-product/:id" element={<EditProduct />} />

          </Route>
          <Route path="products" element={<ClientLayout />}>
            <Route path={`detail/:id`} element={<Product />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route path="users" element={<Users />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path={`:id/edit-user`} element={<EditUser />} />
          </Route>
        </Routes>
      </div>
    </StoreProvider>

  )
}

export default App
