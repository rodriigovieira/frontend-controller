import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import registerServiceWorker from './serviceWorker';

ReactDOM.render(<Dashboard />, document.getElementById('root'));

registerServiceWorker();
