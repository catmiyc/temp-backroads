import React from 'react';
import { pageLinks } from '../data';

const PageLink = ({ ulClass, liClass }) => {
  return (
    <ul className={ulClass} id={ulClass}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={liClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLink;
