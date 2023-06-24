import { Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './Components/HomePage/Homepage';


function App() {

  return (
    <div className='font-family'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>x
      </Routes>
    </div>
  )
}

export default App;
