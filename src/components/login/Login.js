function Login() {
  return (
    <div className="login-wrapper">
      <form>
        <h2>Login</h2>
        <div>
          <input type="email" placeholder="email" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
