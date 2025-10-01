
export const useRoutesDashClients = () => {

  return [
    {
      name: "General",
      route: "/dashboard/general",
      text: "General",
    },
    {
      name: "Views",
      route: "/dashboard/my-views",
      text: "Inmebles vistos",
    },
    {
      name: "Favorites",
      route: "/dashboard/favorites",
      text: "Favoritos",
    },
    {
      name: "Actual",
      route: "/dashboard/refund-&-returns",
      text: "Inmueble actual",
    },
    {
      name: "valorations",
      route: "/dashboard/valorations",
      text: "Calificaciones",
    },
    {
      name: "Help",
      route: "/dashboard/helpcenter",
      text: "Centro de ayuda",
    },
    {
      name: "PQRS",
      route: "/dashboard/pqrs",
      text: "",
    },
    {
      name: "sugestions",
      route: "/dashboard/suggestions",
      text: "",
    },
    {
      name: "settings",
      route: "/dashboard/settings",
      text: "",
    },
  ];
};
export const useRoutesDashAdmin = () => {
  return [
    {
      name: "General",
      route: "/admin/dashboard",
      text: "General",
    },
    {
      name: "reports",
      route: "reports",
      text: "Reportes",
    },
    {
      name: "statics",
      route: "statics",
      text: "Estadísticas",
    },
    {
      name: "usuarios",
      route: "users",
      text: "Usuarios y perfiles",
    },
    {
      name: "properties-for-rent",
      route: "for-rent",
      text: "Propiedades en arrendamiento",
    },
    {
      name: "leased-properties",
      route: "leased-properties",
      text: "Propiedades arrendadas",
    },
    {
      name: "pending aproval",
      route: "pending-approval-properties",
      text: "Pendientes de aprobación",
    },
    {
      name: "recent properties",
      route: "recent-properties",
      text: "Propiedades recientes",
    },
    {
      name: "user verify",
      route: "verify-profile",
      text: "Verificación de usuarios",
    },
    {
      name: "finances",
      route: "finances",
      text: "Finanzas",
    },
    {
      name: "clients",
      route: "clients",
      text: "Usuarios",
    },
  ];
};
export const useRoutesDashAdvisors = () => {
  return [
    {
      name: "General",
      route: "/admin/dashboard",
      text: "General",
    },
    {
      name: "reports",
      route: "reports",
      text: "Reportes",
    },
    {
      name: "pending",
      route: "orders/pending",
      text: "Pedidos pendientes",
    },
    {
      name: "complete",
      route: "orders/complete",
      text: "Pedidos completados",
    },
    {
      name: "orders",
      route: "orders",
      text: "Pedidos",
    },
    {
      name: "users",
      route: "users",
      text: "Usuarios",
    },
    {
      name: "validations",
      route: "validations",
      text: "Validaciones",
    },
    {
      name: "finances",
      route: "finances",
      text: "Finanzas",
    },
    {
      name: "sugestions",
      route: "discounts",
      text: "Descuentos",
    },
    {
      name: "products",
      route: "products",
      text: "Productos",
    },
    {
      name: "settings",
      route: "settings",
      text: "Ajustes",
    },
  ];
};
export const useRoutesHome = () => {

  return [
    { name: "home", route: "/", text: "Inicio" },
    { name: "tyc", route: "/tyc", text: "Términos y condiciones" },
    { name: "about", route: "about/#about", text: "Sobre nosotros" },
    { name: "targets", route: "/about/#targets", text: "Objetivos generales" },
    { name: "vision", route: "/about/#vision", text: "Visión" },
    { name: "about us", route: "/about-us", text: "Sobre nosotros" },
    { name: "mision", route: "/about/#mision", text: "Misión" },
    { name: "immovables", route: "/immovables", text: "Propiedades" },
    { name: "list your property", route: "/List-your-property", text: "Consigna tu inmueble" },
    { name: "leases", route: "/leases", text: "Arrendamiento" },
    { name: "sales", route: "/sales", text: "Venta" },

    { name: "register", route: "/auth/client-register", text: "Registro" },
    { name: "login", route: "/auth/client-login", text: "Iniciar sesión" },
    {
      name: "values",
      route: "about/#values",
      text: "Valores",
    },
    { name: "quality policy", route: "/about/#qap", text: "Política de calidad" },
    {
      name: "coverage",
      route: "/#coverage",
      text: "Cobertura",
    },
    { name: "helpcenter", route: "/helpcenter", text: "Centro de ayuda"},
    { name: "contact", route: "/contact", text: "Contacto" },
    { name: "pqrs", route: "/pqrs", text: "Haznos un pqrs" },
    {
      name: "privacy policy",
      route: "/#privacy-policy",
      text: "Política de privacidad",
    },
    {
      name: "data treathment",
      route: "/#data-treatment",
      text: "Tratamiento de datos",
    },
    {
      name: "superintendencia de industria y comercio",
      route: "/#superintendency-of-industria-and-commerce",
      text: "Super intendencia de industria y comercio(SIC)",
    },
    { name: "login", route: "/auth/advisor/login", text: "Iniciar sesión" },
    { name: "register", route: "/auth/advisor/register", text: "Registrarme" },
  ];

};
