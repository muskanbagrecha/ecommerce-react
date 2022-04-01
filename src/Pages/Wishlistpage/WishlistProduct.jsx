import { Card } from "../../Components/UI";
import { FaStar } from "react-icons/fa";
import { OutlinedHeart, Cart } from "../../Assets/Icons/icons";

export const WishlistProduct = ({ product }) => {
  const { title, subtitle, price, oldPrice, image, discount, rating } = product;

  return (
    <Card className="card-vertical product-card">
      <div className="component-close">
        <span>
          <OutlinedHeart />
        </span>
      </div>
      <div className="card__img">
        <img src={image} alt={title} className="img-responsive" />
      </div>
      <div className="card__content">
        <div className="card__header">
          <h3 className="card__title">{title}</h3>
          <p className="card__subtitle">{subtitle}</p>
        </div>
        <div className="flex-row-align-center">
          <div className="card__amount">
            <h4>₹{price}</h4>
            <p className="strike-text small-text gray-text">
              <del>₹{oldPrice}</del>
            </p>
            <p className="red-text discount">{discount}%</p>
          </div>
          <div className="card__rating">
            <p>{rating.value}</p>
            <FaStar />
          </div>
        </div>
        <div className="card__CTA center-text">
          <button className="btn btn-primary full-width">
            Add to Cart
            <Cart />
          </button>
          <button className="btn btn-outline full-width">Remove</button>
        </div>
      </div>
    </Card>
  );
};
