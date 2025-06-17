/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BaseInput, BaseButton } from "../../index";
import { medellin } from "../sectors/dataSectors";
import { propertyTypes } from "../../apiEmulated";
import styled from "styled-components";
import { useState } from "react";

export const HeaderForm = ({
  action,
  color,
  colorbtn,
  colorbtnhoverprimary,
  colortextbtnprimary,
  colortextbtnhoverprimary,
  hovercolorbtntextsecondary,
  filtersecondary,
  borderbtn,
  colorbtntextsecondary,
  colorbtnhoversecondary,
  filterhoveroutline,
  filteroutline,
  colortextbtnoutline,
  colortextbtnhoveroutline,
  borderbtnhoveroutline,
  hovercolorbtnoutline,
  colorbtnoutline,
  filterprimary,
  filterprimaryhover,
  filterhover,
  onSearch,
  onClear,
}) => {
  const [filters, setFilters] = useState({
    want: "",
    sector: "",
    propertyType: "",
    budget: "",
    code: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <FormHeader
      color={color}
      colorbtn={colorbtn}
      colorbtnhoverprimary={colorbtnhoverprimary}
      borderbtn={borderbtn}
      colortextbtnprimary={colortextbtnprimary}
      colortextbtnhoverprimary={colortextbtnhoverprimary}
      colortextbtnoutline={colortextbtnoutline}
      filterhoveroutline={filterhoveroutline}
      filterprimary={filterprimary}
      filterprimaryhover={filterprimaryhover}
      filteroutline={filteroutline}
      colortextbtnhoveroutline={colortextbtnhoveroutline}
      borderbtnhoveroutline={borderbtnhoveroutline}
      hovercolorbtnoutline={hovercolorbtnoutline}
      colorbtnoutline={colorbtnoutline}
      onSearch={onSearch}
    >
      <div className="headerform">
        <div className="headerform-group">
          <div className="headerform-inside">
            <BaseInput
              inputRef={false}
              classs={"inputs normal"}
              placeholder="Quiero"
              isSelect
              options={action}
              id="want"
              name="want"
              value={filters.want}
              onChange={handleChange}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="headerform-inside">
            <BaseInput
              inputRef={false}
              classs={"inputs normal"}
              placeholder="Sector"
              isSelect
              options={medellin}
              id="sector"
              name="sector"
              value={filters.sector}
              onChange={handleChange}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="headerform-inside">
            <BaseInput
              inputRef={false}
              classs={"inputs normal"}
              placeholder="Tipo de inmueble"
              isSelect
              options={propertyTypes}
              id="propertyType"
              name="propertyType"
              value={filters.propertyType}
              onChange={handleChange}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="headerform-inside">
            <BaseInput
              inputRef={false}
              classs={"inputs normal"}
              placeholder="Presupuesto"
              id="budget"
              name="budget"
              value={filters.budget}
              onChange={handleChange}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="headerform-inside">
            <BaseInput
              inputRef={false}
              classs={"inputs normal"}
              placeholder="Código"
              id="code"
              name="code"
              value={filters.code}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="flex-s">
            <BaseButton
              classs={"button outline"}
              colortextbtnoutline={colortextbtnoutline}
              colortextbtnhoveroutline={colortextbtnhoveroutline}
              hovercolorbtnoutline={hovercolorbtnoutline}
              borderbtn={borderbtn}
              borderbtnhoveroutline={borderbtnhoveroutline}
              filteroutline={filteroutline}
              filterhoveroutline={filterhoveroutline}
              textLabel={true}
              label={"Limpiar"}
              img={true}
              icon={"trash"}
              handleClick={onClear}
            />
            <BaseButton
              classs={"button primary"}
              colorbtn={colorbtn}
              colorbtnhoverprimary={colorbtnhoverprimary}
              colortextbtnprimary={colortextbtnprimary}
              colortextbtnhoverprimary={colortextbtnhoverprimary}
              filterprimary={filterprimary}
              filterprimaryhover={filterprimaryhover}
              textLabel={true}
              label={"Buscar"}
              svg={true}
              svgIcon={"search"}
              width={"fit-content"}
              handleClick={onSearch}
            />
          </div>
        </div>
      </div>
    </FormHeader>
  );
};

const FormHeader = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  background: ${(props) => props.color || "transparent"};
  place-items: center;

  .headerform {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 30px;
    gap: 10px;

          @media (max-width: 820px) {
        display: grid;
      }

    &-inside {
      display: grid;
      width: 100%;
      height: 60px;
      align-items: center;
    }
    &-group {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      
      @media (max-width: 820px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;
