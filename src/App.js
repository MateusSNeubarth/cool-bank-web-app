import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/home';
import About from './Routes/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'about'} element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
