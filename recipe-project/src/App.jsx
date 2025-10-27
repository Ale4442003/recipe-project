import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Profile from "./pages/Profile";
import PubblicLayout from "./layouts/PubblicLayout";

const App = () => {
  return (
    <>
        <Routes path="/"  element={<PubblicLayout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/recipes" element={<Recipes />} />
          <Route path="dashboard/recipes/:id" element={<RecipeDetails />} />
          <Route path="dashboard/profile" element={<Profile />} />
        </Routes>
    </>
  )
}

export default App