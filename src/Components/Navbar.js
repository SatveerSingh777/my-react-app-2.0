// import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// props object me hote hai use {} then gives props
export default function Navbar(props) {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">{props.home}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        
        </ul>
        <button type="button" onClick={props.styleDark}  class="btn btn-dark mt-3 mx-3" >Dark</button>
        <button type="button" onClick={props.styleRed} class="btn btn-danger mt-3 mx-3" >Red</button>
        <button type="button" onClick={props.styleGreen}  class="btn btn-success mt-3 mx-3">Green</button>
        <button type="button" onClick={props.styleBlue}  class="btn btn-primary mt-3 mx-3" >Blue</button>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,

  };

Navbar.defaultProps = {
    title: "set title here",
    about: "About ",
    home: "Home"
  };