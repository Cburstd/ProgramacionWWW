import React from 'react'

function Card({ title, description, category, imageUrl }) {
    return (
      <div className="col-md-4 card-item" data-category={category}>
        <div className="card">
          <div className="row">
            <div className="col-4">
              <img src={imageUrl} className="img-fluid" />
            </div>
            <div className="col-8">
              <div className="card-body text-end">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-category">{category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;