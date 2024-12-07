import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <section className="z-0 min-h-screen bg-blue-50"></section>
    </main>
  );
};

export default Home;
