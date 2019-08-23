import React, { Component } from 'react';

import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import SideBar from '../components/side_bar';
import { createCar } from '../actions/';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  render () {
    return (
      <div className="row">
        <SideBar />

        <div className="col-sm-9">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="form-group">
              <label htmlFor="InputBrand">Brand</label>
              <Field name="brand" type="text" placeholder="Aston Martin" component="input" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="InputModel">Model</label>
              <Field name="model" type="text" placeholder="DB Mark III" component="input" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="InputOwner">Owner</label>
              <Field name="owner" type="text" placeholder="James Bond" component="input" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPlate">Plate</label>
              <Field name="plate" type="text" placeholder="DB Mark III" component="input" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Add car</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: 'newCarForm' })(connect(null, { createCar })(CarsNew));
