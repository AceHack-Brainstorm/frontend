import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "action", accessor: "action", align: "center" },
      { Header: "author", accessor: "author", width: "45%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "Last Checked", accessor: "Last Checked", align: "center" },
    ],

    rows: [
      {
        author: <Author name="Google Service" email="https://www.google.co.in/" />,
        function: <Job title="Type" description="Website" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <>
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
          
          <MDTypography ml={"1rem"} component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Delete
        </MDTypography>
        </>
        ),
      },
    ],
  };
}
