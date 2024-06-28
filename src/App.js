import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Card from './components/Card';
import HorizontalCardProducts from './components/HorizontalCardProducts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Carousel/>
      <HorizontalCardProducts/>
      <Footer/>
    </div>
  );
}

export default App;
