import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './main/Main';
import Question from './question/Question';
import Result from './result/Result';

function App() {
  return (
    <div className='web-wrap'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/que/:que_id' element={<Question />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
