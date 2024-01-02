import "./App.css";
import AboutMeCard from "./component/AboutMeCard";
import Home from "./component/Home";
import LeftSidebar from "./component/LeftSidebar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
