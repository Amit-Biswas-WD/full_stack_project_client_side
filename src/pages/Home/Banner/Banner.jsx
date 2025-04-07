import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../../public/banner/1.jpg";
import img2 from "../../../../public/banner/2.jpg";
import img3 from "../../../../public/banner/3.png";
import img4 from "../../../../public/banner/4.jpg";
import img5 from "../../../../public/banner/5.png";

const Banner = () => {
  return (
    <div className="mt-16">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div className="h-[540px] w-full">
          <img
            src={img1}
            alt="Image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[540px] w-full">
          <img
            src={img2}
            alt="Image 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[540px] w-full">
          <img
            src={img3}
            alt="Image 3"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[540px] w-full">
          <img
            src={img4}
            alt="Image 3"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[540px] w-full">
          <img
            src={img5}
            alt="Image 3"
            className="h-full w-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
