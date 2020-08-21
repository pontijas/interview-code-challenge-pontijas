import React from 'react';
import '../stylesheets/Loader.scss';

function Loader(props) {
  return props.isLoading ? (
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : null;
}

export default Loader;
