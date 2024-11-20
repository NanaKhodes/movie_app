// src/Signup.js
import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.signup}>
      <h2 className={styles.h2}>Sign Up</h2>
      <form className={styles.form} onSubmit={handleSignup}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={styles.btn} type="submit">Sign Up</button>
        <div>
          <p className={styles.p}>Already have an account?</p>
          <Link to="/login">
            <button className={styles.login}>Login</button>
          </Link>
        </div>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
