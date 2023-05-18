import React from 'react';
import { socialLinks } from '../data';

const SocialLink = ({ ulClass, liClass }) => {
  return (
    <ul className={ulClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className={liClass}>
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLink;
