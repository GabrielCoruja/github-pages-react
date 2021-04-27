import { Switch, Route } from 'react-router-dom';
import Class from './pages/Class';
import Home from './pages/Home';
import Soccer from './pages/Soccer';


function App() {
  return (
    <Switch>
      <Route exact path="/github-pages-react" component={Home} />
      <Route exact path="/github-pages-react/soccer" component={Soccer} />
      <Route exact path="/github-pages-react/class" component={Class} />
    </Switch>
  );
}

export default App;
