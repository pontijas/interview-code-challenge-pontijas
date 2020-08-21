import React, { useState } from 'react';
import phonesData from '../data/phones';
import '../stylesheets/App.scss';
import PhoneList from './PhoneList';
import PhoneItemDetail from './PhoneItemDetail';

const App = () => {
  const [phones] = useState(phonesData);

  return (
    <div className="App__container">
      <header className="header__container">
        <h1>The Ultimate Phone Catalogue</h1>
      </header>
      <main>
        <PhoneList phones={phones} />
        <PhoneItemDetail />
      </main>
      <footer className="footer__container">
        <small>GuideSmiths Interview Challenge</small>
        <small>&copy; Cristina Pontijas 2020 </small>
      </footer>
    </div>
  );
};

export default App;
