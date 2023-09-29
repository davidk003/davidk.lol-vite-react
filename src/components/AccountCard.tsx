import React from "react";
import "./AccountCard.css"

export default function AccountCard(prop:{dataMap: Map<string, string>}):React.ReactElement
{
    
    return(
        <div className="accountcard-container">
            <AccountMutableFieldElement field="username" value={prop.dataMap.get("username")}/>
            <AccountMutableFieldElement field="full_name" value={prop.dataMap.get("full_name")}/>
            <AccountMutableFieldElement field="website" value={prop.dataMap.get("website")}/>
            <AccountMutableFieldElement field="avatar_url" value={prop.dataMap.get("avatar_url")}/>
            <p className="accountcard-immutable-field">{"id: " +  (prop.dataMap.get("id") ? prop.dataMap.get("id") : "empty")}</p>
            <p className="accountcard-immutable-field">{"last_updated: " +  (prop.dataMap.get("last_updated") ? prop.dataMap.get("last_updated") : "empty")}</p>
        </div>
    );
}

function AccountMutableFieldElement(prop:{field:string, value:string|undefined}):React.ReactElement
{
    return (<p className="accountcard-mutable-field">{prop.field + ": " + (prop.value ? prop.value : "empty")}</p>);
}