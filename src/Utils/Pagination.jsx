import { useState } from "react";

const Pagination = ({ data, limit }) => {
  const [current, setCurrent] = useState(1);
  const nextPage = () => {
    if (current !== data.length / limit) setCurrent((prev) => prev + 1);
  };
  const prevPage = () => {
    if (current !== 1) setCurrent((prev) => prev - 1);
  };

  const paginate = () => {
    const startIndex = (current - 1) * limit;
    const endIndex = startIndex + limit;
    return data.slice(startIndex, endIndex);
  };

  return (
    <section className="pagination">
      <a onClick={prevPage}>&laquo;</a>
      <a className="active">{current}</a>
      <a onClick={nextPage}>&raquo;</a>
    </section>
  );
};

export default Pagination;
