import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';


// import Home from './routes/home/home.component';
// import Navigation from './routes/navigation/navigation.component';
// import Authentication from './routes/authentication/authentication.component';
// import Shop from './routes/shop/shop.component';
// import Checkout from './routes/checkout/checkout.component';
import Spinner from './components/spinner/spinner.component';

const Home = lazy(() => import('./routes/home/home.component'))
const Authentication = lazy(() => import('./routes/authentication/authentication.component'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))
const Shop = lazy(() => import('./routes/shop/shop.component'))
const Navigation = lazy(() => import('./routes/navigation/navigation.component'))

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;