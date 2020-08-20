import React, { useState } from 'react';
import phonesData from '../data/phones';
import '../stylesheets/App.scss';

const App = () => {
  const [phones] = useState(phonesData);

  console.log(phones);

  return (
    <div className="App">
      <header>The Ultimate Phone Catalogue</header>
      <main>
        <p>Holi Mundi</p>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
