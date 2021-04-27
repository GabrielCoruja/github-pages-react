import { Switch, Route } from 'react-router-dom';
import Class from './pages/Class';
import Home from './pages/Home';
import Soccer from './pages/Soccer';


function App() {
  return (
    <div>
    <h1>Criando nossas rotas</h1>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/soccer" component={Soccer} />
      <Route exact path="/class" component={Class} />
    </Switch>
    </div>
  );
}

export default App;
