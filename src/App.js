import Footer from "components/Footer/Footer";
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
