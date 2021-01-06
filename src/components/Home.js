import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getCalculatedTax } from "../services/tax";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income: "",
      fields: {},
      errors: {}
    };
  }

  submitForm(e) {
    e.preventDefault();
    getCalculatedTax(this.state.income).then((response) =>{ 
    if(response.message === 'Success'){
      this.props.history.push({
        pathname: "/CalculateTax",
        state: { income: this.state.income, bracket: response.bracket, totalTax: response.totalTax },
      });
    }else(
      console.log("Error retrieving Tax bracket!")
    )
  });
  }

  render() {
    return (
      <div>
        <form className="Home" onSubmit={this.submitForm.bind(this)}>
          <div className="form-group row">
            <label className="Home-text col-sm-2 col-form-label mt-2">
              Enter Gross Income:
            </label>
            <div className="col-sm-6 form-group row">
              <input
                required
                className="form-control mt-2"
                id="income"
                type="number"
                placeholder="Enter Gross Income (in CAD)"
                value={this.state.income}
                onChange={(e) => this.setState({ income: e.target.value })}
              />
              <button type="submit" className="btn btn-info mt-4">
                Calculate
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Home);
