import "./App.css"
import Home from "./features/home"
import { Route, Routes } from "react-router-dom"
import ClientLayout from "./layouts/client/layout"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<ClientLayout />} >
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </div >
  )
}

export default App
