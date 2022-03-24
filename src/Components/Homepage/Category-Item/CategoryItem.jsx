import "./CategoryItem.css";

const CategoryItem = ({ title, src }) => {
  return (
    <div className="category-item">
      <div
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
