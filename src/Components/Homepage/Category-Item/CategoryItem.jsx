import { useNavigate } from "react-router-dom";
import { useFilter } from "../../../CustomHooks/useFilter";
import "./CategoryItem.css";

const CategoryItem = ({ title, src }) => {

  const navigate = useNavigate();
  const { filterDispatch } = useFilter();

  return (
    <div
      className="category-item"
      onClick={() => {
        filterDispatch({ type: "ADD_CATEGORY", payload: title });
        navigate("/products");
      }}
    >      <div
        className="category--background"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="category-item__content">
        <h1 className="medium-title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default CategoryItem;
