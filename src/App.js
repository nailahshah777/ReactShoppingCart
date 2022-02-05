import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signup from './components/script/Signup';
import Login from './components/script/Login';
import Cart from './components/script/Cart';
function App() {
  return (
    <div className="App">
 <Router>
        <Routes>
   <Route exact path="/" element={<Signup/>}/>  
   <Route exact path='/login' element={<Login/>}/> 
   <Route exact path="/cart" element={<Cart/>}/>    
        </Routes>
        </Router>
    </div>
  );
}

export default App;
