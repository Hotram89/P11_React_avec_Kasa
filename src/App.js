import Footer from "components/Footer/Footer";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Ui/Navigation/Navigation";
import Router from "./route/Router.js";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <main className="main">
        <Router />
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
