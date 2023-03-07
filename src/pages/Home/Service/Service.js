import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";

export default function Service() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://mobile-selling-server-mdtanvirgit.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  const handleServiceId = (id) => {
    console.log(id);
  };
  return (
    <div className=" grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2">
      {products.slice(0, 3).map((product) => (
        <div key={product.id}>
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
            <div className="flex justify-between">
              <Link to={`/order/${product._id}`}>
                <button className=" py-2 px-8  rounded-md font-bold text-white bg-gradient-to-l from-purple-600 via-purple-700 to-purple-800">
                  Bye Now
                </button>
              </Link>
              <h2 className=" text-3xl font-bold">
                Price :{" "}
                <span className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-bold">
                  {" "}
                  $ {product.price}
                </span>{" "}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
