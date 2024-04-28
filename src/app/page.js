"use client";
import React from "react";
import tshirtblack from "./Images/tshirtblack.png";
import bagblack from "./Images/bagblack.png";
import cupblack from "./Images/cupblack.png";
import babycapwhite from "./Images/babycapwhite.png";
import babyonesiewhite from "./Images/babyonesiewhite.png";
import cowboyhatblack from "./Images/cowboyhatblack.png";
import cowboyhattan from "./Images/cowboyhattan.png";
import cowboyhattan1 from "./Images/cowboyhattan1.png";
import hoodie from "./Images/hoodie.png";
import keyboard from "./Images/keyboard.png";
import mug from "./Images/mug.png";
import pacifier from "./Images/pacifier.png";
import shoes from "./Images/shoes.png";
import hat from "./Images/hat.png";
import Image from "next/image";
import Link from "next/link";
import { CarouselProvider, Slider } from "pure-react-carousel";
import { useTheme } from "next-themes";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <div className="dark">
        {/* <div className="flex flex-row">
          <div className="flex flex-row m-6 gap-3 items-center">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={10}
                style={{ borderRadius: "15%", border: "0 solid #e5e7eb" }}
              />
            </Link>
            <Link href={"/"}>
              <span className="font-medium text-[15px] font-sans text-white ">
                ACME STORE
              </span>
            </Link>
          </div>
          <div className="flex flex-row text-[#a2a2a2] text-[15px] items-center gap-8 md:w-1/4 ">
            <Link href={"/all"}>
              <span>ALL</span>
            </Link>
            <Link href={"/Stickers"}>
              <span>Stickers</span>
            </Link>
            <Link href={"/Shirts"}>
              <span>Shirts</span>
            </Link>
          </div>
          <div className="flex items-center justify-center align-middle md:w-1/3">
            <Input
              placeholder="Search for products..."
              className="font-medium w-96 m-5 rounded-md  pl-5 right-96 "
              style={{ color: "#919191" }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="ml-2 w-4 relative right-[5rem] font-black text-white "
            />
          </div>

          <div className="flex items-center justify-end md:ml-auto pr-4">
            <button
              className="border-[2px] rounded-[10px] border-[#404040] h-10 w-10 flex items-center justify-center"
              onClick={handleClick}
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="h-4 text-white flex justify-end"
              />
            </button>
          </div>
        </div> */}
        <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 ">
          <div className="md:col-span-4 md:row-span-2 border rounded-[15px] relative hover:border-blue-500">
            <Image
              src={tshirtblack}
              alt="Tshirt"
              style={{
                borderRadius: "15%",
                border: "0 solid #e5e7eb",
              }}
              className="h-[900px] w-[900px] hover:scale-110 transition duration-500 ease-in-out  transform "
            ></Image>
            <Link href={"/Cart"}>
              <span className="text-white border-[2px] rounded-[20px] pl-3 pt-3 pb-3 pr-1 m-3 text-xs font-bold relative bottom-64 left-16 max-md:text-[10px]">
                Acme Drawstring Bag{" "}
                <span className="boder-[2px] rounded-[20px] bg-[#0546ef] ml-2 p-2 relative ">
                  $12.00 USD
                </span>
              </span>
            </Link>
          </div>
          <div className="md:col-span-2 md:row-span-1 border rounded-[15px] hover:border-blue-500">
            <Image
              src={bagblack}
              alt="Bag"
              style={{ borderRadius: "15%", border: "0 solid #e5e7eb" }}
              className="h-[400px] w-[400px] hover:scale-110 transition duration-500 ease-in-out transform hover:border-blue-500"
            ></Image>
            <Link href={"/Cart"}>
              <span className="text-white border-[2px] rounded-[20px] pl-3 pt-3 pb-3 pr-1 m-3 text-xs font-bold relative bottom-4">
                Acme Drawstring Bag{" "}
                <span className="boder-[2px] rounded-[20px] bg-[#0546ef] ml-2 p-2 relative ">
                  $12.00 USD
                </span>
              </span>
            </Link>
          </div>
          <div className="md:col-span-2 md:row-span-1 border rounded-[15px] hover:border-blue-500">
            <Image
              src={cupblack}
              alt="Cup"
              style={{ borderRadius: "15%", border: "0 solid #e5e7eb" }}
              className="h-[400px] w-[400px] hover:scale-110 transition duration-500 ease-in-out transform hover:border-blue-500 "
            ></Image>
            <div>
              <Link href={"/Cart"}>
                <span className="text-white border-[2px] rounded-[20px] pl-3 pt-3 pb-3 pr-1 m-3 text-xs font-bold relative bottom-4">
                  Acme Drawstring Bag{" "}
                  <span className="boder-[2px] rounded-[20px] bg-[#0546ef] ml-2 p-2 relative ">
                    $12.00 USD
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        <div>
          <CarouselProvider
            totalSlides={4.2}
            visibleSlides={1}
            // isPlaying={true}
            // infinite={true}
            interval={5000}
          >
            <Slider className="slider">
              <div className="flexrow m-9 ">
                <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                  <div>
                    <Image
                      src={babyonesiewhite}
                      alt="Baby Cap"
                      className="h-[190px] w-[190px] hover:scale-110 transition duration-500 ease-in-out transform max-w-96"
                    ></Image>
                  </div>
                  <Link href={"/Cart"} className="absolute bottom-4 left-2 ">
                    <span className="text-white border-[2px] rounded-[20px] text-[10px] font-bold pl-2 pt-2 pb-2 ">
                      Acme Drawstring Bag{" "}
                      <span className="boder-[2px] rounded-[20px] bg-[#0546ef]  p-2">
                        $12.00 USD
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                  <Image
                    src={babycapwhite}
                    alt="Baby Cap"
                    className="h-[190px] w-[190px]   hover:scale-110 transition duration-500 ease-in-out transform max-w-96 "
                  ></Image>
                  <Link href={"/Cart"} className="absolute bottom-4 left-2">
                    <span className="text-white border-[2px] rounded-[20px]  text-[10px] font-bold pl-2 pt-2 pb-2">
                      Acme Drawstring Bag{" "}
                      <span className="boder-[2px] rounded-[20px] bg-[#0546ef]  p-2">
                        $12.00 USD
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                  <Image
                    src={cowboyhatblack}
                    alt="Baby Cap"
                    className="h-[190px] w-[190px] hover:scale-110 transition duration-500 ease-in-out transform max-w-96 "
                  ></Image>
                  <Link href={"/Cart"} className="absolute bottom-4 left-2">
                    <span className="text-white border-[2px] rounded-[20px]  text-[10px] font-bold pl-2 pt-2 pb-2">
                      Acme Drawstring Bag{" "}
                      <span className="boder-[2px] rounded-[20px] bg-[#0546ef]  p-2">
                        $12.00 USD
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                  <Image
                    src={cowboyhattan}
                    alt="Baby Cap"
                    className="h-[190px] w-[190px]  hover:scale-110 transition duration-500 ease-in-out transform max-w-96 "
                  ></Image>
                  <Link href={"/Cart"} className="absolute bottom-4 left-2">
                    <span className="text-white border-[2px] rounded-[20px]  text-[10px] font-bold pl-2 pt-2 pb-2">
                      Acme Drawstring Bag{" "}
                      <span className="boder-[2px] rounded-[20px] bg-[#0546ef]  p-2">
                        $12.00 USD
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                  <Image
                    src={cowboyhattan1}
                    alt="Baby Cap"
                    className="h-[190px] w-[190px] hover:scale-110 transition duration-500 ease-in-out transform max-w-96 "
                  ></Image>
                  <Link href={"/Cart"} className="absolute bottom-4 left-2">
                    <span className="text-white border-[2px] rounded-[20px]  text-[10px] font-bold pl-2 pt-2 pb-2">
                      Acme Drawstring Bag{" "}
                      <span className="boder-[2px] rounded-[20px] bg-[#0546ef]  p-2">
                        $12.00 USD
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                  <Image
                    src={hoodie}
                    alt="Baby Cap"
                    className="h-[190px] w-[190px] hover:scale-110 transition duration-500 ease-in-out transform max-w-96 "
                  ></Image>
                  <Link href={"/Cart"} className="absolute bottom-4 left-2">
                    <span className="text-white border-[2px] rounded-[20px]  text-[10px] font-bold pl-2 pt-2 pb-2">
                      Acme Drawstring Bag{" "}
                      <span className="boder-[2px] rounded-[20px] bg-[#0546ef]  p-2">
                        $12.00 USD
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                  <Image
                    src={keyboard}
                    alt="Baby Cap"
                    className="h-[190px] w-[190px] hover:scale-110 transition duration-500 ease-in-out transform max-w-96 "
                  ></Image>
                  <Link href={"/Cart"} className="absolute bottom-4 left-2">
                    <span className="text-white border-[2px] rounded-[20px]  text-[10px] font-bold pl-2 pt-2 pb-2">
                      Acme Drawstring Bag{" "}
                      <span className="boder-[2px] rounded-[20px] bg-[#0546ef]  p-2">
                        $12.00 USD
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                  <Image
                    src={mug}
                    alt="Baby Cap"
                    className="h-[190px] w-[190px] hover:scale-110 transition duration-500 ease-in-out transform max-w-96 "
                  ></Image>
                  <Link href={"/Cart"} className="absolute bottom-4 left-2">
                    <span className="text-white border-[2px] rounded-[20px]  text-[10px] font-bold pl-2 pt-2 pb-2">
                      Acme Drawstring Bag{" "}
                      <span className="boder-[2px] rounded-[20px] bg-[#0546ef]  p-2">
                        $12.00 USD
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                  <Image
                    src={pacifier}
                    alt="Baby Cap"
                    className="h-[190px] w-[190px] hover:scale-110 transition duration-500 ease-in-out transform max-w-96 "
                  ></Image>
                  <Link href={"/Cart"} className="absolute bottom-4 left-2">
                    <span className="text-white border-[2px] rounded-[20px]  text-[10px] font-bold pl-2 pt-2 pb-2">
                      Acme Drawstring Bag{" "}
                      <span className="boder-[2px] rounded-[20px] bg-[#0546ef]  p-2">
                        $12.00 USD
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                  <Image
                    src={shoes}
                    alt="Baby Cap"
                    className="h-[190px] w-[190px] hover:scale-110 transition duration-500 ease-in-out transform max-w-96 "
                  ></Image>
                  <Link href={"/Cart"} className="absolute bottom-4 left-2">
                    <span className="text-white border-[2px] rounded-[20px]  text-[10px] font-bold pl-2 pt-2 pb-2">
                      Acme Drawstring Bag{" "}
                      <span className="boder-[2px] rounded-[20px] bg-[#0546ef]  p-2">
                        $12.00 USD
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="border-[1px] h-48 w-96 flex justify-center items-center rounded-lg bg-black relative">
                  <Image
                    src={hat}
                    alt="Baby Cap"
                    className="h-[190px] w-[190px] hover:scale-110 transition duration-500 ease-in-out transform max-w-96"
                  ></Image>
                  <Link href={"/Cart"} className="absolute bottom-4 left-2">
                    <span className="text-white border-[2px] rounded-[20px]  text-[10px] font-bold pl-2 pt-2 pb-2">
                      Acme Drawstring Bag{" "}
                      <span className="boder-[2px] rounded-[20px] bg-[#0546ef]  p-2">
                        $12.00 USD
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </Slider>
          </CarouselProvider>
          <hr className="border-[1.5px]"></hr>
        </div>
      </div>
    </>
  );
}
