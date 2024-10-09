import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import Clients from "./components/clients";

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-primary text-white">
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="flex items-center  justify-center px-6 sm:px16 ">
        <div className="max-w-[1280px] w-full ">
          <Introduction />
        </div>
      </div>
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="max-w-[1280px w-full ">
          <Feature />
        </div>
      </div>
      <div className="flex items-center justify-center my-12 px-6 sm:px-16 mt-28">
        <div className="max-w-[1280px] w-full">
          <Clients />
        </div>
      </div>
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="max-w-[1280px] w-full ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
