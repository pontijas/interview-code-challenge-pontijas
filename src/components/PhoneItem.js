import React from 'react';
import phone1 from '../images/IPhone_7.png';
// import phone2 from '../images/Galaxy_S7.png';
// import phone3 from '../images/Honor_10.png';
// import phone4 from '../images/P10_Lite.jpg';
// import phone5 from '../images/Nokia_7.1.jpg';
// import phone6 from '../images/ZenPhone_5.jpg';
// import phone7 from '../images/Xiaomi_MI_A2.jpeg';
// import phone8 from '../images/Moto_G6.png';
import '../stylesheets/PhoneItem.scss';

const PhoneItem = (props) => {
  return (
    <a href={`#/phone/${props.name}`} className="card__container">
      <h2>{props.name}</h2>
      <p>{props.manufacturer}</p>
      <img src={phone1} title={props.name} alt="phone" className="card__img"></img>
    </a>
  );
};

export default PhoneItem;
