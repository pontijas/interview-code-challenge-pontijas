import React from 'react';
import PhoneItem from './PhoneItem';
import '../stylesheets/_PhoneList.scss';

const PhoneList = (props) => {
  const htmlCode = props.phones.map((phone) => {
    return (
      <li key={phone.id}>
        <PhoneItem name={phone.name} url={phone.imageFileName} manufacturer={phone.manufacturer} />
      </li>
    );
  });

  return (
    <div className="PhoneList">
      <ul className="list__container">{htmlCode}</ul>
    </div>
  );
};

export default PhoneList;
