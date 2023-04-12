import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home/Home";
import SignUp from "../screens/Autorisation/Sign-up";
import LoginForm from "../screens/Autorisation/LoginForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<SignUp/>} path="/signup"/>
        <Route element={<LoginForm />} path="/login"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
