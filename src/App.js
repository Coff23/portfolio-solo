
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
