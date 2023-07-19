import Image from "next/image";
import React from "react";

const Sectiont = () => {
  return (
    <div className="max-w-[1280px]  mx-auto ">
      <div className="flex lg:flex-row flex-col justify-center space-y-10 lg:space-y-0 items-center lg:justify-between lg:space-x-14">
        <div className="flex flex-col">
          <Image src={"/images/Artwork 20.png"} height={157} width={242} />
          <div className="max-w-[328px] pt-10">
            <h3 className="text-24px font-bold">Lorem ipsum dolor sit .</h3>
            <p className="text-base pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
              ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
              diam a justo sollicitudin mattis eu sagittis nunc. In hac
              habitasse platea dictumst.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <Image src={"/images/Artwork 22.png"} height={157} width={242} />
          <div className="max-w-[328px] pt-10">
            <h3 className="text-24px font-bold">Lorem ipsum dolor sit .</h3>
            <p className="text-base pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
              ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
              diam a justo sollicitudin mattis eu sagittis nunc. In hac
              habitasse platea dictumst.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <Image src={"/images/Artwork 23.png"} height={172} width={186} />
          <div className="max-w-[328px] pt-10">
            <h3 className="text-24px font-bold">Lorem ipsum dolor sit .</h3>
            <p className="text-base pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
              ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
              diam a justo sollicitudin mattis eu sagittis nunc. In hac
              habitasse platea dictumst.
            </p>
          </div>
        </div>
      </div>
      <div className="ml-4 lg:ml-0 pt-[138px] flex flex-col ">
        <div className="flex justify-center">
          <h2 className="text-[35px] font-bold">
            Lorem ipsum dolor sit amet,consectetur adipiscing elit.
          </h2>
        </div>

        <div className=" pt-[105px] ">
          <div className="flex  items-center space-x-10">
            <Image src={"/images/save-money.png"} height={70} width={70} />
            <p className="text-[24px] font-bold">Lorem ipsum dolor sit .</p>
          </div>
          <div>
            <p className="text-[21px] max-w-[640px] pt-4">
              adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
              mauris. ut maximus ante. Suspendisse varius dolor nec bibendum
              dignissim
            </p>
          </div>
          <div className="pt-6">
            <button className=" h-[60px] w-[250px] bg-blue-400 text-white font bold rounded-[30px]">
              check Pricing
            </button>
          </div>
        </div>
        <div className="pt-10 flex justify-end ">
          <div>
            <div className="flex  items-center space-x-10">
              <Image src={"/images/accuracy.png"} height={70} width={70} />
              <p className="text-[24px] font-bold">Lorem ipsum dolor sit .</p>
            </div>
            <div>
              <p className="text-[21px] max-w-[470px] pt-4">
                adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
                mauris. ut maximus ante. Suspendisse
              </p>
            </div>
            <div className="pt-6">
              <button className=" h-[60px] w-[250px] bg-blue-400 text-white font bold rounded-[30px]">
                check Pricing
              </button>
            </div>
          </div>
        </div>
        <div className="pt-10 ">
          <div className="flex  items-center space-x-10">
            <Image src={"/images/hiring.png"} height={70} width={70} />
            <p className="text-[24px] font-bold">Lorem ipsum dolor sit .</p>
          </div>
          <div>
            <p className="text-[21px] max-w-[640px] pt-4">
              adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
              mauris. ut maximus ante. Suspendisse varius dolor nec bibendum
              dignissim
            </p>
          </div>
          <div className="pt-6">
            <button className=" h-[60px] w-[250px] bg-blue-400 text-white font bold rounded-[30px]">
              check Pricing
            </button>
          </div>
        </div>
        <div className="pt-10 flex justify-end ">
          <div>
            <div className="flex  items-center space-x-10">
              <Image src={"/images/money-back.png"} height={70} width={70} />
              <p className="text-[24px] font-bold">Lorem ipsum dolor sit .</p>
            </div>
            <div>
              <p className="text-[21px] max-w-[470px] pt-4">
                adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
                mauris. ut maximus ante. Suspendisse
              </p>
            </div>
            <div className="pt-6">
              <button className=" h-[60px] w-[250px] bg-blue-400 text-white font bold rounded-[30px]">
                check Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectiont;
