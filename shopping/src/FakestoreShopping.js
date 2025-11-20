import { useState, useEffect } from "react"
 function FakestoreShopping() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [error, setError] = useState(null); // Added state for error handling
   // Function to get the count of items in the cart
    function GetCartItemsCount() {
        setItemsCount(cartItems.length);
    }

    // Function to load categories from the API
    function LoadCategories() {
        fetch('https://fakestoreapi.com/products/categories') // Changed to https
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                data.unshift('all');
                setCategories(data);
            })
            .catch(error => setError(error.message)); // Catch any errors
    }

    // Function to load products from the API
    function LoadProducts(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => setError(error.message)); // Catch any errors
    }
    https://github.com/Rakeshgodumala/FakeStoreApi
    // UseEffect to load categories and products on mount
    useEffect(() => {
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products'); // Changed to https
    }, []);

    // Handler for category change
    function handleCategoryChange(e) {
        if (e.target.value === 'all') {
            LoadProducts('https://fakestoreapi.com/products'); // Changed to https
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`); // Changed to https
        }
    }

    // Handler to add items to the cart
    function handleAddtoCart(e) {
        alert("Item Added to Cart");
        fetch(`https://fakestoreapi.com/products/${e.target.id}`) // Changed to https
            .then(response => response.json())
            .then(data => {
                setCartItems(prevCartItems => [...prevCartItems, data]); // Add item to cart
                setItemsCount(prevCount => prevCount + 1); // Increment the count
            })
            .catch(error => setError(error.message)); // Catch any errors
    }

    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
            </header>
            {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label>Select a Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                {
                                    categories.map(category =>
                                        <option value={category} key={category}>{category.toUpperCase()}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-8 d-flex flex-wrap overflow-auto" style={{ height: '600px' }} >
                    {
                        products.map(product =>
                            <div key={product.id} className="card m-2 p-2 w-25">
                                <img src={product.image} className="card-img-top" height="150" alt={product.title} />
                                <div className="card-header" style={{ height: '160px' }}>
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>
                                            {product.rating.rate} <span>[{product.rating.count}]</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button id={product.id} onClick={handleAddtoCart} className="btn btn-danger w-100">
                                        <span className="bi bi-cart4"></span> Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>
                <aside className="col-2">
                    <button className="btn btn-danger w-100">
                        <span className="bi bi-cart3"></span> [{itemsCount}] Your Cart Items
                    </button>
                </aside>
            </section>
        </div>
    )
}
export default FakestoreShopping;