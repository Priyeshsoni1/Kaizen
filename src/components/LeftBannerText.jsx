import React from "react";

const LeftBannerText = () => {
  return (
    <div className="bg-[#FFF1EF] p-6 rounded-xl shadow-md text-sm">
      <h2 className="text-lg font-semibold mb-2 text-[#4B4B4B]">
        Have you or a loved one been affected by Mesothelioma?
      </h2>
      <p className="text-[#4B2E6D] mb-1 text-base leading-relaxed">
        As a woman, you've carried the weight of care, love, and resilience. Now
        it's time someone stands with you.
      </p>
      <ul className="list-disc pl-5 space-y text-[#4B2E6D] text-base">
        <li>Secondary Asbestos exposure is common</li>
        <li>Misdiagnosis delays are more frequent in women</li>
        <li>Women have won significant legal settlements</li>
      </ul>
    </div>
  );
};

export default LeftBannerText;
