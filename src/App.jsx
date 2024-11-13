import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import Nav from "./components/Nav";
import Signup from "./authentication/Signup";
import { useState } from "react";
import Login from "./authentication/Login";


function App({onLogin}) {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
 

  return (
    <Router>
       <Nav />

      <Routes>
        <Route path="/" element={<Signup onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/movies"
          element={isLoggedIn ? <MovieList /> : <Signup />}
        />
        <Route
          path="/movies/:id"
          element={isLoggedIn ? <MovieDetails /> : <Signup />}
        />
      </Routes>
      {isLoggedIn && <Footer /> }
    </Router>
  );
}

export default App;
