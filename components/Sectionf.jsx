import Image from "next/image";
import React from "react";

const Sectionf = () => {
  return (
    <div className="  ">
      <div className="max-w-[1280px] ml-4 xl:mx-auto flex lg:flex-row flex-col space-y-4 justify-between items-center">
        <div>
          <h2 className="text-[40px] max-w-[550px] leading-[154%] font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="text-lg leading-[124%] max-w-[520px] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            commodo est.Pellentesque eu placerat mauris. Etiam ut maximus ante.
            Suspendisse varius dolor nec bibendum dignissim. Proin in diam a
            justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea
            dictumst.
          </p>
          <button className="mt-16 h-[60px] w-[250px] bg-blue-400 text-white font bold rounded-[30px]">
            check Pricing
          </button>
        </div>
        <div>
          <Image src={"/images/img1.png"} height={518} width={509} />
        </div>
      </div>
    </div>
  );
};

export default Sectionf;
