import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Ui/Navigation/Navigation";
import Router from "./route/Router.js";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main className="main">
        <Router />
      </main>
    </BrowserRouter>
  );
}

export default App;
