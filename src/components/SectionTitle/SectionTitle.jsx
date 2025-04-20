const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center items-center mb-8">
      <p className="text-lg font-semibold text-yellow-500">----{" "}{subHeading}{" "}----</p>
      <div className="flex justify-center items-center my-3">
        <p className="border-t border-[#6d6a6ad7] shadow-2xl w-80 text-center"></p>
      </div>
      <h2 className="text-3xl font-semibold text-[#151515]">{heading}</h2>
      <div className="flex justify-center items-center my-3">
        <p className="border-t border-[#6d6969] shadow-2xl w-80 text-center"></p>
      </div>
    </div>
  );
};

export default SectionTitle;
