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
import Users from "./features/admin/user/users"


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
          </Route>
          <Route path="products" element={<ClientLayout />}>
            <Route path={`detail`} element={<Product />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route path="users" element={<Users />}/>
          </Route>
        </Routes>
      </div>
    </StoreProvider>

  )
}

export default App
