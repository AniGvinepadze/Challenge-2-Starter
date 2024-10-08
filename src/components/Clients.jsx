import React from "react";
import { clients, feedback } from "../constants";

const Clients = () => {
  return (
    <>
      <div className="w-full max-w-[1050px] flex-wrap xs:flex justify-between ss:p-10 sm:p-0">
        <div className="max-w-[400px]">
          <h2 className="font-bold text-[32px] sm:[48px]">
            What people are saying about us
          </h2>
        </div>
        <div className="max-w-[450px]">
          <p className="font-normal text-lg text-gray-500">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className=" mt-10 flex-wrap ss:p-16 sm:flex justify-between">
        {feedback.map((feed, index) => (
          <div
            key={feed.id}
            className={`max-w-[320px] rounded-xl px-7 py-12 ${
              index === 0 ? "bg-black-gradient-2" : ""
            }
             `}
          >
            <img src={feed.logo} alt={feed.logo} />
            <p className="font-normal text-lg text-gray-200 py-9">
              {feed.content}
            </p>
            <div className="flex">
              <img
                src={feed.img}
                alt={feed.img}
                className="w-[48px] h-[48px]"
              />
              <div className="px-3 mt-[-4px]">
                <p className="font-normal text-xl">{feed.name}</p>
                <p className="font-normal text-base text-gray-500 py-[3px]">
                  {feed.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div 
        className="my-26
       ss:p-10 sm:flex justify-evenly p-0 "
      >
        {clients.map((client) => (
          <div key={client.id} className="max-w-[210px] px-3 py-4 sm:py-0">
            <img
              src={client.logo}
              alt={client.logo}
              className="w-[190px] h-[42px]"
            />
          </div>
        ))}
      </div>

      <div className="max-w-[1280px] my-36 full bg-black-gradient-3 px-10 py-10 rounded-xl sm:flex justify-between p-24 ">
        <div>
          <h2 className="font-bold text-[32px] sm:text-[48px]">
            Let’s try our service now!
          </h2>
          <p className="font-normal text-lg text-gray-500 py-4">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="mt-7">
          <button
            className="w-[170px] h-[64px] bg-blue-gradient
            text-black rounded-2xl font-medium text-lg   "
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Clients;
