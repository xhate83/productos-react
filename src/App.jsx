import ProductDetail from './components/product-detail/product-detail.jsx';
import Recomendations from './components/recomendations/recomendations.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
    <Routes>
     <Route path="/" element={<Recomendations />} />
      <Route path="/producto/:id" element={<ProductDetail />} />
    </Routes>
  </Router>
  )
}

export default App
