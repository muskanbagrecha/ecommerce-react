import { Link } from "react-router-dom";
import {
  CategorySection,
  Hero,
  Banner,
  Testimonial,
} from "../../Components/Homepage";
import { Carousel, StyledTitle, Section } from "../../Components/UI";
import brandData from "../../backend/db/brands";
import testimonialData from "../../backend/db/testimonial";

const Homepage = () => {
  return (
    <>
      <div className="sub-container">
        <Hero />
        <CategorySection />
        <StyledTitle title="Featured Products" />
        <Section></Section>
        <Banner />
        <StyledTitle title="Featured Brands" />
        <Carousel brandData={brandData} />
        <StyledTitle title="Customer Testimonials" />
        <Section>
          <Testimonial testimonialData={testimonialData} />
        </Section>
      </div>
    </>
  );
};
export default Homepage;
