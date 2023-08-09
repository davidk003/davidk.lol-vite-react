import "./App.css";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Experimental from "./pages/Experimental";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" ></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/aboutme" element={<About></About>}></Route>
          <Route path="/experimental" element={<Experimental></Experimental>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
