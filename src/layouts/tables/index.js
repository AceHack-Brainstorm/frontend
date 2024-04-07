import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import Dashboard from "layouts/dashboard";
import authorsTableData from "layouts/tables/data/authorsTableData";
import { useState } from "react";

function Tables() {

  const [id, setId] = useState();
  const [serviceName, setServiceName] = useState();
  const [arch, setArch] = useState();
  const [rec, setRec] = useState();

  function getDetails(id, serviceName, arch, rec){
    setId(id)
    setServiceName(serviceName)
    setArch(arch)
    setRec(rec)
  } 

  function clearDashboard(){
    setId(null)
    setServiceName(null)
    setArch(null)
    setRec(null)
  } 

  const { data, columns, rows } = authorsTableData();
  return id != null?(<Dashboard id={id} serviceName={serviceName} arch={arch} redc={rec} clearDashboard={clearDashboard}/>):(    
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Services 
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ data, columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                  getDetails={getDetails}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;