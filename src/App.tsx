import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Footer from "./components/footer";
import Header from "./components/header";
import Search from "./pages/search";
import Image from "./pages/image";
import Content from "./pages/Content";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />{" "}
          <Route path="/Search " element={<Search />} />
          <Route path="/image" element={<Image />} />
          <Route path="/content" element={<Content />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
