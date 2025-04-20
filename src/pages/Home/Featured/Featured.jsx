import image from "../../../..//public/banner/featured.jpg";

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
      <div className="text-center items-center mb-8">
      <p className="text-lg font-semibold text-yellow-500">----{" "}{"Check it out"}{" "}----</p>
      <div className="flex justify-center items-center my-3">
        <p className="border-t border-white h-2 shadow-2xl w-80 text-center"></p>
      </div>
      <h2 className="text-3xl font-semibold text-white">{"FROM OUR MENU"}</h2>
      <div className="flex justify-center items-center my-3">
        <p className="border-t border-white h-2 shadow-2xl w-80 text-center"></p>
      </div>
    </div>
      <div className="md:grid md:grid-cols-2 gap-16 md:px-36 px-16 text-white py-6">
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
          <button className="uppercase btn btn-outline border-0 border-b-4 my-4 border-b-white text-white hover:border-b-black hover:bg-black hover:text-green-500">
          Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
