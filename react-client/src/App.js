import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import UserList from './pages/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
