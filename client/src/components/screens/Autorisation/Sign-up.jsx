import "./Autorisation.css";
import Footer from "../Footer/Footer";
import Header from "../header/header";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function SignUp() {
  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="image-container">
          <img className="login-image" src="/SideImage.png" alt="SIde Image" />
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <SignUpForm />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SignUp;
