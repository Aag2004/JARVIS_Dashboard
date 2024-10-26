import './App.css'
import './index.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx';
import Navbar from './Components/Navbar.jsx';

// import UserDetails from './pages/UserDetails.jsx';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        {/* <Route path="/userdetails" element={<UserDetails/>} /> */}
      </Routes>
    {/* <TableComponent/> */}
    {/* <LineChart /> */}
    </div>
  )
}

export default App
