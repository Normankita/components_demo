import { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TablePage from './pages/TableDemo/TablePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/table' element={<TablePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
