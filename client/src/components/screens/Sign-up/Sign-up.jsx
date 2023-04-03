import './Sign-up.css';

function SignUp() {
    return(
        <div className="login-container">
            <div className="image-container">
                <img className="login-image" src="/SideImage.png" alt="SIde Image" />
            </div>
            <div className="login-form-container">
                <div className="login-form">
                    <h2>Create an account</h2>
                    <p>Enter your details below</p>
                    <form action="#">
                        <input type="text" name="name" id="name" placeholder='Name'/>
                        <input type="email" name="email" id="email" placeholder='Email or Phone Number'/>
                        <input type="password" id="password" name="password" placeholder='Password'/>
                        <input type="submit" id="creation" name="creation" value="Create Account" />
                        <buttom type="button" className="sign-Google"><img src='/google.svg'/>Sign up with Google</buttom>
                        <div className="link-wrapper">
                            <p>Alpeady have account ?</p>
                            <a href="#">Log in</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;