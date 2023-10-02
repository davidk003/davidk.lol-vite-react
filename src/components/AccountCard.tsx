import React from "react";
import "./AccountCard.css";

export default function AccountCard(prop: {
  dataMap: Map<string, string>, isUpdating: boolean, setIsUpdating:React.Dispatch<React.SetStateAction<boolean>>
}): React.ReactElement {
  return (
    <div className="accountcard-container">
      <MutableFieldElement mutable={prop.isUpdating}
        field="username"
        value={prop.dataMap.get("username")}
      />
      <MutableFieldElement mutable={prop.isUpdating}
        field="full_name"
        value={prop.dataMap.get("full_name")}
      />
      <MutableFieldElement mutable={prop.isUpdating}
        field="website"
        value={prop.dataMap.get("website")}
      /> 
      <MutableFieldElement mutable={prop.isUpdating}
        field="avatar_url"
        value={prop.dataMap.get("avatar_url")}
      />
      <p className="accountcard-immutable-field">
        {"id: " + (prop.dataMap.get("id") ? prop.dataMap.get("id") : "empty")}
      </p>
      <p className="accountcard-immutable-field">
        {"last_updated: " +
          (prop.dataMap.get("last_updated")
            ? prop.dataMap.get("last_updated")
            : "empty")}
      </p>
      <span>
      <button onClick={()=>{prop.setIsUpdating(!prop.isUpdating)}}>{prop.isUpdating? "Cancel changes" : "Click to update account info" }</button>
      {prop.isUpdating ? <button onClick={()=>{console.log("Insert function here")}}> Save Changes</button> : <></>}
      </span>
    </div>
  );
}

function MutableFieldElement(prop: {
  field: string;
  value: string | undefined;
  mutable: boolean
}): React.ReactElement {
  return (
    <div className="accountcard-mutable-field">
        {prop.mutable? (<div className="input-field">
        <label htmlFor={prop.field + " field"}>
            new {prop.field}: 
        </label>
        <input id={prop.field + " field"}></input>
      </div>) : <></>}
      <p>{prop.field + ": " + (prop.value ? prop.value : "empty")}</p>
    </div>
  );
}
