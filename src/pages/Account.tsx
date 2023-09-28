import "./Account.css";
import { supabase } from "../supabaseClient";
import React, { useContext, useEffect, useState } from "react";
import { SessionContext } from "../App";
import { Session } from "@supabase/supabase-js";

export default function Account(): React.ReactElement {
  const currentSession: Session | null = useContext<Session | null>(SessionContext);
  const [accountMap, setAccountMap] = useState<Map<string, string> | null>(null);

  useEffect(() => {
    const fetchAccount = async () => {
      let { data: profiles, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", currentSession?.user.id)
        .single();

      console.log(error ? error : profiles);
      if (profiles) {
        let tempMap = new Map<string, string>();
        Object.keys(profiles).forEach((key) => tempMap.set(key, profiles[key]));
        setAccountMap(new Map(tempMap));
      }
    };
    fetchAccount();
  }, []);

  return (
    <div className="account-container">
      <h2>Account info:</h2>
      {accountMap ? (
        Array.from(accountMap.keys()).map((key) => (
          <p>{key + ": " + accountMap.get(key)}</p>
        ))
      ) : (
        <p>No account logged in.</p>
      )}
    </div>
  );
}
