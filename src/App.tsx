import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import PortfolioPage from "./app/portfolio/page";
import DigitalMarketingPage from "./app/services/digital-marketing/page";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services/web-development" element={<DigitalMarketingPage />} />
          <Route path="/services/ui-ux-design" element={<DigitalMarketingPage />} />
          <Route path="/services/ai-integration" element={<DigitalMarketingPage />} />
          <Route path="/services/cybersecurity" element={<DigitalMarketingPage />} />
          <Route path="/services/global-solutions" element={<DigitalMarketingPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
