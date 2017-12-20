
/* Import Third Party Dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Import Containers */
import MainLayout from 'containers/MainLayout/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

/* Import Local Elements */
import Wrapper from './elements/Wrapper';


export default function App() {
  return (
    <Wrapper>
      <Switch>
        <Route path="/books" component={MainLayout} />
        <Route component={NotFoundPage} />
      </Switch>
    </Wrapper>
  );
}
