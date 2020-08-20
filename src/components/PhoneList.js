import React from 'react';
import PhoneItem from './PhoneItem';
import '../stylesheets/PhoneList.scss';

const PhoneList = (props) => {
  const htmlCode = props.phones.map((phone) => {
    // console.log(phone.imageFileName);
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
