import React from "react";
import { Navigation, Footer } from "./Components/UI";
import AppRouter from "./Router/AppRouter";

const App = () => {
  return (
    <div className="main-container">
      <Navigation />
        <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
