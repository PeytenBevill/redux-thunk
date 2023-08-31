import React from "react";
import CustomTable from "./CustomTable";
import Button from "@mui/material/Button";

const Import = (props) => {
  // fill out this component

  return (
    <>
      <Button variant="contained" onClick={props.fetchMakes}>
        Import
      </Button>
      <CustomTable rows={props.makes} columns={["Id", "Make", "Actions"]} removeMake={props.removeMake} />
    </>
  );
};

export default Import;

// export default function BasicTable() {
// }
