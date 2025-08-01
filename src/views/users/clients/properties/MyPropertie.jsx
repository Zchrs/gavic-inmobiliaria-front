/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Tabs } from "../../../../components/Tabs"
import { CurrentProperty } from "./CurrentProperty";
import { PendingProperty } from "./PendingProperty";
import { RejectedProperty } from "./RejectedProperty";


export const MyPropertie = () => {
    const tabs = [
      { label: "Actual", content: <CurrentProperty id="current-property" /> },
      { label: "en curso", content: <PendingProperty /> },
      { label: "Rechazadas", content: <RejectedProperty /> },
    ];
    const [activeTab, setActiveTab] = useState("Actual");
  return (
    <div>
      <div>
        <Tabs tabs={tabs} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}
