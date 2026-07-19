import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import Movie from "./components/movie";
import "./App.css";
import "./components/movie.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/movie" element={<Movie />} />
    </Routes>
  );
};

export default App;