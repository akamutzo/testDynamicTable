import React from "react";
import "./App.css";
import { actions } from "./Actions/actions";
import { connect } from "react-redux";
import { TableConnect } from "./Table";

export default class App extends React.Component {
  componentDidMount = () => {
    console.log("NOW RENDERS APP.JS");
  };
  getData = () => {
    fetch(
      "https://raw.githubusercontent.com/blmzv/ah-frontend-intern/master/profiles.json"
    )
      .then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        return response.json();
      })
      .then(data => {
        console.log(data);
        this.props.setUsers(data);
      })
      .catch(function(err) {
        console.log("Fetch Error :-C", err);
      });
  };
  render() {
    return (
      <div className="App">
        <button className="fetch-button" onClick={this.getData}>
          {"TAP here to fetch"}
        </button>

        {this.props.tableData.length > 0 ? (
          <TableConnect  data={this.props.tableData} />
        ) : (
          " "
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tableData: state.tableData || []
  };
};

const mapDispatchToProps = dispatch => {
  return { setUsers: tableData => dispatch(actions.setUsers(tableData)) };
};

export const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);
