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

  required = value => (value ? undefined : 'Required');

  renderField(field) {
    return (
      <div className="form-group">
        <label htmlFor={`Input${field.label}`}>{field.label}</label>
        <input
          className="form-control"
          placeholder={field.placeholder}
          type={field.type}
          {...field.input}
          validate={field.valide}
        />
        {field.meta.touched && field.meta.error &&
          <span className="error" style={{ color: "red" }}>{field.meta.error}</span>}
      </div>
    );
  }

  render () {
    return (
      <div className="row">
        <SideBar />

        <div className="col-sm-9">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="form-group">
              <Field
                component={this.renderField}
                label="Brand"
                name="brand"
                placeholder="Aston Martin"
                type="text"
                validate={[this.required]}
                warn={this.required}
              />
            </div>
            <div className="form-group">
              <Field
                component={this.renderField}
                label="Model"
                name="model"
                placeholder="DB7"
                type="text"
                validate={[this.required]}
                warn={this.required}
              />
            </div>
            <div className="form-group">
              <Field
                component={this.renderField}
                label="Owner"
                name="owner"
                placeholder="James Bond"
                type="text"
                validate={[this.required]}
                warn={this.required}
              />
            </div>
            <div className="form-group">
              <Field
                component={this.renderField}
                label="Plate"
                name="plate"
                placeholder="007"
                type="text"
                validate={[this.required]}
                warn={this.required}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={this.props.invalid || this.props.pristine || this.props.submitting}>Add car</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: 'newCarForm' })(connect(null, { createCar })(CarsNew));
