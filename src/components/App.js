import React, { useState } from 'react';
import phonesData from '../data/phones';
import '../stylesheets/App.scss';
import PhoneList from './PhoneList';

const App = () => {
  const [phones] = useState(phonesData);

  return (
    <div className="App__container">
      <header className="header__container">
        <h1>The Ultimate Phone Catalogue</h1>
      </header>
      <main>
        <PhoneList phones={phones} />
      </main>
      <footer className="footer__container">
        <small>Footer</small>
      </footer>
    </div>
  );
};

export default App;
