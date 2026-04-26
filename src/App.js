import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Reports from "./pages/Reports";
import Supervisor from "./pages/Supervisor";
import FeatureDetail from "./pages/FeatureDetail";
import FullResearch from "./pages/FullResearch";
import Documents from "./pages/Documents";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

// Import tea background image the correct way (from src)
import teaBg from "./assets/tea_estate_hero.png";

const appStyle = {
  backgroundImage: `url(${teaBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
};

const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(10, 18, 35, 0.88)',
  zIndex: 0,
  pointerEvents: 'none',
};

function App() {
  return (
    <Router>
      <div className="app-container" style={appStyle}>
        {/* Background overlay to darken the tea image */}
        <div style={overlayStyle}></div>

        {/* Dynamic Abstract Background Shapes */}
        <div className="background-shapes">
          <div className="grid-overlay"></div>
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/supervisor" element={<Supervisor />} />
            <Route path="/feature/:id" element={<FeatureDetail />} />
            <Route path="/full-research" element={<FullResearch />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;