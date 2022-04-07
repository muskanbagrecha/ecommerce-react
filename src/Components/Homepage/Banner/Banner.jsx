import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = ({ title, subtitle }) => {

  const navigate = useNavigate();

  return (
    <section className="banner">
      <h4>End of Season Sale</h4>
      <h1>
        Spring Collection <br />
        Upto 20% Off
      </h1>
      <button
        className="btn btn-white-no-br"
        onClick={() => navigate("/products")}
      >
        Shop Now
      </button>
    </section>
  );
};

export default Banner;
