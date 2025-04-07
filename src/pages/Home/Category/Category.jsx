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

const Category = () => {
  return (
    <div className="my-10 container mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={img1} alt="Alcohol" className="w-full h-auto" />
            <h2 className="text-2xl font-semibold absolute top-[88%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              Salad
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img2} alt="Alcohol" className="w-full h-auto" />
            <h2 className="text-2xl font-semibold uppercase absolute top-[88%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              dessert
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img3} alt="Alcohol" className="w-full h-auto" />
            <h2 className="text-2xl font-semibold uppercase absolute top-[88%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              pizza
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img4} alt="Alcohol" className="w-full h-auto" />
            <h2 className="text-2xl font-semibold uppercase absolute top-[88%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              salad
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img5} alt="Alcohol" className="w-full h-auto" />
            <h2 className="text-2xl font-semibold uppercase absolute top-[88%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              soup
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
