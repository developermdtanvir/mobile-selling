import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";

export default function Service() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAsc, setIsAsc] = useState(true);
  const searchRef = useRef();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${search}&order=${
        isAsc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [isAsc, search]);

  if (loading) {
    return <Loading />;
  }

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <div>
      <div className=" flex justify-center items-center border-x-indigo-500 ">
        <button
          className=" border py-2 px-8 font-bold my-2"
          onClick={() => setIsAsc(!isAsc)}
        >
          {isAsc ? "desc" : "asc"}
        </button>
        <input ref={searchRef} type="text" className=" py-2 border" />{" "}
        <button onClick={handleSearch}>search</button>
      </div>
      <div className=" grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2">
        {products.slice(0, 3).map((product) => (
          <div key={product._id}>
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
    </div>
  );
}
