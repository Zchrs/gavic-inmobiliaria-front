/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useState } from "react";
import { CardLeases, Loader, Pagination } from "../../../../index";
import { leases, propertyTypes } from "../../../../apiEmulated";
import { HeaderForm } from "../../../components/HeaderForm";


export const Immovables = () => {
  const [selectedWant, setSelectedWant] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedCode, setSelectedCode] = useState("");
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(leases.length / itemsPerPage);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedImmovables = leases.slice(startIndex, startIndex + itemsPerPage);



  const handleWant = (e) => {
    console.log("Sector seleccionado:", e.target.value);
    setSelectedWant(e.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleSector = (e) => {
    console.log("Sector seleccionado:", e.target.value);
    setSelectedSector(e.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleProperty = (p) => {
    setSelectedProperty(p.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleBudget = (b) => {
    setSelectedBudget(b.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleCode = (c) => {
    setSelectedCode(c.target.value); // Actualizar el estado con la opción seleccionada
  };

  return (
    <ImmoVables>
      <div className="immovables">
        <div className="immovables-header">
          <HeaderForm 
          color={"var(--bg-primary)"}
          borderbtn={"white"}
          colortextbtnhoveroutline={"white"}
          colortextbtnoutline={"white"}
          filterhoveroutline="brightness(0%) invert(100%)"
          filteroutline={"brightness(0%) invert(100%)"}
          hovercolorbtnoutline={"#ffffff2e"}
          borderbtnhoveroutline={"var(--bg-tertiary)"}
          
          colorbtnhoverprimary={"white"}
          filterprimary="brightness(0%) invert(0%)"
          filterprimaryhover="brightness(0%) invert(0%)"
          colorbtn={"var(--bg-secondary)"}
          colortextbtnprimary={"var(--text-primary)"}
          colortextbtnhoverprimary={"var(--text-primary)"}
          />
        </div>
        <div className="immovables-content grid-5fr">
          {
            loading ? (
              <Loader />
            ) : selectedImmovables.length === 0 ? (
              <p>Sin datos</p>
            ) : (
              selectedImmovables.map((itemL) => (
              <CardLeases
                key={itemL.id}
                productLink={`/products/${itemL.id}`}
                addToWish={"addwishlist-red"}
                addTocart={"addcart-red"}
                img={"default"}
                sellingsText={true}
                sellings={"999"}
                priceText={true}
                price={itemL.price}
                productInfo={itemL}
                classs={"productcard background"}
                // onClick={() => handleSetProductClick(itemL)}
                // prodHover={() => handleSetProductClick(itemL)}
                jpg="true"
                description={itemL.description}
                beforePrice={itemL.previousPrice}
                title={itemL.title}
                thumbnails={itemL.thumbnails}
                // products="portatiles"
                // ratingss={true}
                // ratings={ratings}
                product_id={itemL.id}
              />
              )
            ))
          }
        </div>
      </div>
                  <div>
                  <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                colorText="dark"
                arrowPrev="button bg-dark"
                arrowNext="button bg-dark"
              />
                  </div>
    </ImmoVables>
  );
};

const ImmoVables = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: start;

  .immovables {
    display: grid;
    align-items: start;
    width: 100%;
    height: 100%;
    padding: 25px;
    gap: 72px;
    @media (max-width: 1024px) {
      padding: 12px;
    }

    &-header {
      display: flex;
      gap: 10px;
      background: var(--bg-primary);
      padding: 24px;
      border-radius: 5px 5px 0px 0px;
      @media (max-width: 1024px) {
        padding: 12px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &-content {
      display: grid;
    }
  }
`;
