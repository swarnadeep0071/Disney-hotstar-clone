import { useState, useEffect } from "react";
import "./App.css";
import Slider from "./Components/Slider";
import Header from "./Components/Header";
import ProductionHouse from "./Components/ProductionHouse";
import GenreMovieList from "./Components/GenreMovieList";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import MovieDetailsModal from "./Components/MovieDetailsModal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("hotstar_clone_user");
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        setUser(parsed);
        setIsLoggedIn(true);
      }
    } catch (e) {
      console.error("Failed to read stored user", e);
    }
  }, []);

  const handleNavClick = (section) => {
    let targetId = null;

    switch (section) {
      case "HOME":
        targetId = "home-section";
        break;
      case "SEARCH":
      case "MOVIES":
      case "WATCH LIST":
        targetId = "movies-section";
        break;
      default:
        break;
    }

    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    try {
      localStorage.setItem("hotstar_clone_user", JSON.stringify(userData));
    } catch (e) {
      console.error("Failed to store user", e);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setSelectedMovie(null);
    try {
      localStorage.removeItem("hotstar_clone_user");
    } catch (e) {
      console.error("Failed to clear stored user", e);
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Header
        user={user}
        onLogout={handleLogout}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavClick={handleNavClick}
      />

      <div id="home-section">
        <Slider />
        <ProductionHouse />
      </div>

      <div id="movies-section">
        <GenreMovieList
          searchQuery={searchQuery}
          onMovieClick={(movie) => setSelectedMovie(movie)}
        />
      </div>

      <Footer />

      <MovieDetailsModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </>
  );
}

export default App;