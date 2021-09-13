import React, { Component } from "react";

export class CustomPrompt extends Component {
  
  render() {
    if (this.props.show) {
      return <div className="alert alert-warning m-2 text-center">
        <h4 className="alert-heading">Ostrzeżenie o nawigacji</h4>
        {this.props.message}
        <div className="p-1">
          <button className="btn btn-primary m-1"
            onClick={() => this.props.callback(true)}>
            Tak
          </button>
          <button className="btn btn-secondary m-1"
            onClick={() => this.props.callback(false)}>
            Nie
          </button>
        </div>
      </div>
    }
    return null;
  }
}