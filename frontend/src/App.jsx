import './App.css'
import './index.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import UserDetails from './pages/UserDetails.jsx';

function App() {
  return (
    <div >
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/userdetails" element={<UserDetails/>} />
      </Routes>
    </div>
  )
}

export default App
