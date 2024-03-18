import "./styles.scss";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <Box sx={{ display: "flex",justifyContent:"center" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Loader;
