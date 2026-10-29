import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data } = await axios.get(
                    'http://localhost:4000/api/products'
                );
                setProducts(data);
            } catch (err) {
                console.error('Error fetching products:', err.message);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="App">
            <h1>My Products</h1>

            {products.map((product) => (
                <div key={product._id}>
                    <h3>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default App;