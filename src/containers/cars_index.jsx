import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions/';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{car.brand} - {car.model}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Owner : {car.owner}</h6>
              <p className="card-text">{car.plate}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="card text-center">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Garage M.</h5>
              <p className="card-text">Best garage ever.</p>
              <Link to={`/cars/new`} className="btn btn-primary">Add a car</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-9">
          {this.renderCars()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return (bindActionCreators({ fetchCars }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
