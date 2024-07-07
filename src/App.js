import logo from './logo.svg';
import './App.css';

import HomePage from './Pages/HomePage';
import { lazy, Suspense } from 'react';
import Loader from './Components/Loader';

const Home = lazy(() => import('./Pages/HomePage'));

function App() {
  return (
     <Suspense fallback={<Loader/>}>
       <HomePage/>
      </Suspense>
  );
}

export default App;
