import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import phonesData from '../data/phones';
import '../stylesheets/App.scss';
import PhoneList from './PhoneList';
import PhoneItemDetail from './PhoneItemDetail';

const App = () => {
  const [phones] = useState(phonesData);

  const renderPhoneDetail = (props) => {
    const phoneName = props.match.params.id;
    const foundPhone = phones.find((phone) => {
      return phone.name === phoneName;
    });

    return <PhoneItemDetail phone={foundPhone} />;
  };

  return (
    <div className="App__container">
      <header className="header__container">
        <h1>The Ultimate Phone Catalogue</h1>
      </header>
      <main>
        <Switch>
          <Route path="/phone/:id" render={renderPhoneDetail} />
        </Switch>
        <PhoneList phones={phones} />
      </main>
      <footer className="footer__container">
        <small>GuideSmiths Interview Challenge</small>
        <small>&copy; Cristina Pontijas 2020 </small>
      </footer>
    </div>
  );
};

export default App;
