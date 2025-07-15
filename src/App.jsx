import React from "react";
import CaseReviewCard from "./components/CaseReviewCard";
import ClaimFormCard from "./components/ClaimFormCard";
import backgroundImage from "./assets/background.jpg";
import LeftBannerText from "./components/LeftBannerText";

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-6xl  w-full flex flex-col md:flex-row gap-6">
        <div className="flex flex-col-reverse md:flex-col gap-6 w-full md:w-1/2 h-full">
          <CaseReviewCard />
          <LeftBannerText />
        </div>

        <div className="w-full md:w-1/2">
          <ClaimFormCard />
        </div>
      </div>
    </div>
  );
};

export default App;
