import { tours } from '../data';

import React from 'react';

const Tour = () => {
  return tours.map((tour) => {
    const { id, img, date, title, text, icon, place, days, price } = tour;
    return (
      <article className="tour-card" key={id}>
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{text}</p>
          <div className="tour-footer">
            <p>
              <span>
                <i className={icon}></i>
              </span>
              {place}
            </p>
            <p>{days}</p>
            <p>{price}</p>
          </div>
        </div>
      </article>
    );
  });
};

export default Tour;
