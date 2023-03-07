import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './component/list';
import Input from './component/input';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/local-storage/' element={<List />} />
        <Route path='/local-storage/input' element={<Input />} />
      </Routes>
    </Router>
  );
}

export default App;
