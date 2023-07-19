import Image from "next/image";
import React from "react";

const Sectione = () => {
  return (
    <div className="pt-[189px] max-w-[1280px] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-[35px]">Lorem ipsum dolor sit .</h2>
        <div className="relative mt-20 h-[363px] w-[1100px] bg-[#F8FAFC] rounded-[20px] drop-shadow-2xl">
          <div className="pt-10 pl-10 flex items-center space-x-3">
            <Image src={"/images/6-06.png"} height={64} width={64} />
            <p className="text-[25px] font-bold">Lorem ipsum dolor sit .</p>
          </div>
          <div className="absolute  left-24 top-[165px] flex space-x-7  ">
            <div className="w-[285px] h-[263px] bg-white rounded-[30px]  drop-shadow-xl">
              <div className="flex justify-between items-start">
                <div className="pt-7 pl-7 flex">
                  <Image src={"/images/john.png"} height={43} width={43} />
                  <div className="pl-1">
                    <p className="text-sm">Jhon Doe</p>
                    <p>CEO</p>
                  </div>
                </div>
                <div className="flex pr-7 pt-7 gap-1">
                  <Image src={"/images/star.png"} height={14} width={15} />
                  <Image src={"/images/star.png"} height={14} width={15} />
                  <Image src={"/images/star.png"} height={14} width={15} />
                  <Image src={"/images/star.png"} height={14} width={15} />
                </div>
              </div>
              <p className="text-[13px] px-5 pt-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>
            <div className="w-[285px] h-[263px] bg-white rounded-[30px]  drop-shadow-xl">
              <div className="flex justify-between items-start">
                <div className="pt-7 pl-7 flex">
                  <Image src={"/images/green.png"} height={43} width={43} />
                  <div className="pl-1">
                    <p className="text-sm">Amanda green</p>
                    <p className="text-xs">Operations Manager</p>
                  </div>
                </div>
                <div className="flex pr-7 pt-7 gap-1">
                  <Image src={"/images/star.png"} height={14} width={15} />
                  <Image src={"/images/star.png"} height={14} width={15} />
                  <Image src={"/images/star.png"} height={14} width={15} />
                  <Image src={"/images/star.png"} height={14} width={15} />
                </div>
              </div>
              <p className="text-[13px] px-5 pt-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>
            <div className="w-[285px] h-[263px] bg-white rounded-[30px]  drop-shadow-xl">
              <div className="flex justify-between items-start">
                <div className="pt-7 pl-7 flex">
                  <Image src={"/images/sam.png"} height={43} width={43} />
                  <div className="pl-1">
                    <p className="text-sm">Sam Cooper</p>
                    <p className="text-xs whitespace-nowrap">
                      Customer Service Manager
                    </p>
                  </div>
                </div>
                <div className="flex pr-7 pt-7 gap-1">
                  <Image src={"/images/star.png"} height={14} width={15} />
                  <Image src={"/images/star.png"} height={14} width={15} />
                  <Image src={"/images/star.png"} height={14} width={15} />
                  <Image src={"/images/star.png"} height={14} width={15} />
                </div>
              </div>
              <p className="text-[13px] px-5 pt-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>{" "}
          </div>
          <div className="absolute top-[250px] drop-shadow-xl  -right-[30px] h-[63px] w-[63px] rounded-full bg-white text-center flex items-center justify-center">
            <p className="font-bold">&gt;</p>
          </div>
        </div>
      </div>
      <div className="pt-[349px] flex flex-col items-center justify-center">
        <h1 className="text-[35px] font-bold">
          Lorem ipsum dolor sit amet,consectetur adipiscing elit.
        </h1>
        <div className="flex space-x-52 pt-[142px]">
          <div className="flex flex-col items-center space-y-4">
            <Image src={"/images/fire.png"} height={58} width={185} />
            <p className="text-lg font-bold">Forms On Fire</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image src={"/images/lectro.png"} height={5.0} width={177} />
            <p className="text-lg font-bold">ElectroNeek Studio IDE</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image src={"/images/last.png"} height={25} width={68} />
            <p className="text-lg font-bold">Jot form</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectione;
