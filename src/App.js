import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Items from "./pages/Items";
import SingleItem from "./pages/SingleItem";
import AOS from "aos";
import "./index.css";
import EditItem from "./pages/EditItem";
import Home from "./pages/Home";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Routes>
      <Route path="/login" index element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/single-item" element={<SingleItem />} />
      <Route path="/edit-item" element={<EditItem />} />
    </Routes>
  );
}

export default App;
