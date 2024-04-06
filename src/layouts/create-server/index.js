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
    // Do something with the form data, for example, send it to a server
    console.log({ name, url, architecture });
    // Clear the form fields after submission
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
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Architecture"
                        variant="outlined"
                        value={architecture}
                        onChange={(e) => setArchitecture(e.target.value)}
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      type="submit"
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
