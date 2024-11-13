// src/Login.js
import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import styles from "./Signup.module.css"
import Nav from "../components/Nav";

const Login = ({onLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
      navigate("/movies");
    } catch (error) {
      setError("Failed to load movies");
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }
  };

  return (
    <div className={styles.signup}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handleLogin}>
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
        <button className={styles.btn} type="submit">
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
      <PacmanLoader
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Login;
