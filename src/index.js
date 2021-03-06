import React from 'react';
import { I18nextProvider } from 'react-i18next';
import  i18next from 'i18next';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";

i18next.init(
  {
    interpolation: {escapeValue: false},
    lng: 'en',
    resources: {
      en: {
        common: common_en
      },
      es: {
        common: common_es
      }
    }
  }
);

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n = {i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
