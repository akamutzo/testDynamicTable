import React from "react";
import "./App.css";
import { TableContent } from "./TableContent";
import { TableHeader } from "./TableHeader";
import { actions } from "./Actions/actions";
import { connect } from "react-redux";

export class Table extends React.Component {
  componentDidMount = () => {
    console.log("NOW RENDERS TABLE.JS");
  };
  render() {
    return (
      <div>
        <div className="title">Dynamic Table From JSON</div>
        <table className="human">
          <tbody>
            <tr>
              <TableHeader
                data={this.props.data}
                sortOrder={this.props.sortOrder}
                sortTableByKey={this.props.sortTableByKey}
              />
            </tr>
            <TableContent data={this.props.data} />
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
