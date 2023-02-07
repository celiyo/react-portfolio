import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/react-portfolio/' element={<Home />} />
        <Route path='/react-portfolio/home' element={<Home />} />
        <Route path='/react-portfolio/projects' element={<Projects />} />
        <Route path='/react-portfolio/projects/:id' element={<Project />} />
        <Route path='/react-portfolio/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
