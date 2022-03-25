import { Filter } from "../../Components/Productpage/";
import { useFilter } from "../../CustomHooks/useFilter";
import { useState, useEffect } from "react";
import { useFetch } from "../../CustomHooks/useFetch";
import axios from "axios";
import ProductList from "../../Components/Productpage/ProductListing/ProductList";
import spinner from "../../Assets/loader";
import "./Productpage.css";

const Productpage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { filterState, filterDispatch } = useFilter();

  // fetch products
  // const { data, error, loading } = useFetch({
  //   url: "/api/products",
  //   method: "GET",
  // });

  // filterDispatch({ type: "SET_PRODUCTS", payload: data?.products });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "/api/products",
          method: "GET",
        });
        if (response.status === 200 || response.status === 201) {
          setProducts(response.data.products);
          filterDispatch({
            type: "SET_ITEMS",
            payload: response.data.products,
          });
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filterByCategories = () => {
    if (filterState.categories.length > 0) {
      return filterState.items.filter((item) =>
        filterState.categories.includes(item.categoryName)
      );
    }
    return filterState.items;
  };

  const filterByPriceRange = (data) => {
    if (filterState.range !== 0) {
      return data.filter((item) => item.price <= filterState.range);
    }
    return data;
  };

  const filterByRating = (data) => {
    if (filterState.rating) {
      return data.filter((item) => item.rating.star >= filterState.rating);
    }
    return data;
  };

  const filterByStock = (data) => {
    if (filterState.excludeOutOfStock) {
      return data.filter((item) => item.inStock);
    }
    return data;
  };

  const filterBySearch = (data) => {
    if (filterState.search) {
      const search = filterState.search.toLowerCase();
      return data.filter(
        (product) =>
          product.title.toLowerCase().includes(search) ||
          product.seller.toLowerCase().includes(search) ||
          product.subtitle.toLowerCase().includes(search) ||
          product.subtitle.toLowerCase().includes(search) ||
          product.categoryName.toLowerCase().includes(search)
      );
    }
    return data;
  };

  useEffect(() => {
    const dataByCategories = filterByCategories();
    const dataByPriceRange = filterByPriceRange(dataByCategories);
    const dataByRating = filterByRating(dataByPriceRange);
    const dataByStock = filterByStock(dataByRating);
    const dataBySearch = filterBySearch(dataByStock);
    setProducts(dataBySearch);
  }, [filterState]);

  return (
    <div className="sub-container product__main-container">
      <Filter />
      {loading ? (
        <img src={spinner} alt="loading" style={{ margin: "auto" }} />
      ) : (
        <ProductList products={products} />
      )}
      {error ? <p className="red">{error}</p> : null}
      {filterState.search && (
        <p className="search-result">
          Showing results for - {filterState.search}
        </p>
      )}
    </div>
  );
};

export default Productpage;
