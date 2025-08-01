/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { getImg } from "../../../globalActions";
import { useEffect, useRef, useState } from "react";
import { RecentAdded, BaseInput, BaseButton } from "../../../index";
import { medellin } from "../../sectors/dataSectors";
import { ShowResultSearch } from "../../components/ShowResultSearch";



export const Home = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedCode, setSelectedCode] = useState("");
  const [selectedAction, setSelectedAction] = useState("");
  const [filters, setFilters] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showFilterError, setShowFilterError] = useState(false);
  let searchRef = useRef(null);

      useEffect(() => {
        document.title = "Gavic Inmobiliaria - Home";
      }, []);

  const handleSector = (e) => {
    setSelectedSector(e.target.value);
    setShowFilterError(false);
  };

  const handleProperty = (p) => {
    setSelectedProperty(p.target.value);
    setShowFilterError(false);
  };

  const handleBudget = (b) => {
    setSelectedBudget(b.target.value);
    setShowFilterError(false);
  };

  const handleCode = (c) => {
    setSelectedCode(c.target.value);
    setShowFilterError(false);
  };

  const handleAction = (f) => {
    setSelectedAction(f.target.value);
    setShowFilterError(false);
  };

const handleSearch = () => {
  // Mapear correctamente los nombres de parámetros que espera el backend
  const filters = {
    ...(selectedSector && { sector: selectedSector }),
    ...(selectedProperty && { type: selectedProperty }), // Cambiado a 'type' para el backend
    ...(selectedAction && { action: selectedAction }),
    ...(selectedBudget && { budget: selectedBudget }),
    ...(selectedCode && { ref: selectedCode }), // Cambiado a 'ref' para el backend
  };

  // Eliminar filtros vacíos
  const cleanedFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== "" && v !== undefined)
  );

  setFilters(cleanedFilters);
};

  const hasSelectedFilters = () => {
    return (
      selectedSector ||
      selectedProperty ||
      selectedAction ||
      selectedBudget ||
      selectedCode
    );
  };

  const handleSearchSubmit = () => {
    if (!hasSelectedFilters()) {
      setShowFilterError(true);
      return;
    }

    setShowSearch(true);
    setShowFilterError(false);

    if (searchRef.current) {
      searchRef.current.style.cssText = `
        transition: all .5s ease;
        width: 60%;
        z-index: 10;
      `;
    }
    if (window.innerWidth < 680) {
      searchRef.current.style.cssText = `
        transition: all .5s ease;
        width: 95%;
        z-index: 10;
      `;
    }

    handleSearch();
  };

  const handleClearSearch = () => {
    setShowSearch(false);
    setFilters(null);
    setSelectedSector("");
    setSelectedBudget("");
    setSelectedProperty("");
    setSelectedCode("");
    setSelectedAction("");
  };

  const handleSearchClose = () => {
    setShowSearch(false);
    setFilters(null);
      setSelectedSector("");
      setSelectedBudget("");
      setSelectedProperty("");
      setSelectedCode("");
      setSelectedAction("");
    if (searchRef.current) {
      searchRef.current.style.cssText = `
        transition: all .5s ease;
        z-index: -1;
        width: 0%;
      `;
    }
  };

  return (
    <HoMe>
      <div className="home">
        <div className="home-banner">
          <img
            loading="lazy"
            className="home-banner-img"
            src={getImg("jpg", "casa", "webp")}
            alt="banner"
          />

          <div className="home-banner-group">
            <div className="home-banner-title">
              <h2 className="h2-extra">Encuentra tu hogar</h2>
            </div>

            {showFilterError && (
              <div className="filter-error-message">
                Por favor selecciona al menos un filtro para buscar
              </div>
            )}

            <BaseInput
              id={"sector"}
              isSelect
              inputRef={false}
              classs={"inputs normal"}
              height={"40px"}
              placeholder="Sector"
              options={medellin}
              name="budget"
              value={selectedSector}
              onChange={handleSector}
            />

            <div className="home-banner-group-flex">
              <BaseInput
                id={"type"}
                isSelect
                inputRef={false}
                classs={"inputs normal"}
                height={"40px"}
                placeholder="Tipo de inmueble"
                name="type"
                value={selectedProperty}
                onChange={handleProperty}
                options={[
                  { value: "Apartamento", label: "Apartamento" },
                  { value: "Apartaestudio", label: "Apartaestudio" },
                  { value: "Bodega", label: "Bodega" },
                  { value: "Casa", label: "Casa" },
                  { value: "Casa Finca", label: "Casa Finca" },
                  { value: "Casa Local", label: "Casa Local" },
                  { value: "Local", label: "Local" },
                  { value: "Finca", label: "Finca" },
                  { value: "Oficina", label: "Oficina" },
                ]}
              />
              <BaseInput
                id={"action"}
                isSelect
                inputRef={false}
                classs={"inputs normal"}
                height={"40px"}
                placeholder="Quiero"
                name="action"
                value={selectedAction}
                onChange={handleAction}
                options={[
                  { value: "Venta", label: "Comprar" },
                  { value: "Arrendamiento", label: "Arrendar" },
                ]}
              />
            </div>

            <div className="home-banner-group-flex">
              <BaseInput
                id={"budget"}
                inputRef={false}
                classs={"inputs normal"}
                height={"40px"}
                placeholder="Presupuesto"
                name="budget"
                value={selectedBudget}
                onChange={handleBudget}
              />
              <BaseInput
                inputRef={false}
                height={"40px"}
                placeholder="Código o referencia"
                classs={"inputs normal"}
                name="ref"
                id="ref"
                value={selectedCode}
                onChange={handleCode}
              />
            </div>

            <div className="home-banner-group-btns">
              <BaseButton
                classs={"button secondary"}
                textLabel={true}
                label={"Buscar"}
                colorbtn={"var(--bg-secondary)"}
                colortextbtnsecondary={"black"}
                colorbtnhoversecondary={"var(--bg-secondary-tr)"}
                hovercolorbtntextsecondary={"var(--bg-primary)"}
                handleClick={handleSearchSubmit}
              />
              <BaseButton
                classs={"button primary"}
                textLabel={true}
                label={"Limpiar"}
                colorbtn={"var(--bg-primary)"}
                colortextbtnprimary={"white"}
                colorbtnhoverprimary={"var(--bg-primary-tr)"}
                colortextbtnhoverprimary={"white"}
                handleClick={handleClearSearch}
              />
            </div>
          </div>

          <div ref={searchRef} className="home-search">
            <div onClick={handleSearchClose} className="home-search-close">
              X
            </div>
            <div className="home-search-cards">
              {showSearch && filters && Object.keys(filters).length > 0 && (
                <ShowResultSearch filters={filters} />
              )}
            </div>
          </div>
        </div>
        <RecentAdded />
      </div>
    </HoMe>
  );
};

