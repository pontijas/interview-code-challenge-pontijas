import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/_PhoneItem.scss';

const PhoneItem = (props) => {
  return (
    <Link to={`/phone/${props.name}`} className="card__container">
      <h2>{props.name}</h2>
      <p>{props.manufacturer}</p>
      <img src={require(`../images/${props.url}`)} title={props.name} alt="phone" className="card__img" />
    </Link>
  );
};

export default PhoneItem;
