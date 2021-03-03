import React, { Component } from 'react';

import { connect } from "react-redux";

class ActiveCity extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.activeCity) {
      return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`}/>
      </div>
      );
    }
    else {
      return (
        <div></div>
        )
    };
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
