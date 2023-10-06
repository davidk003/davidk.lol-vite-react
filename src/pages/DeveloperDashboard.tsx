import EmoticonHeader from "../components/EmoticonHeader";
import "./DeveloperDashboard.css"
import { SessionContext } from "../App";
import { Session } from "@supabase/supabase-js";
import { useContext, useEffect, useState } from "react";

export default function DeveloperDashboard(): React.ReactElement
{
    const currentSession: Session | null = useContext<Session | null>(SessionContext);
    const [newMessageCount, setNewMessageCount] = useState<number|null>(null);
    const [loadingText, setLoadingText] = useState<string>(".");

    useEffect(()=> {
        if(!newMessageCount)
        {
            const interval = setInterval(() => {setLoadingText((loadingText === "......" )? "." : loadingText+".");console.log(loadingText)}, 500);
            return () => clearInterval(interval)
        }
    },[loadingText]);

    // const fetchMessageCount = async () =>
    // {
    //     let {data, error} = await supabase.from("profiles")
    // }

    return(<div className="developer-dashboard-container">
        <EmoticonHeader content="Developer Dashboard" emoticon="🔧"></EmoticonHeader>
        <h2>Inbox</h2>
        {newMessageCount ? <p>{newMessageCount} new messages.</p> : 
        <p>Fetching messages{loadingText}</p>}
        <button onClick={()=>setNewMessageCount(currentSession?.expires_at ? currentSession.expires_at: null)}>stop</button>
    </div>);
}