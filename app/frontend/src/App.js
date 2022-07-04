import { Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import MyTodo from './pages/MyTodo';
import Login from './pages/Login';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/" component={MyTodo} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
