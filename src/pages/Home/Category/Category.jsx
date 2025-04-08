import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import img1 from "../../../../public/menu/slide1.jpg";
import img2 from "../../../../public/menu/slide2.jpg";
import img3 from "../../../../public/menu/slide3.jpg";
import img4 from "../../../../public/menu/slide4.jpg";
import img5 from "../../../../public/menu/slide5.jpg";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";

const values = [
  {
    image: img1,
    title: "Salad",
  },
  {
    image: img2,
    title: "dessert",
  },
  {
    image: img3,
    title: "pizza",
  },
  {
    image: img4,
    title: "salad",
  },
  {
    image: img5,
    title: "soup",
  },
];

const Category = () => {
  return (
    <div className="py-20 container mx-auto">
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {values.map((value) => (
          <SwiperSlide>
            <div className="">
              <img
                src={value.image}
                alt="Alcohol"
                className="w-full h-[80%]"
              />
              <h2 className="text-2xl font-semibold uppercase absolute top-[88%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                {value.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
