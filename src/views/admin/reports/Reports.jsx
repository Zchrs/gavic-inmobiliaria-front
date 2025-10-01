import { useState } from "react";
import { Tabs } from "../../../components/Tabs";


export const Reports = () => {
  const [activeTab, setActiveTab] = useState("Crear Propiedad");

  const tabs = [
    { label: "Pagos de arriendos", content: <CreateProperty id="create-property" /> },
    { label: "Pagos de ventas", content: <Approved /> },

  ];
  return (
    <div>
            <div className="clients">
        <h2 className="clients-h2">Propiedades: {activeTab}</h2>
        <div>
          <Tabs tabs={tabs} onTabChange={setActiveTab} />
        </div>
      </div>
    </div>
  )
}
