
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.js";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
