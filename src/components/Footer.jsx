import { useMemo } from "react";
import { useRoutesHome } from "../../index";

export const Footer = () => {

    const routes = useRoutesHome();

    const selectedRoutes = useMemo(() => {
        const selectedNames = ["tyc", "pqrs", "about us"]; // Nombres a incluir
        return routes.filter((route) => selectedNames.includes(route.name));
      }, [routes]);

      const finalRoutes = selectedRoutes;
      

  return (
    <div>
            <ul>
      {finalRoutes.map((route, index) => (
        <li key={index}>
          <a href={route.route}>{route.text}</a>
        </li>
      ))}
    </ul>
    </div>
  )
}
