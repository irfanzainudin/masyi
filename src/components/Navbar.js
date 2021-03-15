import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons';

// stylesheets
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1><FontAwesomeIcon icon={faSpinner} /></h1>
      <h1><FontAwesomeIcon icon={faUserCircle} /></h1>
      <h1><FontAwesomeIcon icon={faCog} /></h1>
    </div>
  )
}