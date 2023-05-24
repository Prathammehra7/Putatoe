// import { BrowserRouter } from "react-router-dom";
import React from "react";
import   Navbar  from "./pages/Navbar";
import Home from "./pages/Component/Home";
import Footer from "./pages/Footer";


const App = () => {
  return (

         <div>
           <Navbar />
          <Home />
          <Footer />
         </div>
       
  );
}

export default App;