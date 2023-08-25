import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Log in on button click
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="login-container">
      <div className="login">
        <form className="login-form">
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
            name="password"
            className="login-password-input"
          />

          <button className="login-btn" type="submit" onClick={handleSubmit}>
            Log In
          </button>
          <p className='register'>Don't have an account? <Link className='link-to-register' to="/register">Register</Link></p>
        </form>
      </div>

      <div className="side-background"></div>
    </div>
  );
}

export default Login
