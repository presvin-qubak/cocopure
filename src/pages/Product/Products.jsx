import "./Products.css";
import { useNavigate } from "react-router-dom";

import coconutOil from "../../assets/coconut-oil.jpeg";
import coldPressedOil from "../../assets/cold-pressed-oil.jpeg";
import virginCoconutOil from "../../assets/virgin-coconut-oil.jpeg";

function Products() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Pure Coconut Oil",
      size: "500 ml",
      price: "₹180",
      image: coconutOil,
    },
    {
      id: 2,
      name: "Cold Pressed Oil",
      size: "1 Litre",
      price: "₹320",
      image: coldPressedOil,
    },
    {
      id: 3,
      name: "Virgin Coconut Oil",
      size: "250 ml",
      price: "₹150",
      image: virginCoconutOil,
    },
  ];

  return (
    <section className="products">
      <div className="products-container">

        {/* HEADER */}
        <header className="products-header">
          <p>🥥 Our Products</p>

          <h1>Pure Coconut Oil Collection</h1>

          <span>
            Naturally made coconut oil for your everyday needs.
          </span>
        </header>

        {/* PRODUCT GRID */}
        <div className="products-grid">

          {products.map((product) => (
            <article
              className="product-card"
              key={product.id}
            >

              {/* IMAGE */}
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </div>

              {/* INFO */}
              <div className="product-info">

                <h2>{product.name}</h2>

                <p>{product.size}</p>

                <h3>{product.price}</h3>

                <button
                  type="button"
                  className="product-btn"
                  onClick={() =>
                    navigate(`/view-products/${product.id}`)
                  }
                >
                  View Product
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;