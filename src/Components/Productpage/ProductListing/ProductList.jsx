import Pagination from "../../../Utils/Pagination.jsx";
import Product from "./Product";
import { useState } from "react";
import { useEffect } from "react";

const ProductList = ({ products }) => {
  const [paginatedData, setPaginatedData] = useState(products);
  const [current, setCurrent] = useState(1);

  const nextPage = () => {
    if (current < products.length / 8) {
    setPaginatedData(products);
    setCurrent((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (current !== 1) {
      setPaginatedData(products);
      setCurrent((prev) => prev - 1);
    }
  };

  const paginate = () => {
    const startIndex = (current - 1) * 8;
    const endIndex = startIndex + 8;
    setPaginatedData((prev) => prev.slice(startIndex, endIndex));
  };

  useEffect(() => {
    paginate();
  }, [current]);

  useEffect(() => {
    setPaginatedData(products);
    paginate();
  }, [products]);

  return (
    <div className="products__list-container">
      {paginatedData?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
      
      {/* <Pagination /> */}
      <section className="pagination">
        <a onClick={prevPage}>&laquo;</a>
        <a className="active">{current}</a>
        <a onClick={nextPage}>&raquo;</a>
      </section>
    </div>
  );
};

export default ProductList;
