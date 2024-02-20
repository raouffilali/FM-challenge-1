import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import About from "./pages/About Page/About";
import Contact from "./pages/Contact-us page/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
