import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/_PhoneItemDetail.scss';
import phone2 from '../images/Galaxy_S7.png';

const PhoneItemDetail = (props) => {
  return (
    <div className="modal__background">
      <div className="modal__dialogue">
        <article className="modal__container">
          <div className="modal__header">
            <section>
              <h2>{props.phone.name}</h2>
              <p>{props.phone.manufacturer}</p>
            </section>
            <Link to="/#">
              <span className="modal__icon fas fa-times-circle"></span>
            </Link>
          </div>
          <div className="modal__info">
            <img src={phone2} title={props.phone.name} alt="phone" className="modal__img"></img>
            <section className="modal__properties">
              <ul className="modal__list">
                <li className="modal__listItem">
                  <p className="modal__description">{props.phone.description}</p>
                </li>
                <li className="modal__listItem">Color : {props.phone.color}</li>
                <li className="modal__listItem">Screen: {props.phone.screen}</li>
                <li className="modal__listItem">Processor: {props.phone.processor}</li>
                <li className="modal__listItem">Ram: {props.phone.ram}</li>
                <li>Price: {props.phone.price}</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PhoneItemDetail;
