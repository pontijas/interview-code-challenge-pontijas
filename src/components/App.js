import React, { useState } from 'react';
import phonesData from '../data/phones';
import '../stylesheets/App.scss';
import PhoneList from './PhoneList';

const App = () => {
  const [phones] = useState(phonesData);

  return (
    <div>
      <header>The Ultimate Phone Catalogue</header>
      <main>
        <PhoneList phones={phones} />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
