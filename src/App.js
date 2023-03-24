// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Text from './Component.js/Text';
import Outlethome from './Component.js/Outlethome';
import Home from './Component.js/Home';
import Mainframe from './Component.js/Mainframe';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='text' element={<Text/>} />
        <Route path='/' element={<Outlethome/>}>
          <Route index element={<Home/>} />
          <Route path='miniframe' element={<Mainframe/>} />
          
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
