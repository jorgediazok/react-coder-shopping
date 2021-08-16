import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Navbar from './components/Navbar';

//CONTEXT
import CartContext from './context/CartContext';

//PAGES
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './pages/Cart';
import ItemListContainer from './pages/ItemListContainer';

function App() {
  return (
    <Router>
      <CartContext>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ItemListContainer} />
          <Route path='/category/:categoryId' component={ItemListContainer} />
          <Route exact path='/item/:id' component={ItemDetailContainer} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </CartContext>
    </Router>
  );
}

export default App;
