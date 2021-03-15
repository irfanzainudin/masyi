import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookmark, faShoePrints, faHeart } from '@fortawesome/free-solid-svg-icons';
// wanna use this, but may look a bit too similar to Duolingo
// import { faFireAlt, faShoePrints } from '@fortawesome/free-solid-svg-icons';

// stylesheets
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <h1><FontAwesomeIcon icon={faBook} /></h1>
      <div className="h1-span">
        <span><FontAwesomeIcon icon={faBookmark} /></span>
        <span>20</span>
      </div>
      <div className="h1-span">
        <span><FontAwesomeIcon icon={faShoePrints} /></span>
        <span>10</span>
      </div>
      <div className="h1-span">
        <span><FontAwesomeIcon icon={faHeart} /></span>
        <span>5</span>
      </div>
    </div>
  )
}