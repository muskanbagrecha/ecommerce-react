import { Card } from "../../UI";
import "./Testimonial.css";
const Testimonial = ({ testimonialData }) => {
  return testimonialData.map((testimonial) => (
    <Card key={testimonial.id} className="card-vertical testimonials">
      <div className="testimonial__profile">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="img-responsive"
        />
      </div>
      <div className="testimonial__content">
        <h4>{testimonial.name}</h4>
        <p>{testimonial.content}</p>
      </div>
    </Card>
  ));
};

export default Testimonial;
