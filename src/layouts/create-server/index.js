import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import authorsTableData from "layouts/tables/data/authorsTableData";
import { useState } from "react";

function CreateServer() {
  const { columns, rows } = authorsTableData();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [architecture, setArchitecture] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, url, architecture });
    setName("");
    setUrl("");
    setArchitecture("");
  };

  return (
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
                  New Service
                </MDTypography>
              </MDBox>
              <MDBox pt={3} px={3} pb={3}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="URL"
                        variant="outlined"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={24} md={12}>
                      <TextField
                        fullWidth
                        label="Architecture"
                        variant="outlined"
                        value={architecture}
                        style={{height:"2rem"}}
                        onChange={(e) => setArchitecture(e.target.value)}
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={3} sx={{ textAlign: "center", marginX: "auto", color: "#ffffff" }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      type="submit"
                      style={{color:"white"}}
                      sx={{ mt: 4 }} 
                    >
                      Submit
                    </Button>
                  </Grid>
                </form>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default CreateServer;
