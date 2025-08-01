
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Tabs = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label, id) => {
    setActiveTab(label);
    if (onTabChange) {
      onTabChange(label);
    }

    if (id) {
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <TabsContainer>
      <TabList>
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            esActive={tab.label === activeTab}
            onClick={() => handleTabClick(tab.label, tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabContent>
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </TabContent>
    </TabsContainer>
  );
};


Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  onTabChange: PropTypes.func,
};

const TabsContainer = styled.div`
position: relative;
display: grid;
  width: 100%;
  height: 100%;

  `;

const TabList = styled.div`
top: 0;
left: 0;
position: relative;
  display: flex;
  width: fit-content;
  height: 35px;
  gap: 5px;
  border-bottom: black 1px solid;
  @media (max-width: 826px) {
      width: 100%;
      display: grid;
      height: fit-content;
      grid-template-columns: 1fr;
    }
    `;

const Tab = styled.button`
width: fit-content;
padding: 10px 20px;
cursor: pointer;
background: ${({ esActive }) => (esActive ? 'var(--deg-secondary)' : 'var(--deg-tertiary)')};
border: none;
color: ${({ esActive }) => (esActive ? 'var(--text-tertiary)' : 'var(--text-primary)')};
outline: none;
transition: all ease .3s;
border-radius: 10px 10px 0 0;
@media (max-width: 826px) {
    font-size: 13px;
    width: 100%;
    border-radius: 0;
    &:first-child{
      border-radius: 10px 10px 0 0;
    }
    &:last-child{
      border-radius: 0 0 10px 10px;
    }
}


&:hover {
    background: var(--deg-secondary);
    color: var(--text-tertiary)
}
`;

const TabContent = styled.div`
display: grid;
width: 100%;
padding: 20px;
background: var(--bg-tertiary);
@media (max-width: 620px) {
  background: transparent;
    padding: 0px;
}
`;
