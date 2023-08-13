import "./App.css";
import TopNavbar from "./components/TopNavbar";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Experimental from "./pages/Fun";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <TopNavbar />
      <div className="container">
        <Routes>
          <Route path="/" ></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/aboutme" element={<About></About>}></Route>
          <Route path="/fun" element={<Experimental></Experimental>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
