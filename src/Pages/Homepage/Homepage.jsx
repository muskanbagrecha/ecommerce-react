import { Link } from "react-router-dom";
import {
  CategorySection,
  Hero,
  Banner,
  Testimonial,
} from "../../Components/Homepage";
import { Carousel, Section } from "../../Components/UI";
import brandData from "../../backend/db/brands";
import testimonialData from "../../backend/db/testimonial";

const Homepage = () => {
  return (
    <>
      <div className="sub-container">
        <Hero />
        <CategorySection />
        <h1 className="styled-title">Featured Products</h1>
        <Section></Section>
        <Banner />
        <h1 className="styled-title">Featured Brands</h1>
        <Carousel brandData={brandData} />
        <h1 className="styled-title">Customer Testimonials</h1>
        <Section>
          <Testimonial testimonialData={testimonialData} />
        </Section>
      </div>
    </>
  );
};
export default Homepage;
