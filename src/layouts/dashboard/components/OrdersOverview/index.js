import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TimelineItem from "examples/Timeline/TimelineItem";


function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Features
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
            </MDTypography>
            
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
          
        <TimelineItem
          color="info"
          title="Collaboration"
        />
        <TimelineItem
          color="info"
          title="Prompt Resolution"
        />
        <TimelineItem
          color="info"
          title="Developer Friendly"
        />
        <TimelineItem
          color="info"
          title="Same Stack Recommendations"
          
        />
        
        <TimelineItem
          color="info"
          title="Better Quality Recommendations"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
