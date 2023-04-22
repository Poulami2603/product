import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Common/Navbar';
import Home from './Pages/Home';
import Details from './Pages/Details';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path = "/:details" element={<Details/>}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
