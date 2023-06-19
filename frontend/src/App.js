import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Homepage from "./pages/Homepage";
import Navbar from './components/Navbar';
import DetailsPage from './components/DetailsPage';


function App() {
  return (
    <div className="min-w-screen min-h-screen bg-slate-200">
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/notes/:id' element={<DetailsPage />} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
