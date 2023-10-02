import React, { useState } from "react";
import "./AccountCard.css";

export default function AccountCard(prop: {
  dataMap: Map<string, string>;
  updateAccountCallback: (inputAccount: Map<string,string>) => Promise<void>;
  isUpdating: boolean;
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
}): React.ReactElement {
  const [updateInfo, setUpdateInfo] = useState<Map<string,string>>(
    new Map( [["username", ""], ["full_name", ""], ["website", ""], ["avatar_url", ""]]));

  return (
    <div className="accountcard-container">

      <MutableFieldElement
        mutable={prop.isUpdating}
        field="username"
        value={prop.dataMap.get("username")}
        info={updateInfo}
        setInfo={setUpdateInfo}
      />
      <MutableFieldElement
        mutable={prop.isUpdating}
        field="full_name"
        value={prop.dataMap.get("full_name")}
        info={updateInfo}
        setInfo={setUpdateInfo}
      />
      <MutableFieldElement
        mutable={prop.isUpdating}
        field="website"
        value={prop.dataMap.get("website")}
        info={updateInfo}
        setInfo={setUpdateInfo}
      />
      <MutableFieldElement
        mutable={prop.isUpdating}
        field="avatar_url"
        value={prop.dataMap.get("avatar_url")}
        info={updateInfo}
        setInfo={setUpdateInfo}
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
        <button
          onClick={() => {
            prop.setIsUpdating(!prop.isUpdating);
          }}
        >
          {prop.isUpdating ? "Cancel changes" : "Click to update account info"}
        </button>
        {prop.isUpdating ? (
          <button
            onClick={() => {
              console.log(updateInfo);
              prop.updateAccountCallback(updateInfo);
            }}
          >
            {" "}
            Save Changes
          </button>
        ) : (
          <></>
        )}
      </span>
    </div>
  );
}

function MutableFieldElement(prop: {
  field: string;
  value: string | undefined;
  mutable: boolean;
  info: Map<string, string>;
  setInfo: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}): React.ReactElement {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    prop.info.set(prop.field, e.target.value);
    console.log(prop.info)
  }

  return (
    <div className="accountcard-mutable-field">
      {prop.mutable ? (
        <div className="input-field">
          <label htmlFor={prop.field + " field"}>new {prop.field}:</label>
          <input
            type="text"
            id={prop.field + " field"}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </div>
      ) : (
        <></>
      )}
      {prop.value ? (
        <p>{prop.field + ": " + prop.value}</p>
      ) : (
        <p className="empty-value">{prop.field + ": "}</p>
      )}
    </div>
  );
}
