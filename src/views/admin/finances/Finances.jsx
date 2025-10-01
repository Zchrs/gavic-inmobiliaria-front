import { useState } from "react";
import { Tabs } from "../../../components/Tabs";
import { PaymentServices, RentPayments, SellPayments } from "../../../../index";
import styled from "styled-components";

export const Finances = () => {
  const [activeTab, setActiveTab] = useState("Pagos de arriendos");

  const tabs = [
    {
      label: "Pagos de arriendos",
      content: <RentPayments id="create-property" />,
    },
    { label: "Pagos de ventas", content: <SellPayments /> },
    { label: "Pagos de servicios", content: <PaymentServices /> },
  ];
  return (
    <FinanCes>
      <div className="finances">
        <div className="finances-header">
          <h2 className="finances-header-h2">Finanzas: {activeTab}</h2>
        </div>
        <div>
          <Tabs tabs={tabs} onTabChange={setActiveTab} />
        </div>
      </div>
    </FinanCes>
  );
};

const FinanCes = styled.section`
  .finances {
    display: grid;
    width: 100%;
    height: 100%;
    gap: 20px;

    &-container {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 14px;
      @media (max-width: 480px) {
        display: grid;
      }
      &-card {
        display: grid;
        align-items: start;
        width: 100%;
        height: fit-content;
        gap: 10px;
        background: var(--deg-tertiary);
        box-shadow: var(--ds-s);
        border-radius: 15px;
        padding: 25px;
        /* border: 1px solid black; */
        &-inside {
          display: grid;
          width: 60%;
          height: 100%;
          margin: auto;
        }
      }
    }
    &-header {
      padding: 10px 0;
      gap: 12px;
      position: relative;
      display: grid;
      align-content: start;
      width: 100%;
      height: fit-content;

      &-h2 {
        display: grid;
        background: var(--deg-secondary);
        color: var(--text-tertiary);
        padding: 50px 24px;
        font-size: 35px;
        border-radius: 10px;
      }
    }
    &-services {
      display: grid;
      width: 100%;
      height: 100%;
      &-inside {
        display: grid;
        width: 100%;
        height: 100%;
        margin: auto;
        background: var(--deg-secondary);
        box-shadow: var(--ds-s);
        border-radius: 15px;
        padding: 25px;
        h2 {
          color: white;
        }
      }
    }
    &-users {
      display: grid;
      width: 100%;
      height: 100%;
      background: var(--deg-tertiary);
      box-shadow: var(--ds-s);
      border-radius: 15px;
      padding: 25px;
      &-inside {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        &-chart {
          display: grid;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
