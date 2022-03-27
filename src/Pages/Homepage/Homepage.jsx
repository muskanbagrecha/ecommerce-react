import {
  CategorySection,
  Hero,
  Banner,
  Testimonial,
} from "../../Components/Homepage";
import { Carousel, Section } from "../../Components/UI";
import { useFilter } from "../../CustomHooks/useFilter";
import { getRandomProduct } from "../../Utils/getRandomProduct";
import Product from "../../Components/Productpage/ProductListing/Product";
import brandData from "../../backend/db/brands";
import testimonialData from "../../backend/db/testimonial";

const Homepage = () => {
  const { filterDispatch } = useFilter();
  
  return (
    <>
      <div className="sub-container">
        <Hero />
        <CategorySection />
        <h1 className="styled-title">Featured Products</h1>
        {/* This will be uncommented in future PRs.
        <Section>
          {featuredProducts &&
            featuredProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </Section> */}
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
