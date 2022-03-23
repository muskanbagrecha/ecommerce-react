import CarouselItem from "./CarouselItem";

const CarouselList = ({ data, currentIndex }) => {

  return (
    <>
      {data.map((item, index) => (
        <div
          className={
            index === currentIndex
              ? "carousel-item active"
              : "carousel-item"
          }
        >
          {index === currentIndex ? (
            <CarouselItem key={item.id} src={item.image} name={item.name} />
          ) : null}
        </div>
      ))}
    </>
  );
};

export default CarouselList;
