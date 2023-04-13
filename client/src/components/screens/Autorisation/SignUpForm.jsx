import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

function SignUpForm() {
    return(
        <>
            <h2>Create an account</h2>
            <p className="login-p">Enter your details below</p>
            <form action="#">
              <input type="text" name="name" id="name" placeholder="Name" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email or Phone Number"
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
                <input
                    type="submit"
                    id="creation"
                    name="creation"
                    value="Create Account"
                />             
              <button type="button" className="sign-Google">
                <img src="/google.svg" />
                Sign up with Google
              </button>
              <div className="link-wrapper">
                <p className="link-wrapper-ask">Already have account ?</p>
                <Link to='/login' href="" className="login-link-wrapper">
                   <a href="#">Log in</a>
                </Link>
               
              </div>
            </form>
        </>

    );
}
export default SignUpForm;