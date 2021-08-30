import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import {HotelProvider} from './context/HotelContext';

function App() {
  return (
    <HotelProvider>
      <div className="App">
        <Router>
          <Header />
          <Body />
          <Footer />  
        </Router>
      </div>
    </HotelProvider>
  );
}

export default App;
