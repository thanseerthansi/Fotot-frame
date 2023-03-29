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

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='text' element={<Text/>} />
        <Route path='/' element={<Outlethome/>}>
          <Route index element={<Home/>} />
          <Route path='miniframe' element={<Mainframe/>} />
          <Route path='college' element={<Collage/>} />
          <Route path='collegeframe' element={<Collegeframes/>} />
          <Route path='potratecollege' element={<Potratecollege/>} />
          
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
