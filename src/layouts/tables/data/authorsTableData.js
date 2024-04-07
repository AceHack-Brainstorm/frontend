import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useEffect, useState } from 'react';

export default function data() {
  const Author = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={0} lineHeight={1}>
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

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://monitor-backend.codinger.net/uptime-monitors");
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData);
      console.log(data[1].name)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // fetch("https://monitor-backend.codinger.net/uptime-monitors")
  //           .then((res) => res.json())
  //           .then((console.log))
  //           .catch(console.error)

  return {
    data: data,
    columns: [
      { Header: "action", accessor: "action", align: "center" },
      { Header: "author", accessor: "author", width: "45%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "Last Checked", accessor: "Last Checked", align: "center" },
    ],

    rows: data.map((d, index) => ({
      author: <Author name={d?.name} email={d?.url} />,
      function: <Job title="Type" description="Website" />,
      status: (
        <MDBox ml={0}>
          <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      employed: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/x
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
    })),
  };
}

