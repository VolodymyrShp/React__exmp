import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home/Home";
import SignUp from "../screens/Autorisation/Sign-up";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<SignUp/>} path="/signup"/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
