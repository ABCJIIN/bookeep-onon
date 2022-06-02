import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppStateProvider from "./providers/AppStateProvider";
import MainPage from "./pages/MainPage";
import LibraryPage from "./pages/LibraryPage";
import styled from "styled-components";

const H2 = styled.h2`
  text-align: center;
  font-size: 50px;
  margin-top: 100px;
`;

function App() {
  return (
    <>
      <AppStateProvider>
        <Routes>
          <Route
            // path={`/${process.env.REACT_APP_HOST}`}
            path="/"
            element={<MainPage />}
          />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/*" element={<H2>not found</H2>} />
        </Routes>
      </AppStateProvider>
    </>
  );
}

export default App;
