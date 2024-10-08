import React from "react";
import { discount, arrowUp, robot } from "../assets";
import { stats } from "../constants";

const Introduction = () => {
  return (
    <>
      <div className="flex-wrap mt-10 text-white md:flex my-20 ">
        {/* left side */}
        <div className="text-white flex-[1]">
          <div className=" flex justify-center items-center max-w-[388px] h-[32px]  my-5 rounded-lg bg-discount-gradient">
            <img src={discount} alt="discount" />
            <p className="font-normal text-base pl-2">
              20% <span className="text-gray-400">DISCOUNT FOR</span> 1 MONTH{" "}
              <span className="text-gray-400">ACCOUNT</span>
            </p>
          </div>
          <div className="max-w-[670px]">
            <div className="flex">
              <h1 className="font-bold text-[52px] leading-[60px] sm:text-[72px] ">
                The Next{" "}
                <span className="text-secondary sm:leading-[100px]">
                  Generation
                </span>{" "}
                Payment <span className="sm:leading-[100px]">Method.</span>
              </h1>
              <button className="max-w-[140px] max-h-[140px] rounded-full border-[2px] border-secondary p-3 ">
                <p className="font-medium text-lg p-5 text-center text-secondary">
                  Get{" "}
                  <span className="p-3">
                    <img
                      src={arrowUp}
                      alt="arrowUp"
                      className="ml-12 mt-[-24px]"
                    />
                  </span>{" "}
                  Started
                </p>
              </button>
            </div>
            {/* <div>
            <button className="max-w[240px] max-h-[240px] rounded-full border-[2px] border-secondary p-5 " >
                <p className="font-medium text-lg p-5 text-center text-secondary" >Get <span className="p-3"><img src={arrowUp} alt="arrowUp" className="ml-12 mt-[-24px]" /></span> Started</p>
            </button>
        </div> */}
            <div className="max-w-[484px] py-8 ">
              <p className="text-gray-400 font-normal text-lg">
                Our team of experts uses a methodology to identify the credit
                cards most likely to fit your needs. We examine annual
                percentage rates, annual fees.
              </p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex-[1] max-w-[670px] py-1 ">
          <img src={robot} alt="robot" className="object-contain ml-20 " />
          {/* <div className=" bg-lay-out max-w-[578px] h-[571px] object-contain absolute ml-10 " /> */}
        </div>
      </div>
      <div className="max-w-[1280px] w-full flex-wrap justify-between sm:flex">
        {stats.map((stat) => (
          <div key={stat.id} className="flex justify-evenly">
            <h3 className="font-bold text-[40.89px] text-white p-3">
              {stat.value}
            </h3>
            <p className="font-normal text-lg text-gradient px-3 py-7">
              {stat.title}
            </p>
            <div className="h-5 w-[4px] bg-gray-600 rounded-md mx-10 my-8" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Introduction;
