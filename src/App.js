import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppStateProvider from "./providers/AppStateProvider";
import MainPage from "./pages/MainPage";
import LibraryPage from "./pages/LibraryPage";

function App() {
  return (
    <>
      <AppStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/library" element={<LibraryPage />} />
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </>
  );
}

export default App;
