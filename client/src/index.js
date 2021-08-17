import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Route,
  Redirect,
  Switch 
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { App } from './components/App/App.jsx';

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />        
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
