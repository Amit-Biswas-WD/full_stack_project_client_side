import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../../public/banner/1.jpg";
import img2 from "../../../../public/banner/2.jpg";
import img3 from "../../../../public/banner/3.png";
import img4 from "../../../../public/banner/4.jpg";
import img5 from "../../../../public/banner/5.png";

const values = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
];

const Banner = () => {
  return (
    <div className="mt-16">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {values.map((value, index) => (
          <div key={index} className="h-[540px] w-full">
            <img
              src={value.image}
              alt="Image Not Found"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
