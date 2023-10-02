import "./Account.css";
import { supabase } from "../supabaseClient";
import React, { useContext, useEffect, useState } from "react";
import { SessionContext } from "../App";
import { Session } from "@supabase/supabase-js";
import AccountCard from "../components/AccountCard";

export default function Account(): React.ReactElement {
  const currentSession: Session | null = useContext<Session | null>(SessionContext);
  const [accountMap, setAccountMap] = useState<Map<string, string> | null>(null);
  const [isUserUpdating,setIsUserUpdating] = useState<boolean>(false);

  const fetchAccount = async () => {
    let { data: profiles, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", currentSession?.user.id)
      .single();

    console.log(error ? error.message : profiles);
    if (profiles) {
      let tempMap = new Map<string, string>();
      Object.keys(profiles).forEach((key) => tempMap.set(key, profiles[key]));
      setAccountMap(new Map(tempMap));
    }
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  const updateAccount = async (inputAccount:Map<string,string|undefined>) => 
  {
    for(let [key, value] of inputAccount)
    {
      if (value === "")
      {
        inputAccount.delete(key);
      }
      else if (value?.toLowerCase() === "[null]")
      {
        inputAccount.set(key, undefined);
      }
    }
    
    const { error } = await supabase
      .from("profiles")
      .update(Object.fromEntries(inputAccount))
      .eq('id', currentSession?.user.id);
    if(error)
    {
      alert(`Error message: ${error.message}`);
    }
    else
    {
      setIsUserUpdating(false);
      fetchAccount();
    }
    console.log(error ? error.message : "Account updated");
  }

  return (
    <div className="account-container">
      <h2>Account info:</h2>
      {accountMap ? 
        (<AccountCard dataMap={accountMap} updateAccountCallback={updateAccount} setIsUpdating={setIsUserUpdating} isUpdating={isUserUpdating}/>)
      : (
        <p>No account logged in.</p>
      )}
    </div>
  );

}