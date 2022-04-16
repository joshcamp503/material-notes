// COMPONENTS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes'
import Create from './pages/Create'

// STYLES
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
