import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './pages/user/Dashboard';
import Profile from './pages/user/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route exact path='/user/profile' element={<Profile />} />
        </Route>
        <Route  path="/" element={<Homepage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
