import React from 'react';

import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="col-sm-3">
      <div className="card text-center">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Garage M.</h5>
          <p className="card-text">Best garage ever.</p>
          <Link to={`/cars`} className="btn btn-primary">Back to cars list</Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
