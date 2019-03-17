// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Views
import Validators from 'views/Validators';

// Styles
import styles from './App.scss';
import 'react-table/react-table.css';
import '@fortawesome/fontawesome-pro/css/all.min.css';

type AppType = {
  match: Object
};

const App: React.Element<'div'> = ({
  match,
}: AppType) => (
  <div className={styles.Root}>
    <div className={styles.Wrapper}>
      <Switch>
        <Route path={`${match.path}/`} component={Validators} />
      </Switch>
    </div>
  </div>
);

export default App;
