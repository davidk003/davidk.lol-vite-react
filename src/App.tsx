import "./App.css";
import Top_Navbar from "./Top_Navbar";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Experimental from "./pages/Experimental";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Top_Navbar />
      <div className="container">
        <Routes>
          <Route path="/" ></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/aboutme" element={<About></About>}></Route>
          <Route path="/experimental" element={<Experimental></Experimental>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
