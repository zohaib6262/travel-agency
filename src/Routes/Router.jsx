import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../components/Main/Main";
import NavBar from "../components/Main/NavBar/NavBar";
import ServicesSection from "../components/Main/ServicesSection/ServicesSection";
import CulturalTraveler from "../components/CulturalTraveler/CulturalTraveler";
import FamilyTraveler from "../components/FamilyTraveler/FamilyTraveler";
import FamilyTravelerApply from "../components/FamilyTraveler/FamilTravelerApply";
import RoyalTraveler from "../components/RoyalTraveler/RoyalTraveler";
import RoyalTravelerApply from "../components/RoyalTraveler/RoyalTravelerApply";

const Router = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Services" element={<ServicesSection />} />
          <Route path="/ServicesSection" element={<ServicesSection />} />
          <Route path="/cultural-travelers" element={<CulturalTraveler />} />
          <Route path="/family-travelers" element={<FamilyTraveler />} />
          <Route
            path="/family-travelers/family-traveler-apply"
            element={<FamilyTravelerApply />}
          />
          <Route path="/royal-travelers" element={<RoyalTraveler />} />
          <Route
            path="/royal-travelers/royal-traveler-apply"
            element={<RoyalTravelerApply />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
