import { Link, useParams } from "react-router-dom";
import "./ViewProducts.css";

import coconutOil from "../../assets/coconut-oil.jpeg";
import coldPressedOil from "../../assets/cold-pressed-oil.jpeg";
import virginCoconutOil from "../../assets/virgin-coconut-oil.jpeg";

function ViewProducts() {
  const { id } = useParams();

  const products = [
    {
      id: "1",
      name: "Pure Coconut Oil",
      size: "500 ml",
      price: "₹180",
      image: coconutOil,
      description:
        "Pure and natural coconut oil made from carefully selected coconuts.",
    },
    {
      id: "2",
      name: "Cold Pressed Coconut Oil",
      size: "1 Litre",
      price: "₹320",
      image: coldPressedOil,
      description:
        "Traditionally cold pressed coconut oil with natural goodness and quality.",
    },
    {
      id: "3",
      name: "Virgin Coconut Oil",
      size: "250 ml",
      price: "₹150",
      image: virginCoconutOil,
      description:
        "Naturally prepared virgin coconut oil with a fresh aroma and smooth texture.",
    },
  ];

  // Find selected product
  const product = products.find(
    (item) => item.id === id
  );

  // Product not found
  if (!product) {
    return (
      <section className="product-not-found">
        <h1>Product Not Found</h1>

        <p>
          Sorry, we couldn't find the product you're looking for.
        </p>

        <Link
          to="/products"
          className="back-btn"
        >
          ← Back to Products
        </Link>
      </section>
    );
  }

  return (
    <section className="view-product">
      <div className="view-product-container">

        {/* Product Image */}
        <div className="view-product-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* Product Details */}
        <div className="view-product-details">

          <p className="product-label">
            🥥 Pure & Natural
          </p>

          <h1>{product.name}</h1>

          <p className="product-description">
            {product.description}
          </p>

          {/* Size */}
          <div className="product-size">
            <span>Size</span>

            <strong>
              {product.size}
            </strong>
          </div>

          {/* Price */}
          <div className="product-price">
            {product.price}
          </div>

          {/* Actions */}
          <div className="product-actions">

            <Link
              to="/contact"
              className="product-contact-btn"
            >
              Contact Us
            </Link>

            <Link
              to="/products"
              className="back-products-btn"
            >
              ← Back to Products
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ViewProducts;