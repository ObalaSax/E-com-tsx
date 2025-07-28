import { useState } from "react";

interface LoginProps {
  email: string;
  password: string;
}
function Login() {
  const [formLogin, setLoginData] = useState<LoginProps>({
    email: "",
    password: "",
  });
  return (
    <div>
      <div>
        <h2>Login</h2>
        <form>
          <input
            required
            type="text"
            placeholder="Email"
            name="email"
            value={formLogin.email}
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            value={formLogin.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
