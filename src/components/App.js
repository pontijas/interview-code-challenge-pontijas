import React from 'react';
import phonesData from '../data/phones';
import '../stylesheets/App.scss';

console.log(phonesData);

const App = () => {
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
