
import './App.css';
import { Header } from './componets/Header/Header';
import { About } from './componets/About/About';
import { Route } from 'react-router-dom';
import { Projects } from './componets/Projects/Projects';

function App() {
  return (
    <div className="App">
        <Header />
        <div>
          <Route exact path='/' render={()=>(<About/>)} />
          <Route exact path='/projects' render={()=>(<Projects />)} />
        </div>
    </div>
  );
}

export default App;
