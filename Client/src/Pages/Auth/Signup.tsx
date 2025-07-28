import { useState } from "react";

interface SignUpProps {
  fname: string;
  lname: string;
  email: string;
  phone: number;
  password: string;
  confirmPassword: string;
}
function Signup() {
  const [formRegister, setRegisterData] = useState<SignUpProps>({
    fname: "",
    lname: "",
    email: "",
    phone: 0,
    password: "",
    confirmPassword: "",
  });
  return (
    <div>
      <div>
        <h2>SignUp</h2>
        <form>
          <input
            required
            type="text"
            placeholder="First Name"
            name="fname"
            value={formRegister.fname}
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            name="lname"
            value={formRegister.lname}
          />
          <input
            required
            type="text"
            placeholder="Email"
            name="email"
            value={formRegister.email}
          />
          <input
            required
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={formRegister.phone}
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            value={formRegister.password}
          />
          <input
            required
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formRegister.confirmPassword}
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
