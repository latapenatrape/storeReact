import Reg from "./Componets/Reg";
import Main from "./Pages/Main";
import ErrorPage from "./Pages/ErrorPage"
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import UIButton from "./Componets/UIButton";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reg" element={<Reg />} />
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
