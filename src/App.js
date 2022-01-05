import React from 'react';
import InfoComponent from "./InfoComponent";
import AboutComponent from "./AboutComponent";
import InterestComponent from "./InterestComponent";
import FooterComponent from "./FooterComponent";


function App() {
  return (
    <div className="card-container">
      <InfoComponent />
      <AboutComponent />
      <InterestComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
