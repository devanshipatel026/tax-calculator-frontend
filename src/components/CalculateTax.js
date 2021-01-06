import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CalculateTax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income: "",
    };
  }

  goBack(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: "/",
      state: { income: this.props.location.state.income },
    });
  }

  render() {
    return (
         
      <div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={this.goBack.bind(this)}
        >
          Back
        </button>
        <table className="table mt-5 text-center">
          <thead className="thead-light">
            <tr>
              <th>Federal Tax Bracket</th>
              <th>Federal Tax Rates</th>
              <th>Federal Tax Amount Applicable</th>
            </tr>
          </thead>
          <tbody>
          {this.props.location.state.bracket.map(( taxBracket, index ) => (
            <tr key={index}>
              <td>{taxBracket.title}</td>
              <td>{taxBracket.percentage}%</td>
              <td>${taxBracket.taxAmount}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2" style={{"textAlign":"right"}}>Total Federal Tax:</td>
            <td>${this.props.location.state.totalTax}</td></tr>
          </tbody>
        </table>
      </div>
      );
  }
}

export default withRouter(CalculateTax);
