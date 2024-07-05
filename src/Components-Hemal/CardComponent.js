import React from 'react';
import './CardComponent.css';

const CardComponent = ({ acceptedPayments, rejectedPayments, Total,pendingPayments }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Accepted </h5>
          <p className="card-text">{acceptedPayments}</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Rejected </h5>
          <p className="card-text">{rejectedPayments}</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Pending</h5>
          <p className="card-text">{pendingPayments}</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Total Amount</h5>
          <p className="card-text">Rs: {Total}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
