import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/Header';
import { Route, Routes } from '@solidjs/router';
import { lazy } from 'solid-js';
import Footer from './components/Footer';

const Home = lazy(() => import('./components/home/Home'))
const Firework= lazy(() => import('./components/Firework'))
const Sound= lazy(() => import('./components/Sound'))

function App() {
  return (
    <div class='container-fluid'>
      <Header />
      <Routes>
        <Route path="/" component={Home}/>
        <Route path="/calendar" component={Firework}/>
        <Route path="/blog" component={Sound}/>
      </Routes>   
      <Footer />   
    </div>
  );
}

export default App;