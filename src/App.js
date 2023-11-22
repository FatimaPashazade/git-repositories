import './App.scss';
import Main from './components/Main';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/" element={<Main/>}/>
     </Routes>
    </div>
    </BrowserRouter>
 );
}

export default App;
