import ItemDetailContainer from '../components/ItemDetailContainer';

//COMPONENTS
import ItemListContainer from '../components/ItemListContainer';

//DATA
import { data } from '../data/data';

const Home = () => {
  return (
    <>
      <ItemListContainer data={data} />
      <ItemDetailContainer data={data} />
    </>
  );
};

export default Home;
