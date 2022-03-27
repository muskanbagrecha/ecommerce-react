import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__heading">
          <span className="heading-1 large-title">Luxury</span>
          <span className="heading-2 large-title">Elegant</span>
          <span className="heading-3 large-title">Festive</span>
          <span className="heading-4 large-title">Glam</span>
        </div>
        <button
          className="btn btn-black-no-br"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
