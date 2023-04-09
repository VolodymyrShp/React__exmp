

function LoginForm() {
    return (
        <>
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
              <input
                type="submit"
                id="Login"
                name="Login"
                value="Log In"
              />
              <div className="link-wrapper">
                <p>Alpeady have account ?</p>
                <a href="#">Log in</a>
              </div>
            </form>
        </>
    );
}
export default LoginForm;