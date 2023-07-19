import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="max-w-[1280px]  mx-auto flex flex-col justify-center items-center space-y-8 mt-5">
        <Image src={"/images/nav.png"} height={50} width={165}></Image>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-5 lg:space-x-14 text-[19px] font-bold">
          <h3>Nav1</h3>
          <h3>Nav2</h3>
          <h3>
            Nav3{" "}
            <span className="ml-3 inline-block transform rotate-180">^</span>
          </h3>
          <h3>
            Nav4{" "}
            <span className="ml-3 inline-block transform rotate-180">^</span>
          </h3>
          <h3>Nav5</h3>
          <h3>Nav6</h3>
          <h3>Nav7</h3>
          <h3>Nav8</h3>
        </div>
      </div>
      <div className="h-1 bg-[#707070] w-full mt-5"></div>
    </div>
  );
};

export default Navbar;
