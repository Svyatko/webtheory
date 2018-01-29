import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';

require('../stylesheets/main.scss');

ReactDOM.render(
    <div>
        <Layout />
    </div>
    , document.querySelector('.js-container'));
