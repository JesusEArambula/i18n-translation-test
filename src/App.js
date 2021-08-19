import logo from './logo.svg';
import './App.css';
import React, {Suspense} from 'react';
import {useTranslation } from 'react-i18next';


function HeaderComponent()
{
  const [t, i18n] = useTranslation('common');
  return(
    <div>
      <h1>{t('welcome.title', {framework: 'React'})}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('es')}>Spanish</button>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback = "loading">
    <div className="App">
      <HeaderComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Suspense>
  );
}

export default App;
