import React from "react";
import AppRouter from "./Router/AppRouter";
import { Navigation, Footer } from "./Components/UI";

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
