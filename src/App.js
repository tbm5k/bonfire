import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
        <Footer />  
      </Router>
    </div>
  );
}

export default App;
