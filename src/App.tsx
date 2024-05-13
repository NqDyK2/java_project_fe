import "./App.css"
import Home from "./features/home"
import { MainLayout } from "./layouts/MainLayout"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div >
  )
}

export default App
