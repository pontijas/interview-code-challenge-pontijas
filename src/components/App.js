import React, { useState } from 'react';
import phonesData from '../data/phones';
import '../stylesheets/App.scss';
import PhoneList from './PhoneList';

const App = () => {
  const [phones] = useState(phonesData);

  console.log(phones);

  return (
    <div className="App">
      <header>The Ultimate Phone Catalogue</header>
      <main>
        <PhoneList />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
