import React from "react";
import { Navigation, Footer } from "./Components/UI";
import { Toast } from "./Components/UI/Toast/Toast";
import AppRouter from "./Router/AppRouter";

const App = () => {
  return (
    <div className="main-container">
      <Navigation />
      <Toast />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
