import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch 
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.jsx';

const Root = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />        
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
