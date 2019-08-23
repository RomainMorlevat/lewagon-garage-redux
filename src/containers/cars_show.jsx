import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deleteCar, fetchCar } from '../actions';
import SideBar from '../components/side_bar';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  deleteClick = () => {
    this.props.deleteCar(this.props.car, this.props.history.push('/'));
  }

  render () {
    return (
      <div className="row">
        <SideBar />

        <div className="col-sm-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.car.brand} - {this.props.car.model}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Owner : {this.props.car.owner}</h6>
              <p className="card-text">{this.props.car.plate}</p>
              <button className="btn btn-danger" onClick={this.deleteClick}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCar, fetchCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
