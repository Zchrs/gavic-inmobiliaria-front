/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BaseInputSelect, BaseButton, CardLeases, Loader, Pagination } from "../../../../index";
import styled from "styled-components";
import { leases, propertyTypes } from "../../../../apiEmulated";
import { values } from "../../../sectors/dataSectors";


export const Sales = () => {
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
  const selectedSell = leases.slice(startIndex, startIndex + itemsPerPage);


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
    <SaLes>
            <div className="sales">
        <div className="sales-header">
          <div>
            <BaseInputSelect
              placeholder="Quiero"
              isSmallSelect={true}
              options={[
                { value: "Comprar", label: "Comprar" },
              ]}
              name="want"
              value={selectedWant}
              onChange={handleWant}
            />
          </div>
          <div>
            <BaseInputSelect
              placeholder="Sector"
              isSelect={true}
              options={values}
              name="budget"
              value={selectedSector}
              onChange={handleSector}
            />
          </div>
          <div>
            <BaseInputSelect
              placeholder="Tipo de inmueble"
              isSelect={true}
              name="property"
              value={selectedProperty}
              onChange={handleProperty}
              options={propertyTypes}
            />
          </div>
          <div>
            <BaseInputSelect
              placeholder="Presupuesto"
              isSelect={true}
              name="budget"
              value={selectedBudget}
              onChange={handleBudget}
              options={[
                { value: "option1", label: "$1000 - $5000" },
                { value: "option2", label: "$5000 - $10,000" },
                { value: "option3", label: "Más de $10,000" },
                { value: "option4", label: "Más de $10,000" },
                { value: "option5", label: "Más de $10,000" },
                { value: "option6", label: "Más de $10,000" },
                { value: "option7", label: "Más de $10,000" },
              ]}
            />
          </div>
          <div>
            <BaseInputSelect
              placeholder="Código"
              classs={"inputs normal"}
              name="code"
              value={selectedCode}
              onChange={handleCode}
              options={[
                { value: "option1", label: "Código 1" },
                { value: "option2", label: "Código 2" },
                { value: "option3", label: "Código 3" },
              ]}
            />
          </div>
          <div className="flex-s">
            <BaseButton
              classs={"button full-outline"}
              textLabel={true}
              label={"Limpiar"}
              img={true}
              icon={"trash"}
            />

            <BaseButton
              classs={"button full-primary"}
              textLabel={true}
              label={"Buscar"}
              svg={true}
              // handleClick={whatsapp}
            />
          </div>
        </div>
        <div className="sales-content grid-4fr">
          {
            loading ? (
              <Loader />
            ) : selectedSell.length === 0 ? (
              <p>Sin datos</p>
            ) : (
            selectedSell.map((itemL) => (
              <CardLeases
                key={itemL.id}
                productLink={`/products/${itemL.id}`}
                addToWish={"addwishlist-red"}
                addTocart={"addcart-red"}
                img={"default"}
                boxFlex={true}
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
    </SaLes>
  )
}

const SaLes = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: start;

  .sales {
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
      background: #ff7300;
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
