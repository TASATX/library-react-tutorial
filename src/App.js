import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import {books} from './data';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route
            path="/books/:id"
            render={({ match }) => {
              return <BookInfo books={books} />;
            }}
          />
          <Route path="/cart" render={() => <Cart books={books} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
