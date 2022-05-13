import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './pages/user/Dashboard';
import Profile from './pages/user/Profile';
import Resume from './pages/user/Resume';
import AppliedJobs from './pages/user/AppliedJobs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/user' element={<PrivateRoute />}>
          <Route index path='/user/dashboard' element={<Dashboard />} />
          <Route exact path='/user/profile' element={<Profile />} />
          <Route path='/user/resume' element={<Resume />} />
          <Route path='/user/applied-job' element={<AppliedJobs />} />
        </Route>
        <Route  path="/" element={<Homepage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
