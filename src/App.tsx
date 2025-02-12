import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Contacts from './components/Pages/Contacts';
import Projects from './components/Pages/Projects';
import Certificates from './components/Pages/Certificates';

function App() {
  return (
    <Router>
      <div className="bg-indigo-600">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/certificados" element={<Certificates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
