import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoPage from "./components/InfoPage";
import IshiharaTest from "./components/IshiharaTest";
import LandingPage from "./components/LandingPage";
import Result from "./components/Result";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<InfoPage />} />
        <Route path="/test">
          <Route index element={<LandingPage />} />{" "}
          <Route path="ishiharaTest" element={<IshiharaTest />} />{" "}
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
