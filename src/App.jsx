import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/Header';
import { Route, Routes } from '@solidjs/router';
import { lazy } from 'solid-js';
import Footer from './components/Footer';
import Title from './components/Title';

const Home = lazy(() => import('./components/home/Home'))
const Firework = lazy(() => import('./components/Firework'))
const Sound = lazy(() => import('./components/Sound'))

function App() {
  return (
    <div>
      <Header />
      <Title />
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;