import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions';
import City from './city';


class CityList extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
    <div className="cities">
      {this.props.cities.map((city) => {
        return <City key={city.slug} slug={city.slug} name={city.name} address={city.address} city={city} />
      })}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
