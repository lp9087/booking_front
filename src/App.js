import {
  BrowserRouter as Router,
  Route,
  useRoutes
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import TablesList from './pages/Tables';
import Single_table from "./pages/Single_table";



function App() {
  return (
    <Router>
      <Header />
      <Route path="/table" exact component={TablesList} />
      <Route path='/table/:id' component={Single_table} />
    </Router>
  );
}

export default App;
