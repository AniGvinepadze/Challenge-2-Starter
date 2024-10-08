import React from "react";
import { features } from "../constants";
import { bill, apple, google, card } from "../assets";

const Feature = () => {
  return (
    <>
      <div className="my-36 md:flex justify-between">
        <div className="flex-[1]  m-auto max-w-[625px]">
          <div>
            <h3 className="font-bold text-[32px] sm:text-[48px]">
              You do the business, we’ll handle the money.
            </h3>
            <p className="text-gray-500 font-normal text-lg py-8">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <button
              className="w-[170px] h-[64px] bg-blue-gradient
            text-black rounded-2xl font-medium text-lg   "
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-[1] max-w-[500px]  pt-12 sm:mt-[-25px] mx-10">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`p-4 mb-4 flex rounded-xl ${
                index === 1 ? "bg-gray-gradient  text-white" : ""
              }`}
            >
              <div className="rounded-[50%] bg-[#002122] w-[64px] h-[64px] flex justify-center p-2  ">
                <img src={feature.icon} alt={feature.title}  />
              </div>
              <div className="px-3">
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="font-normal text-base text-gray-400 py-[3px]">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-36 ss:p-10 md:flex justify-between">
        <div className="flex-[1] max-w-[620px]">
          <img src={bill} alt="bill" className="object-contain" />
        </div>
        <div className="flex-[1] max-w-[500px] mt-28">
          <h3 className="font-bold text-[32px] sm:text-[48px]">
            Easily control your billing & invoicing.
          </h3>
          <p className="font-normal text-lg text-gray-500 py-3 sm:py-5">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="max-w-[300px] flex justify-between py-4 ">
            <img src={apple} alt="appstore" />
            <img src={google} alt="playstore" />
          </div>
        </div>
      </div>
      <div className="mt-36
      ss:p-10 
      md:flex justify-between">
        <div className="flex-[1] max-w-[525px] mt-2 mr-8 sm:mt-32 ">
          <h3 className="font-bold text-[32px] sm:text-[48px] ">
          Find a better card deal in few easy steps.
          </h3>
          <p className="font-normal text-lg text-gray-500 py-3 sm:py-6">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
          <button
              className="w-[170px] h-[64px] bg-blue-gradient
            text-black rounded-2xl font-medium text-lg   "
            >
              Get Started
            </button> 
        </div>
        <div className="flex-[1] max-w-[620px] py-12 sm:mt-0">
          <img src={card} alt="card" className="object-contain" />
        </div>
      </div>
    </>
  );
};

export default Feature;
