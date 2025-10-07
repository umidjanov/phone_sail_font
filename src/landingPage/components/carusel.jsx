import { Carousel } from "@material-tailwind/react";

export function Carusel() {
  return (
    <Carousel
      className="rounded-2xl w-[90%] pb-[60px] h-[900px]"
      autoplay={true}
      loop={true}
      autoplayDelay={3000}
      transition={{ type: "spring", duration: 1.2 }}
    >
      <img
        src="http://localhost:9090/upload/1749712486287.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="http://localhost:9090/upload/1749712532841.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="http://localhost:9090/upload/1749712558932.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.samsung.com/in/smartphones/galaxy-s25-ultra/images/galaxy-s25-ultra-share-image.jpg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src="http://localhost:9090/upload/1749712632572.jpg"
        alt="image 5"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