const HoMe = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: var(--bg-tertiary);

  .home {
    display: grid;
    width: 100%;
    height: 100%;
    gap: 50px;
    background: var(--bg-tertiary);

    &-banner {
      position: relative;
      display: grid;
      align-items: center;
      width: 100%;
      height: 550px;
      margin-bottom: 50px;

      @media (max-width: 680px) {
        padding: 0 12px;
      }

      &-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media (max-width: 800px) {
          height: 100%;
          object-fit: cover;
        }
      }

      &-title {
        z-index: 20;
        width: 100%;
      }

      &-group {
        z-index: 10;
        padding: 25px;
        width: 35%;
        height: fit-content;
        background-color: #00000060;
        border-radius: 15px;
        display: grid;
        gap: 15px;
        margin: 25px;

        @media (max-width: 1024px) {
          width: 41%;
          padding: 12px;
        }
        @media (max-width: 580px) {
          width: 100%;
          margin: auto;
          padding: 12px;
        }

        &-flex {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          width: 100%;
          gap: 5px;
        }
        &-btns {
          display: grid;
          grid-template-columns: 75% 1fr;
          gap: 5px;
          @media (max-width: 580px) {
            grid-template-columns: 70% 1fr;
          }
        }
      }

      .filter-error-message {
        color: #ff6b6b;
        text-shadow: black 0px 0px 1px, black 1px 1px 1px;
        border-radius: 10px;
        text-align: center;
        font-weight: 500;
      }
    }

    &-search {
      display: grid;
      position: absolute;
      z-index: -1;
      right: 0;
      background: white;
      border-radius: 10px;
      margin-right: 25px;
      width: 0%;
      height: 90%;
      animation: search 0.5s ease;
      overflow: hidden;

      &-close {
        position: absolute;
        border: #00000060 solid 2px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: grid;
        padding: 5px;
        place-content: center;
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
        top: 10px;
        right: 10px;
        &:hover {
          color: #ff6b6b;
          border: #ff6b6b solid 2px;
        }
      }
      &-cards {
        display: grid;
        padding: 50px 10px;
        width: 100%;
        height: 100%;
        
      }
      @media (max-width: 480px) {
        margin-right: 10px;
      }
    }
  }

  @keyframes search {
    0% {
      opacity: 0;
      width: 0%;
    }
    100% {
      opacity: 1;
      width: 70%;
    }
  }
`;
