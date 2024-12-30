import { useEffect, useState } from "react";
import styled from "styled-components";

export const VisitorsTracker = () => {
  const [location, setLocation] = useState({ country: "", city: "", flag: "", cityImage: "" });
  const [connectedVisitors, setConnectedVisitors] = useState(0);

  const cityImages = {
    Bogotá: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Bogota_Skyline.jpg/320px-Bogota_Skyline.jpg",
    Medellín: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Medellin.jpg/320px-Medellin.jpg",
    Cali: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Cali-Skyline.jpg/320px-Cali-Skyline.jpg",
    // Agrega más ciudades e imágenes aquí
  };

  useEffect(() => {
    // Simular nuevos visitantes conectados
    const interval = setInterval(() => {
      setConnectedVisitors((prev) => prev + 1);
    }, 5000); // Cada 5 segundos aumenta el número de visitantes (simulado)

    // Obtener la geolocalización del visitante
    const fetchVisitorLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) throw new Error("Error al obtener la ubicación");
        const data = await response.json();

        // Obtener la bandera del país usando el código del país
        const flagUrl = `https://flagcdn.com/w320/${data.country_code.toLowerCase()}.png`;

        // Imagen de la ciudad
        const cityImage = cityImages[data.city] || ""; // Imagen de ciudad o vacío si no está definida

        setLocation({
          country: data.country_name || "Desconocido",
          city: data.city || "Desconocida",
          flag: flagUrl,
          cityImage,
        });
      } catch (error) {
        console.error("Error al obtener la ubicación:", error);
        setLocation({ country: "Desconocido", city: "", flag: "", cityImage: "" });
      }
    };

    fetchVisitorLocation();

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, []);

  return (
    <TrackerVisitors>
      <div className="tracker">
        <h2 className="tracker-title">Visitantes Conectados</h2>
        <p className="tracker-visitors">Visitantes: {connectedVisitors}</p>
        <div className="tracker-grid">
          {location.country !== "Desconocido" && (
            <div className="tracker-flex">
              <img src={location.flag} alt={`Bandera de ${location.country}`} className="tracker-flag" />
              <p className="tracker-location">
                <strong>{location.country}</strong>
              </p>
            </div>
          )}
          {location.city !== "Desconocida" && (
            <div>
              <p className="tracker-location">
                <strong>Ciudad:</strong> {location.city}
              </p>
              {location.cityImage && (
                <img
                  src={location.cityImage}
                  alt={`Vista representativa de ${location.city}`}
                  className="tracker-city-image"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </TrackerVisitors>
  );
};

const TrackerVisitors = styled.div`
  .tracker {
    display: grid;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background: var(--color-primary, #f9f9f9);
    text-align: center;
    max-width: 300px;
    color: black;

    &-grid {
      display: grid;
      gap: 4px;
      align-items: center;
      height: fit-content;
      width: fit-content;
      border: #555 1px solid;
    }
    &-flex {
      display: flex;
      gap: 4px;
      align-items: center;
      height: fit-content;
      width: fit-content;
    }

    &-title {
      font-size: 1.5em;
      margin-bottom: 10px;
      color: #555;
    }
    &-visitors {
      font-size: 1.2em;
      margin: 5px 0;
      color: #555;
    }
    &-location {
      font-size: 1em;
      color: #555;
    }
    &-flag {
      width: 25px;
      height: auto;
      margin: 10px auto;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    &-city-image {
      width: 100%;
      height: auto;
      margin-top: 10px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;
