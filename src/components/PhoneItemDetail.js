import React from 'react';
import '../stylesheets/PhoneItemDetail.scss';
import phone2 from '../images/Galaxy_S7.png';

const PhoneItemDetail = (props) => {
  console.log(props.phones);
  // props es un objeto que se llama phones y contiene ocho arrays. Cada array se llama como el número del index.

  return (
    <div className="modal__background">
      <div className="modal__dialogue">
        <article className="modal__container">
          <div className="modal__header">
            <section>
              <h2>Phone Name</h2>
              <p>Manufacturer</p>
            </section>
            <button>Go Back</button>
          </div>
          <div className="modal__info">
            <img src={phone2} tile="" alt="phone" className="modal__img"></img>
            <section className="modal__properties">
              <ul className="modal__list">
                <li className="modal__listItem">
                  <p className="modal__description">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, laborum officiis! Perferendis corporis perspiciatis suscipit molestiae! Molestiae cupiditate accusantium in delectus culpa et suscipit tempore quisquam? Earum quos aut iure.</p>
                </li>
                <li className="modal__listItem">
                  <small>Color: </small>lorem ipsum ...
                </li>
                <li className="modal__listItem">
                  <small>Screen: </small>lorem ipsum ...
                </li>
                <li className="modal__listItem">
                  <small>Processor: </small>lorem ipsum ...
                </li>
                <li className="modal__listItem">
                  <small>Ram: </small>lorem ipsum ...
                </li>
                <li>price</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PhoneItemDetail;
