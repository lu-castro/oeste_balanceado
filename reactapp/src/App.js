import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'

import HomePage from './views/homePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact> <HomePage/> </Route>
      </Switch>
    </Router>
  );
}

export default App;
