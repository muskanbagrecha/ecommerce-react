import CategoryItem from "../Category-Item/CategoryItem";
import { useFetch } from "../../../CustomHooks/useFetch";
import spinner from "../../../Assets/loader";
import "./CategorySection.css";

const CategorySection = () => {
  //fetch categories
  const url = "/api/categories";
  const { data, error, loading } = useFetch({
    url: url,
    method: "GET",
  });

  const categoriesEls = data?.categories?.map((category) => (
    <CategoryItem
      title={category.categoryName}
      src={category.imageUrl}
      key={category._id}
    />
  ));

  return (
    <section className="category-section">
      {loading ? (
        <img src={spinner} alt="loading" style={{ margin: "auto" }} />
      ) : null}
      {categoriesEls}
      {error ? <p className="red">{error}</p> : null}
    </section>
  );
};

export default CategorySection;
