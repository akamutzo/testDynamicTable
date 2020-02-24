import React from "react";
import "./App.css";

export class TableContent extends React.Component {
  render() {
    return this.props.data.map(i => (
      <tr>
        {Object.keys(i).map(k => (
          <td>{i[k]}</td>
        ))}
      </tr>
    ));
  }
}
