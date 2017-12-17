
/* Import Third Party Dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Import Containers */
import BooksPage from '../BooksPage/Loadable';
import BookFormPage from '../BookFormPage/Loadable';

/* Import Components */
import TopBar from '../../components/TopBar';

/* Import Local Elements */
import Wrapper from './elements/Wrapper';
import ContentWrapper from './elements/ContentWrapper';


export default class MainLayout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {/* TopBar Component - check 'components/TopBar/index.js' file - */}
        <TopBar />
        {/* [all MainLayout's nested routes goes here] */}
        <ContentWrapper>
          <Switch>
            <Route exact path={'/books'} component={BooksPage} />
            <Route exact path="/books/add" component={BookFormPage} />
          </Switch>
        </ContentWrapper>
      </Wrapper>
    );
  }
}
