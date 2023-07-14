import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import './index.css';
import App from './App';

import enTranslation from '../public/en.json';
import bnTranslation from '../public/bn.json';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'bn',
  resources: {
    en: {
      translation: enTranslation,
    },
    bn: {
      translation: bnTranslation,
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
