import React from 'react';
import Title from './Title';
import Service from './Service';
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="service"></Title>

      <div className="section-center services-center">
        <Service />
      </div>
    </section>
  );
};

export default Services;
