import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopNavigation, Divider, MainContainer } from "./components";

import "./App.css";

function App() {
  return (
    <>
      <TopNavigation />
      <Divider />
      <MainContainer>main section</MainContainer>
    </>
  );
}

export default App;
