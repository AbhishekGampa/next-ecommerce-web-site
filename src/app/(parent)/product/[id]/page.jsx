"use client";
import { createContext, useContext } from "react";
import Cart from "../../../app/cart/page";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { CarouselProvider, Slider } from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../../../app/globals.css";
import { cartContext } from "../../layout";

function Product(req) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [description, setDescription] = useState(null);
  const [sortedProducts, setSortedProducts] = useState([]);
  console.log("sortedProducts: ", sortedProducts);
  const { productid, setProductId } = useContext(cartContext);

  const pathname = usePathname();
  console.log("pathname: ", pathname);

  const parts = pathname.split("/");
  console.log("parts: ", parts);

  // Get the last element of the array, which should be the product ID
  const product_id = parts[parts.length - 1];

  const productId = req.params.id;
  useEffect(() => {
    console.log("useEffect productId: ", productId);
    axios
      .get(`http://localhost:3000/apis/product/${productId}`)
      .then((res) => {
        console.log("res: ", res);
        setProducts(res.data);
        setDescription(res.data.product.description);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/apis/sort?sort=${description}`)
      .then((res) => {
        const filteredProducts = res.data.res.filter(
          (item) => item._id !== product_id
        );
        setSortedProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [description]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  const handleClick = () => {
    setIsShow(true);
    setProductId((pre) => [...pre, productId]);
  };

  let base64Image = btoa(
    products.product.image.data
      .map((item) => String.fromCharCode(item))
      .join("")
  );

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center  m-5 bg-black border rounded-lg p-6">
        <div className="flex justify-center items-center md:w-2/3">
          {base64Image && (
            <Image
              src={`data:${products.product.image.mimetype};base64,${base64Image}`}
              alt={products.name}
              width={100}
              height={100}
              className="object-cover w-96 h-96 hover:scale-110 transition duration-500 ease-in-out transform ml-5 flex justify-center align-middle max-md:w-full max-md:h-full "
            />
          )}
        </div>

        <div className="flex flex-col  md:w-1/3">
          <div>
            <h1 className="text-white text-5xl font-medium max-md:text-xl">
              {products.product.name}
            </h1>
          </div>
          <div className="border rounded-3xl bg-blue-600 w-fit h-fit p-2 mt-2">
            <p className="text-white text-center ">
              $ {products.product.price} USD
            </p>
          </div>
          <div>
            <hr className="mt-4" />
          </div>
          <div className="flex flex-row">
            <p className="text-white mt-5">
              kfgksduhgfusdgfukbhks sssssssssssssssssssssssssss
              sssssfeyrgekaVrwvrfuk vsfvsekvfvsuyfk usfuygerfusdhvfuy gsDuofg
              osgfosgfogsrogfosgfhgsOUGdf
            </p>
          </div>
          <div>
            <button
              className="bg-blue-600 text-white rounded-lg p-2 mt-5"
              onClick={handleClick}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <>
        {isShow && (
          <Cart
            isOpen={isShow}
            onClose={() => setIsShow(false)}
            state={productId}
          ></Cart>
        )}
      </>

      <div>
        <h1 className="text-white text-5xl font-medium m-5">
          Related Products
        </h1>
      </div>
      <div className="flex flex-row">
        <CarouselProvider
          totalSlides={4.2}
          visibleSlides={1}
          isPlaying={false}
          // infinite={true}
          interval={5000}
        >
          <Slider className="slider">
            <div className="flexrow m-9 ">
              {sortedProducts.map((item) => {
                let base64Image = btoa(
                  item.image.data
                    .map((item) => String.fromCharCode(item))
                    .join("")
                );
                return (
                  <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                    <div>
                      <Image
                        src={`data:${item.image.mimetype};base64,${base64Image}`}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="h-[190px] w-[190px] hover:scale-110 transition duration-500 ease-in-out transform max-w-96"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Slider>
        </CarouselProvider>
      </div>
    </>
  );
}

export default Product;
