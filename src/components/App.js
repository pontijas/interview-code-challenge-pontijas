import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import getDataFromApi from '../services/getDataFromApi';
import '../stylesheets/_App.scss';
import Loader from './Loader';
import PhoneList from './PhoneList';
import PhoneItemDetail from './PhoneItemDetail';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => {
      return setItems(data);
    });
  }, []);

  const renderPhoneDetail = (props) => {
    const phoneName = props.match.params.id;
    const foundPhone = items.find((phone) => {
      return phone.name === phoneName;
    });

    return <PhoneItemDetail phone={foundPhone} />;
  };

  return (
    <div className="App__container">
      <Switch>
        <Route path="/phone/:id" render={renderPhoneDetail} />
      </Switch>
      <header className="header__container">
        <h1 className="header__title">
          The ultimate <span className="header__small">phone catalogue</span>
        </h1>
      </header>
      <main>
        <PhoneList items={items} />
      </main>
      <footer className="footer__container">
        <small>GuideSmiths Interview Challenge</small>
        <small>&copy; Cristina Pontijas 2020 </small>
      </footer>
    </div>
  );
};

export default App;
