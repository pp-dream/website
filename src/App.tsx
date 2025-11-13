import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import More from './pages/More';

import Booking from './pages/Booking';

function App() {
  return (
    <Router basename='/website'>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
         <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/more" element={<More />} />
  <Route path="/booking" element={<Booking />} />
  {/* <Route path="/coach-apply" element={<CoachApply />} /> */}
</Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
