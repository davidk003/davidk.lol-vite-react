import "./Account.css";
import { supabase } from "../supabaseClient";
import React, { useContext, useEffect, useState } from "react";
import { SessionContext } from "../App";
import { Session } from "@supabase/supabase-js";

export default function Account(): React.ReactElement {
  const [accountInfo, setAccountInfo] = useState<any[] | null>(null);
  const currentSession: Session | null = useContext<Session | null>(
    SessionContext
  );
  const [accountMap, setAccountMap] = useState<Map<string, string> | null>(null);

  useEffect(() =>
  {
    console.log("Account get request triggered");
    const getAccountInfo = async () => {
      let { data: profiles, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", currentSession?.user.id);
  
      setAccountInfo(profiles);
      console.log("accountinfo: "  + accountInfo);
      setAccountMap(null);
      if (error) {
        alert(error.message);
        console.log("error");
      }
      if (accountInfo) {
        let keys:string[] = Object.keys(accountInfo[0]);
        let values:string[] = Object.values(accountInfo[0]);
        let tempMap = new Map<string, string>();
        for (let i = 0; i < Object.keys(accountInfo[0]).length; i++)
        {
          tempMap.set(keys[i], values[i]);
        }
        console.log(tempMap);
        setAccountMap(new Map(tempMap));
      }
      else
      {
        console.log("Account info not loaded.")
      }
    };
    getAccountInfo();
  },[]);


  return (
    <div className="account-container">
      <button onClick={() => {console.log(accountInfo ? "accountinfo loaded" : "accountinfo not loaded");console.log(accountMap)}}> check account info</button>
      <h2>Account info:</h2>
      {accountMap ? Array.from(accountMap.keys()).map((key) => <p>{key + ": " + accountMap.get(key)}</p>) : <p>No account logged in.</p>}
    </div>
  );
}
