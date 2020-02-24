import React from "react";
import "./App.css";

export class TableHeader extends React.Component {
  handleColumnHeaderClick = (key, data, order) => {
    const sortKey = key;
    let tableData = [];
    tableData = data.sort((a, b) => {
      if (a[key].toUpperCase() < b[key].toUpperCase() && order === "up") {
        return -1;
      }
      if (a[key].toUpperCase() < b[key].toUpperCase() && order === "down") {
        return 1;
      }
      if (a[key].toUpperCase() > b[key].toUpperCase() && order === "up") {
        return 1;
      } else return -1;
    });
    let sortOrder = order === "up" ? "down" : "up";

    this.props.sortTableByKey(sortKey, sortOrder, tableData);
  };

  render() {
    return Object.keys(this.props.data[0]).map((key, index) => {
      return (
        <th
          key={index}
          onClick={() =>
            this.handleColumnHeaderClick(
              key,
              this.props.data,
              this.props.sortOrder
            )
          }
        >
          {key.toUpperCase()}
        </th>
      );
    });
  }
}
