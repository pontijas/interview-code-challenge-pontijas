import React from 'react';

const PhoneItem = (props) => {
  // console.log(props.url);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.manufacturer}</p>
      <img src="https://via.placeholder.com/200.png/09f/fff" alt="phone"></img>
    </div>
  );
};

export default PhoneItem;
