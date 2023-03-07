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
        <Route path='/localstorage/' element={<List />} />
        <Route path='/localstorage/input' element={<Input />} />
      </Routes>
    </Router>
  );
}

export default App;
