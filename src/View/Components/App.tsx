import { useEffect, useState} from 'react';
import { IntlProvider } from 'react-intl';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dates from './Dates';
import Navbar from './Navbar';
import Numbers from './Numbers';
import Texts from './Texts';
import German from "../Translations/de.json";
import English from "../Translations/en.json";
import Polish from "../Translations/pl.json";
import { GlobalStyle } from '../Styles/GlobalStyles';

const App = () => {
  const [locale, setLocale] = useState((localStorage.getItem('language') || 'en'));

  useEffect(() => {
    localStorage.setItem('language', locale);
  }, [locale]);
  
  let lang;
  switch(locale) {
    case 'en':
      lang = English;
      break;
    case 'de':
      lang = German;
      break;
    case 'pl':
      lang = Polish;
      break;
  }


  return (
    <>
    <GlobalStyle/>
    <Router>
      <IntlProvider locale={locale} messages={lang}>
        <Navbar onSelect={(e) => setLocale(e)}/>
        
        <Switch>
          <Route path="/dates" >
            <Dates/>
          </Route>
          <Route path="/numbers">
            <Numbers/>
          </Route>
          <Route path="/texts">
            <Texts/>
          </Route>
          <Route path="/">
            <h1>Not much here really</h1>
          </Route>
        </Switch>

      </IntlProvider>
      
  </Router>
  </>
  );
}

export default App;
