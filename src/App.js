// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import AsideMenu from "./components/AsideMenu";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <AsideMenu />
      <Footer />
    </div>
  );
}

export default App;
