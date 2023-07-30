import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopNavigation, Divider } from "./components";

import { HomePage, RecipesPage, DetailsPage, SavedRecipes } from "./components";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavigation />
        <Divider />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/recipes" element={<RecipesPage />}></Route>
          <Route path="/details" element={<DetailsPage />}></Route>
          <Route path="/saved-recipes" element={<SavedRecipes />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
