
import './App.css';
import { Switch, Route,} from 'react-router-dom'
import Main from './components/Main'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
  
    </div>
  );
}

export default App;
