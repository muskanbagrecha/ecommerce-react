import Product from "./Product";
import { useState, useEffect } from "react";
import { Alert } from "../../UI";

const ProductList = ({ products }) => {
  const [paginatedData, setPaginatedData] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;

  const nextPage = () => {
    if (currentPage < products.length / limit) {
      setPaginatedData(products);
      setCurrentPage((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setPaginatedData(products);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const paginate = () => {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    setPaginatedData((prev) => prev.slice(startIndex, endIndex));
  };

  useEffect(() => {
    paginate();
  }, [currentPage]);

  useEffect(() => {
    setPaginatedData(products);
    paginate();
  }, [products]);

  return (
    <div className="products__list-container">
      {paginatedData?.length === 0 ? (
        <h1>No products found.</h1>
      ) : (
        paginatedData.map((product) => {
          return <Product key={product._id} product={product} />;
        })
      )}

      {/* Pagination  */}
      <section className="pagination">
        <a onClick={prevPage}>&laquo;</a>
        <a className="active">{currentPage}</a>
        <a onClick={nextPage}>&raquo;</a>
      </section>
    </div>
  );
};

export default ProductList;
