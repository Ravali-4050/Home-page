import "./App.css";
import Home from "./components/Home";
import Courses from "./screens/Courses";
import ITIE from "./screens/Itie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./screens/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Courses" element={<Courses />} />
        <Route exact path="/Itie" element={<ITIE />} />
      </Routes>
    </Router>
  );
}

export default App;
