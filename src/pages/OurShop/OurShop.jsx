import Cover from "../Shared/Cover/Cover";
import coverImg from "../../../public/ourShop/banner2.jpg";

const OurShop = () => {
  return (
    <div>
      <Cover
        img={coverImg}
        title={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      />
    </div>
  );
};

export default OurShop;
