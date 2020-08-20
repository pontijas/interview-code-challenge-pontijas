import React, { useState } from 'react';
import phonesData from '../data/phones';
import '../stylesheets/App.scss';
import PhoneList from './PhoneList';

const App = () => {
  const [phones] = useState(phonesData);

  return (
    <div className="App_container">
      <header className="header_container">
        <h1>The Ultimate Phone Catalogue</h1>
      </header>
      <main>
        <PhoneList phones={phones} />
      </main>
      <footer className="footer_container">
        <small>Footer</small>
      </footer>
    </div>
  );
};

export default App;
