import React from "react";
import { Layout } from "./components/layout";
import { Hero, Services, Featured, Newsletter } from "./components/sections";
import "./styles/globals.css";

const App = () => {
  return (
    <Layout>
      <main className="flex flex-col w-full">
        <Hero />
        <Services />
        <Featured />
        <Newsletter />
      </main>
    </Layout>
  );
};

export default App;
