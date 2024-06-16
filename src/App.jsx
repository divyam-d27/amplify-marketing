import Nav from "./components/Nav";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/backToTop";

// services timeline below
import ServiceProcess from "./path/processPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from "./path/ServicesPage";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <About />
              </>
            }
          />
          <Route path="/services/:service" element={<ServiceProcess />} />
        </Routes>
      </BrowserRouter>
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
