import React from "react";
import "./header.scss";
import data from "../../data";

function Header() {
  const { header } = data;
  return (
    <div className="header">
      <img src={header.img} alt={header.name} />
      <div className="name">
        <h2>
          <span>{header.name.split(" ")[0]}</span>
          <span className="orange">{header.name.split(" ")[1]}</span>
        </h2>
        <h3>
          <span>{header.position.split(" ")[0]}</span>
          <span className="orange">{header.position.split(" ")[1]}</span>
        </h3>
      </div>
      <div className="info">
        <a className="row" href={`tel:${header.mobile}`}>
          <i className="fa fa-phone"></i>
          {header.mobile}
        </a>
        <a className="row" href={`mailto:${header.email}`}>
          <i className="fa fa-envelope"></i>
          {header.email}
        </a>
        <div className="row">
          <i className="fa fa-map-location"></i>
          {header.address}
        </div>
      </div>
    </div>
  );
}

export default Header;
