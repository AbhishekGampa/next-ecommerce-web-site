"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

function Bags() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/apis/sort?sort=bag")
      .then((res) => {
        setProducts(res.data.res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }
  //

  return (
    <div className="flex flex-row gap-10 flex-wrap lg:justify-start max-md:justify-center">
      {products?.map((product) => {
        let base64Image = btoa(
          product.image.data.map((item) => String.fromCharCode(item)).join("")
        );
        //

        return (
          <div
            key={product._id}
            className="w-72 h-[290px] overflow-hidden rounded-lg border-[2px] bg-white dark:hover:border-blue-900 transition dark:bg-black relative border-neutral-200 dark:border-neutral-800"
          >
            <Image
              src={`data:${product.image.mimetype};base64,${base64Image}`}
              alt={product.name}
              width={100}
              height={100} // Add this line
              className="object-cover w-full h-full hover:scale-110 transition duration-500 ease-in-out transform"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 p-2">
              <h1 className="text-lg font-bold">{product.name}</h1>
              <p className="text-sm">{product.description}</p>
              <p className="text-sm">Rs. {product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bags;
