import { useState } from 'react';
// import { signInWithEmailAndPassword } from "firebase/auth";
import { Link} from "react-router-dom";
import './Login.css';



function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");  

  // Log in on button click
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // if(!email === "" && !password === ""){
    
    //      }
       

    
  
    
  }
  return (
    <div className="login-container">
      <div className="login">
        <form className="login-form" onSubmit={handleRegisterSubmit}>
          <h1>Log In</h1>
          <label htmlFor="email" className="login-email-label">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            className="login-email-input"
            required
          />

          <label className="login-password-label" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            className="login-password-input"
            required
          />

          <button className="login-btn" type="submit">
            Log In
          </button>
          <p className="register">
            Don't have an account?{" "}
            <Link className="link-to-register" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>

      <div className="side-background"></div>
    </div>
  );
}



export default Login
