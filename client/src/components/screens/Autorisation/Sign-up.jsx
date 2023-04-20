import "./Autorisation.css";
import Footer from "../Footer/Footer";
import Header from "../header/header";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import NotFound from "../NotFound/NotFound";


function SignUp(props) {
  let Name = props.name;
  if (Name === "Login") {
    Name = <LoginForm />
  } else {
    Name = <SignUpForm />
  }
  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="image-container">
          <img className="login-image" src="/SideImage.png" alt="SIde Image" />
        </div>
        <div className="login-form-container">
          <div className="login-form">
            {Name}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SignUp;
