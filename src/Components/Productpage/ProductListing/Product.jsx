import { Card } from "../../UI";
import { useCart } from "../../../CustomHooks/useCart";
import { OutlinedHeart, Cart } from "../../../Assets/Icons/icons";
import "./Product.css";

const Product = ({ product }) => {
  const { title, subtitle, price, oldPrice, image, discount, inStock } =
    product;

  const { addToCart } = useCart();

  return (
    <Card className="card-vertical product-card">
      <div className="component-close">
        <span>
          <OutlinedHeart />
        </span>
      </div>
      <div className={!inStock ? "overlay-container" : ""}>
        <div className="card__img">
          <img src={image} alt={title} className="img-responsive" />
        </div>
        <div className="card__content">
          <div className="card__header">
            <h4 className="card__title">{title}</h4>
            <p className="card__subtitle">{subtitle}</p>
          </div>
          <div className="card__amount">
            <h4>₹{price}</h4>
            <p className="strike-text small-text gray-text">
              <del>₹{oldPrice}</del>
            </p>
            <p className="red-text discount">{discount}%</p>
          </div>
          <div className="card__CTA center-text">
            <button
              className="btn btn-primary full-width"
              onClick={() => addToCart(product)}
            >
              <span>Add to Cart</span>
              <Cart />
            </button>
          </div>
        </div>
      </div>
      {!inStock && <div className="overlay-text">Out of stock</div>}
    </Card>
  );
};

export default Product;
