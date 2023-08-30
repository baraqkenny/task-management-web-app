import {  useState } from 'react';
import { Link } from 'react-router-dom';
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "../firebase/auth";
// import { getFirestore, addDoc, collection } from "../firebase/firestore"
import './Register.css';


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState('Not valid')
 


 

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if(!name === "" && !email === "" && !password === ""){
      // Create a new user with email and password using firebase
 
  }
    setName("");
    setEmail("");
    setPassword("");
    
  }

  return (
    <div className="sign-up-container">
      <div className="sign-up">
        <form className="sign-up-form" onSubmit={handleLoginSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor="name" className="sign-up-name-label">
            Full Name
          </label>
          <input
          value={name}
            type="text"
            placeholder="full name"
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            className="sign-up-name-input"
          />

          <label htmlFor="email" className="sign-up-email-label">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            className="sign-up-email-input"
          />

          <label className="sign-up-password-label" htmlFor="password">
            Password
          </label>
          <input
          value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            className="sign-up-password-input"
          />
          <button className="sign-up-btn" type="submit">
            Register
          </button>
          <p className="login-text">
            Already have an account?{" "}
            <Link className="link-to-login" to="/">
              Login
            </Link>
          </p>
        </form>
      </div>

      <div className="side-background"></div>
    </div>
  );
}

export default Register
