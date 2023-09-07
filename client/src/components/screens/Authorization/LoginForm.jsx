function LoginForm() {
    return (
        <>
            <h2>Log in to Exclusive</h2>
            <p className="login-p">Enter your details below</p>
            <form action="#">
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
              <div className="buttons-wrapper">
                <input
                  type="submit"
                  id="Login"
                  name="Login"
                  value="Log In"
                />
                <div className="password-link-wrapper">
                  <a className="forgot-password-link" href="#">Forget Password?</a>
                </div>
              </div>
              
            </form>
        </>
    );
}
export default LoginForm;