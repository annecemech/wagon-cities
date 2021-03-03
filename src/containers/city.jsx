import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setActiveCity } from "../actions";

class City extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  };

  render() {
    return (
    <div className="list-group-item" onClick={this.handleClick}>
      {this.props.name}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
