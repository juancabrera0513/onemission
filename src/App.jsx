import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MetabolicReset from "./pages/MetabolicReset";
import Overcomers from "./pages/Overcomers";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="site">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metabolic-reset" element={<MetabolicReset />} />
          <Route path="/the-overcomers" element={<Overcomers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}