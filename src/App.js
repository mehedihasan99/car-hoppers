import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='reviews' element={<Reviews></Reviews>} />
        <Route path='dashBoard' element={<DashBoard></DashBoard>} />
        <Route path='blogs' element={<Blogs></Blogs>} />
      </Routes>
    </div>
  );
}

export default App;
