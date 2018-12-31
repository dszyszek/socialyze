import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

import AppRouter from './components/routes/AppRouter'



ReactDOM.render(<AppRouter />, document.querySelector('#app'));
