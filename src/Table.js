import React from "react";
import "./App.css";
import { actions } from "./Actions/actions";
import { connect } from "react-redux";

export default class Table extends React.Component {
  renderTableContent() {
    return this.props.data.map(i => (
      <tr>
        {Object.keys(i).map(k => (
          <td>{i[k]}</td>
        ))}
      </tr>
    ));
  }

  handleColumnHeaderClick = key => {
    let sortKey = key;
    let tableData = [];
    tableData = this.props.data.sort((a, b) => {
      if (a[key].toUpperCase() < b[key].toUpperCase() && this.props.sortOrder === "up") {
        return -1;
      }
      if (a[key].toUpperCase() < b[key].toUpperCase() && this.props.sortOrder === "down") {
        return 1;
      }
      if (a[key].toUpperCase() > b[key].toUpperCase() && this.props.sortOrder === "up") {
        return 1;
      } else return -1;
    });
    let sortOrder = this.props.sortOrder === "up" ? "down" : "up";
    console.log(sortOrder);
    console.log(this.props.sortTableByKey);

    this.props.sortTableByKey(sortKey, sortOrder, tableData);
  };

  renderTableHeader() {
    return Object.keys(this.props.data[0]).map((key, index) => {
      return (
        <th key={index} onClick={() => this.handleColumnHeaderClick(key)}>
          {key.toUpperCase()}
        </th>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="title">Dynamic Table From JSON</div>
        <table className="human">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableContent()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sortKey: state.sortKey,
    sortOrder: state.sortOrder,
    dataTable: state.dataTable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sortTableByKey: (sortKey, sortOrder, tableData) =>
      dispatch(actions.sortTableByKey(sortKey, sortOrder, tableData))
  };
};

export const TableConnect = connect(mapStateToProps, mapDispatchToProps)(Table);
