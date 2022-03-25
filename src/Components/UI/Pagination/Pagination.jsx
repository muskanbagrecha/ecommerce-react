import "./Pagination.css";

const Pagination = () => {
  return (
    <section className="pagination">
      <a href="#">&laquo;</a>
      <a href="#" className="active">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">&raquo;</a>
    </section>
  );
};

export default Pagination;
