import image from "../../../..//public/banner/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div
      className="w-full h-[600px] py-20"
      style={{
        background: `linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%), url(${image})`,
        backgroundColor: "lightgray",
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div>
        <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      </div>
      <div className="md:grid md:grid-cols-2 gap-16 md:px-36 px-16 bg-zinc-500 bg-opacity-40 py-6">
        <div className="md:w-[470px] md:h-[290px]">
          <img className="w-full h-full md:block hidden" src={image} alt="" />
        </div>
        <div className="my-auto">
          <p>
            March 20, 2023 <br /> WHERE CAN I GET SOME? <br /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </p>
          <button className="my-6 btn border-b-2 border-l-0 border-r-0 border-t-0 bg-none border-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
