import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/Header';
import Home from './components/home/Home';
import Firework from './components/Firework';
import Sound from './components/Sound';

function App() {
  return (
    <div class='container-fluid'>
      <Header />
      <Home />
    </div>
  );
}

export default App;