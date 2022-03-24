import { Card } from "../../UI";
import { OutlinedHeart, Cart } from "../../../Assets/Icons/icons";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <Card className="card-vertical product-card">
      <div className="component-close">
        <span>
          <OutlinedHeart />
        </span>
      </div>
      <div className={!product.inStock ? "overlay-container" : ""}>
        <div className="card__img">
          <img
            src={product.image}
            alt={product.title}
            className="img-responsive"
          />
        </div>
        <div className="card__content">
          <div className="card__header">
            <h4 className="card__title">{product.title}</h4>
            <p className="card__subtitle">{product.subtitle}</p>
          </div>
          <div className="card__amount">
            <h4>₹{product.price}</h4>
            <p className="strike-text small-text gray-text">
              <del>₹{product.oldPrice}</del>
            </p>
            <p className="red-text discount">{product.discount}%</p>
          </div>
          <div className="card__CTA center-text">
            <button
              className="btn btn-primary full-width"
              //   onClick={() => addToCartHandler(product)}
            >
              <span>Add to Cart</span>
              <Cart />
            </button>
            {/* <button
              className="btn btn-outline"
            //   onClick={() => addToWishListHandler(product)}
            >
              Wishlist
            </button> */}
          </div>
        </div>
      </div>
      {!product.inStock && <div className="overlay-text">Out of stock</div>}
    </Card>
  );
};

export default Product;
