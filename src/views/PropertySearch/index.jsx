import React, { useState } from "react";
import DataTable from "../../components/Table";
import "./styles.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FilterCard from "../../components/FilterCard";
import { columns, rows } from "../../utilities/static";
import { Link } from "react-router-dom";

const PropertySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedType, setSelectedType] = useState("All");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filteredData = rows.filter((row) =>
      row.address.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredRows(filteredData);
  };

  const handleRowClick = (params) => {
    setSelectedProperty(params);
  };

  const handlePropertyTypeClick = (propertyType) => {
    setSelectedType(propertyType);
    const filteredData = rows.filter((row) => row.type === propertyType);
    setFilteredRows(filteredData);
  };

  const selected = rows.filter((row) => selectedProperty?.includes(row.id));
  return (
    <div>
      <div className="nav-to">
        <Link to={"/blogs"}>
          <Button variant="contained">Go to Blogs</Button>
        </Link>
      </div>
      <div className="table">
        <div className="w-50">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="flex">
          <FilterCard
            handlePropertyTypeClick={handlePropertyTypeClick}
            selectedType={selectedType}
          />
          <DataTable
            row={rows}
            columns={columns}
            filteredRows={filteredRows}
            searchQuery={searchQuery}
            handleRowClick={handleRowClick}
            selected={selected}
            selectedProperties={selectedProperty}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
