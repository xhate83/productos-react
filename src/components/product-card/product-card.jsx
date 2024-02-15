
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductCard({ producto }) {
    ProductCard.propTypes = {
        producto: PropTypes.object.isRequired
    };
  return (
    <div className="card bg-white p-4 rounded overflow-hidden" style={{maxHeight: '90vh'}}>
    <img src={producto.image} alt={producto.title} className="card-img-top" style={{maxHeight: '40%', objectFit: 'contain'}} />
    <div className="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 className="card-title text-primary">{producto.title}</h5>
        <span className="badge rounded-pill bg-warning text-dark">{producto.category}</span>
        <p className="card-text text-secondary">{producto.description}</p>
      </div>
      <div>
        <h2>
         ${producto.price}
        </h2>
        <Link to={`/producto/${producto.id}`} className="btn btn-primary mt-2">Ver Detalles</Link>
      </div>
    </div>
  </div>
  );
}

export default ProductCard;