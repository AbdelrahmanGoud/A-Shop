import './App.css';
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import Product from './conponant/Product';
import './conponantcss/Homestyle.css';
import Home from './conponant/Home';
import Navgation from './conponant/Navgation'
import Limit from './conponant/Limit';
import Cart from './conponant/Cart';
import Foot from './conponant/Foot';
import Arrowup from './conponant/Arrowup';

function App() 
{
 
  
  return (
    <div className="App"> 
     <Arrowup/>
    <BrowserRouter>
    <Navgation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='Product' element={<Product/>}/> 
    <Route path='Limit' element={<Limit/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    <Foot/>
    </BrowserRouter>  
    </div>
  );
}

export default App;
