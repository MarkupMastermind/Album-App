import logo from './logo.svg';
import './App.css';
import AddAlbum from './Componets/AddAlbum';
import ViewAll from './Componets/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<AddAlbum/>}/>
        <Route path='/view' element={<ViewAll/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
