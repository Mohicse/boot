import Header from './components/header';
import Home from './pages/home';
import ContactUS from './pages/contactUs';
import AboutUs from './pages/aboutUs';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUS />} />
      </Routes>
    </div>
  );
}

export default App;
