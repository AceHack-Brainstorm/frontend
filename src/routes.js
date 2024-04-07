import Icon from "@mui/material/Icon";
import CreateServer from "layouts/create-server";
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";

const routes = [
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "dashboard",
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/dashboard",
  //   component: <Dashboard />,
  // },
  {
    type: "collapse",
    name: "Services",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Create Server",
    key: "create-server",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/create-server",
    component: <CreateServer />,
  },
];

export default routes;