import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import Dashboard from "./components/Dashboard";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Inventory from "./components/Inventory";
import SpringDeets from "./components/SpringDeets";
import Download from "./components/Download";
import Delete from "./components/Delete";
import Profile from "./components/Profile";
import NewSpring from "./components/NewSpring";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Analytics />
      <Dashboard />
      <Cards />
      <Footer />
      <ErrorPage />
      <Inventory />
      <SpringDeets />
      <Download/>
      <Delete/>
      <Profile/>
      <NewSpring/>
    </div>
  );
}

export default App;
