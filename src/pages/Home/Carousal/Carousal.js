import { Carousel } from "flowbite-react";
import React from "react";
import { images } from "./caroselItems";
export default function Carousal() {
  console.log(process.env.REACT_APP_apiKey);
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {images.map((items) => (
            <div
              key={items.id}
              className=" flex bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500"
            >
              <img className=" w-1/2 h-80 p-10" alt="" src={items.img} />
              <div className="w-1/2 text-center relative">
                <h1 className=" text-3xl lg:text-5xl md:text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  inline-block text-transparent bg-clip-text absolute left-20 top-20 font-bold">
                  {items.title}
                </h1>
                <p className=" text-xl lg:text-3xl absolute top-40 font-semibold">
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
