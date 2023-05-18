import React from 'react';
import { services } from '../data';
const service = () => {
  return services.map((service) => {
    const { serviceIcon, serviceTitle, serviceText, id } = service;
    return (
      <article className="service" key={id}>
        <span className="service-icon">
          <i className={serviceIcon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{serviceTitle}</h4>
          <p className="service-text">{serviceText}</p>
        </div>
      </article>
    );
  });
};

export default service;
