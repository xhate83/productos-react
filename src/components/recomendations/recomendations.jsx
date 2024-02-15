import { useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card';

function Recomendations() {
  const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((productos) => {
            console.log('Productos', productos)
            setProductos(productos)
        });
    }, []);


  return (
    <div className="flex-column align-items-center justify-content-center bg-primary p-1 p-md-5">
        <div className="container">
            <h2 className="text-white mb-4">Recomendaciones</h2>
            <div className="row justify-content-center g-4">
            {productos.map((producto) => (
                <div key={producto.id} className="col-12 col-md-6 col-lg-6 mb-4 d-flex align-items-stretch">
                <ProductCard producto={producto} />
                </div>
            ))}
        </div>
    </div>
</div>
   
  );
}

export default Recomendations;