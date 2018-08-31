import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ---- Global CSS ----
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/animate.css';
import './assets/css/styles.css';
import './assets/css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
