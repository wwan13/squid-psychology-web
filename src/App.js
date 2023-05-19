import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './main/Main';
import Question from './question/Question';

function App() {
  return (
    <div className='web-wrap'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/que/:que_id' element={<Question />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
