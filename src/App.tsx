import "./App.css";
import TopNavbar from "./components/TopNavbar";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Experimental from "./pages/Fun";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";
import { supabase } from "../src/supabaseClient";
import { Session } from "@supabase/supabase-js";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  return (
    <>
      <TopNavbar s={session} />
      <div className="container">
        <Routes>
          <Route path="/"></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/aboutme" element={<About></About>}></Route>
          <Route path="/fun" element={<Experimental></Experimental>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
