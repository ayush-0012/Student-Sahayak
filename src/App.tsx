import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.js";
import LoginForm from "./components/Login.js";
import RegisterForm from "./components/Register.js";
import VerifyEmailPage from "./components/Verification.js";
import Dashboard from "./components/Dashboard.js";
import TermsAndConditions from "./components/Terms.js";
import PrivacyPolicyPage from "./components/PrivacyPolicy.js";
import RefundPage from "./components/Refund.js";
import AboutUsPage from "./components/About.js";
import Pricing from "./components/sections/Pricing.js";
import ChallengeSection from "./components/sections/Challenge.js";
import RevisionSection from "./components/sections/Revision.js";
import Services from "./components/sections/Services.js";
import Nav from "./components/Nav.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/refund-policy" element={<RefundPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/challenge" element={<ChallengeSection />} />
          <Route path="/revision" element={<RevisionSection />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          {/* <Route path="/contact" element={<ContactSection />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
