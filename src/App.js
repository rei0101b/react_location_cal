import React from 'react';
import styles from './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import AboutPage from './components/HotelsTable/About/About';
import SearchPage from './containers/SearchPage/SearchPage';

const App = () => (
  <Router>
    <div className={styles.app}>
      <ul className={styles.ul}>
        <li><Link to="/">ホテル検索</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </div>
  </Router>
)

export default App;
