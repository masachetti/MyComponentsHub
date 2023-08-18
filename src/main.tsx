import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "@/App.tsx";
import FilterProvider from "@/contexts/FilterProvider.tsx";
import LanguageProvider from "@/contexts/LanguageProvider.tsx";
import InfoPopUpProvider from "@/contexts/InfoPopUpProvider.tsx";
import HubComponentsProvider from "@/contexts/HubComponentsProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FilterProvider>
      <LanguageProvider>
        <InfoPopUpProvider>
          <HubComponentsProvider>
            <App></App>
          </HubComponentsProvider>
        </InfoPopUpProvider>
      </LanguageProvider>
    </FilterProvider>
  </React.StrictMode>
);
