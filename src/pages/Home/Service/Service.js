import React from "react";
import { products } from "./products";

export default function Service() {
  return (
    <div className=" grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2">
      {products.slice(0, 3).map((product) => (
        <div key={product.id} className=" border">
          <img
            src={product.img}
            className="flex justify-center items-center p-10"
            alt=""
          />
          <div className=" space-y-4 p-2">
            <h1
              className="
                 text-3xl font-bold"
            >
              {product.title}
            </h1>
            <p className=" text-gray-400 font-semibold">
              {product.description}
            </p>
            <button className=" py-2 px-8  rounded-md font-bold text-white bg-gradient-to-l from-purple-600 via-purple-700 to-purple-800">
              Bye Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
