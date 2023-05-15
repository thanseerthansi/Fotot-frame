// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Text from './Component.js/Text';
import Outlethome from './Component.js/Outlethome';
import Home from './Component.js/Home';
import Mainframe from './Component.js/Mainframe';
import Collage from './Component.js/Collage';
import Collegeframes from './Component.js/Collegeframes';
import Potratecollege from './Component.js/Potratecollege';
import Squareframes from './Component.js/Squareframes';
import Squarecollege from './Component.js/Squarecollege';
import Canvasframe from './Component.js/Canvasframe';
import Canvastype from './Component.js/Canvastype';
import Carttext from './Component.js/Carttext';
import Checkout from './Component.js/Checkout';
import Shoppinghome from './Shopping.js/Shoppinghome';
import Productdetails from './Shopping.js/Productdetails';
import Papertype from './Component.js/Papertype';
import Papperprint from './Component.js/Papperprint';
import Simplecontextprovider from './Component.js/Simplecontext';
import Success from './Shopping.js/Success';
import Failure from './Shopping.js/Failure';
import Profilepage from './Profilepages.js/Profilepage';
import Userorders from './Profilepages.js/Userorders';
import Privacy from './Aboutpages.js/Privacy';
import Terms from './Aboutpages.js/Terms';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Simplecontextprovider>
      <Routes>
        <Route exact path='text' element={<Text/>} />
        {/* http://localhost:3000/success=true&session_id=cs_test_a1YiEzo9jP8OjjuLVmFy6kvBle9PU71D1bmh8pL3Pwo6mKBKTHWBPxAYM2 */}
        <Route  path="/success=true&session_id=/:id/:order_id" element={<Success/>} />  
        <Route  path={`/canceled=true&order_id=/:order_id` } element={<Failure/>} />
        <Route exact path='text' element={<Text/>} />
        <Route path='/' element={<Outlethome/>}>
          <Route index element={<Home/>} />
          <Route path='miniframe' element={<Mainframe/>} />
          <Route path='college' element={<Collage/>} />
          <Route path='collegeframe' element={<Collegeframes/>} />
          <Route path='potratecollege' element={<Potratecollege/>} />
          <Route path='squareframes' element={<Squareframes/>} />
          <Route path='squarecollege' element={<Squarecollege/>} />
          <Route path='canavsframe' element={<Canvasframe/>} />
          <Route path='canavstype' element={<Canvastype/>} />
          <Route path='carttext' element={<Carttext/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='shopping' element={<Shoppinghome/>}/>
          <Route path='productdetails/:prod_id' element={<Productdetails/>}/>
          <Route path='papertype' element={<Papertype/>}/>
          <Route path='paperprint' element={<Papperprint/>}/>
          <Route path='profile' element={<Profilepage/>}/>
          <Route path='userorder' element={<Userorders/>}/>
          <Route path='privacypolicy' element={<Privacy/>}/>
          <Route path='terms' element={<Terms/>}/>
          
        </Route>
      </Routes>
      </Simplecontextprovider>
      </BrowserRouter>
    </div>
  );
}

export default App;
