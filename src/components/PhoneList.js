import React from 'react';

const PhoneList = (props) => {
  const htmlCode = props.phones.map((phone) => {
    console.log(phone);
    return <li></li>;
  });

  return (
    <div className="PhoneList">
      <ul>{htmlCode}</ul>
    </div>
  );
};

export default PhoneList;
