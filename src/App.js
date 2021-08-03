import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Navbar from './components/Navbar';

//CONTEXT
import CartState from './context/CartState';

//PAGES
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ItemListContainer from './pages/ItemListContainer';

function App() {
  return (
    <CartState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ItemListContainer} />
          <Route path='/category/:categoryId' component={ItemListContainer} />
          <Route exact path='/item/:id' component={ItemDetailContainer} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </Router>
    </CartState>
  );
}

export default App;
