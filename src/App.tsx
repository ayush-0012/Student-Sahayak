import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.js";
import LoginForm from "./components/Login.js";
import RegisterForm from "./components/Register.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
