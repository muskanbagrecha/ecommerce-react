import React from "react";
import { Alert, Navigation, Footer } from "./Components/UI";
import { useAlert } from "./CustomHooks/";
import AppRouter from "./Router/AppRouter";

const App = () => {
  const { showAlert } = useAlert();
  return (
    <div className="main-container">
      <Navigation />
      {showAlert.showAlert && <Alert />}
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
