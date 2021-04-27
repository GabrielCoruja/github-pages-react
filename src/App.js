import { Switch, Route } from 'react-router-dom';
import Class from './pages/Class';
import Home from './pages/Home';
import Soccer from './pages/Soccer';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/soccer" component={Soccer} />
      <Route exact path="/class" component={Class} />
    </Switch>
  );
}

export default App;
