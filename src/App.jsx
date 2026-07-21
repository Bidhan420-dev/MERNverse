import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import CoursePage from "./pages/CoursePage";
import HotelProject from "./pages/HotelProject";
import EcommerceProject from "./pages/EcommerceProject";
import PortfolioProject from "./pages/PortfolioProject";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Course module pages */}
      <Route path="/course/:courseId" element={<CoursePage />} />

      {/* Project detail pages */}
      <Route path="/projects/hotel" element={<HotelProject />} />
      <Route path="/projects/ecommerce" element={<EcommerceProject />} />
      <Route path="/projects/portfolio" element={<PortfolioProject />} />
    </Routes>
  );
}

export default App;
