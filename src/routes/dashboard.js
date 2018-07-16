import DashboardContainer from "../components/containers/DashboardContainer.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Semantic Dashboard",
    icon: "Dashboard",
    component: DashboardContainer
  },
  { 
    redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect"
  }
];

export default dashboardRoutes;
