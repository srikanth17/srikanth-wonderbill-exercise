import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createBrowserHistory } from 'history';
import Home from '../components/Home/Home';
import AddPayment from '../components/AddPayment/AddPayment';
import EditPayment from '../components/EditPayment/EditPayment';
import NotFound from '../components/NotFound/NotFound';
import { fetchPayments } from '../state/payments';

export const history = createBrowserHistory();

const AppRouter = () => {
  const dispatch = useDispatch();
  dispatch(fetchPayments());
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddPayment} />
          <Route path="/edit/:id" component={EditPayment} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
