import React from "react";
import "./App.css";

export class TableContent extends React.Component {
  componentDidMount = () => {
    console.log("NOW RENDERS TableContent.JS")
  }
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
