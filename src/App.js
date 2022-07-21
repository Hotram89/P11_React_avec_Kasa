import logo from "./logo.svg";
import "./App.css";
import Flat from "./components/Flat.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <Flat></Flat>
    //   </header>
    // </div>
  );
}

export default App;
