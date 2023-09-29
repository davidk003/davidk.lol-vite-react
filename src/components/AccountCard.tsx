import React from "react";
import "./AccountCard.css";

export default function AccountCard(prop: {
  dataMap: Map<string, string>, isUpdating: boolean
}): React.ReactElement {
  return (
    <div className="accountcard-container">
      <MutableFieldElement
        field="username"
        value={prop.dataMap.get("username")}
        isUpdating={this.isUpdating}
      />
      <MutableFieldElement
        field="full_name"
        value={prop.dataMap.get("full_name")}
      />
      <MutableFieldElement
        field="website"
        value={prop.dataMap.get("website")}
      />
      <MutableFieldElement
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
      <button>Update Account info</button>
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
      <p>{prop.field + ": " + (prop.value ? prop.value : "empty")}</p>
      {prop.mutable }
    </div>
  );
}
