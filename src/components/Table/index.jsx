import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { isEmpty } from "lodash";
import "./styles.scss";
import { columns, rows } from "../../utilities/static";


export default function DataTable({
  filteredRows,
  handleRowClick,
  selectedProperties,
  selected,
}) {
  return (
    <div style={{ height: 400, width: "80%" }}>
      {selectedProperties?.length > 0 && (
        <div style={{ width: "100%", marginBottom: 50 }}>
          <h2 className="tb-title"> Selected Properties</h2>
          <DataGrid
            style={{ background: "#e7eaf6" }}
            rows={selected}
            columns={columns}
            pageSize={5}
          />
        </div>
      )}
      <h2 className="tb-title"> Search Results</h2>
      <DataGrid
        style={{ background: "#e7eaf6" }}
        rows={!isEmpty(filteredRows) ? filteredRows : rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={handleRowClick}
      />
    </div>
  );
}
