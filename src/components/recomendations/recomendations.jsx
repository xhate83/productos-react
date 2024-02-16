import { useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card';
import { toTitleCase } from '../utils/utils';

function Recomendations() {
  const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
        .then((res) => res.json())
        .then((productos) => {
            
            const productosApiFake = productos.map((producto) => ({
                ...producto,
                images: [producto.image, producto.image, producto.image, producto.image, producto.image],
                category: {
                  id: producto.category,
                  name: toTitleCase(producto.category),
                  image: ['https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'],
                }
            }));
            console.log('productosApiFake =>', productosApiFake);
            setProductos(productosApiFake)
        });
    }, []);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((categorias) => {
          
          const categoriasApiFake = categorias.map((categoria) => ({
              id: categoria,
              name: toTitleCase(categoria),
              image: ['https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'],
          }));
          console.log('categoriasApiFake =>', categoriasApiFake);
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