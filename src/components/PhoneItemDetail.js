import React from 'react';
import '../stylesheets/PhoneItemDetail.scss';

const PhoneItemDetail = (props) => {
  console.log('using PhoneItemDetail');
  return (
    <article className="modal__container">
      <div className="modal__header">
        <section>
          <h2>Phone Name</h2>
          <p>Manufacturer</p>
        </section>
        <button>Go Back</button>
      </div>
      <div className="modal__info">
        <img src="" tile="" alt="phone" className="modal__img"></img>
        <section className="modal__properties">
          <p className="modal__description">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, laborum officiis! Perferendis corporis perspiciatis suscipit molestiae! Molestiae cupiditate accusantium in delectus culpa et suscipit tempore quisquam? Earum quos aut iure.</p>
          <ul className="modal__list">
            <li>
              <small>color:</small>lorem ipsum ...
            </li>
            <li>
              <small>screen:</small>lorem ipsum ...
            </li>
            <li>
              <small>processor:</small>lorem ipsum ...
            </li>
            <li>
              <small>ram:</small>lorem ipsum ...
            </li>
            <li>price</li>
          </ul>
        </section>
      </div>
    </article>
  );
};

export default PhoneItemDetail;
