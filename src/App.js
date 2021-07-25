import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Navbar from './components/Navbar';

//PAGES
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ItemListContainer from './pages/ItemListContainer';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/category/:categoryId" component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
