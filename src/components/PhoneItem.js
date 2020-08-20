import React from 'react';
import '../stylesheets/PhoneItem.scss';

const PhoneItem = (props) => {
  // console.log(props.url);
  return (
    <section className="card__container">
      <h2>{props.name}</h2>
      <p>{props.manufacturer}</p>
      <img src="https://via.placeholder.com/200.png/09f/fff" alt="phone" className="card__img"></img>
    </section>
  );
};

export default PhoneItem;
