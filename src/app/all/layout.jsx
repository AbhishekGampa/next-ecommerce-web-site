"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function layout({ children }) {
  const [isShowAll, setIsShowAll] = useState(false);
  // console.log("isShowAll: ", isShowAll);
  const [isShowCollection, setIsShowCollection] = useState(false);

  const Pathname = usePathname();
  const path_name = Pathname.split("/");
  let selectedItem = path_name[path_name.length - 1];
  selectedItem = selectedItem.toUpperCase();
  console.log("selectedItem: ", selectedItem);

  const handleClickAll = () => {
    setIsShowAll((prevState) => !prevState);
    console.log("Button clicked");
  };

  const handleClickCollection = () => {
    setIsShowCollection((prevState) => !prevState);
    console.log("collection clicked");
  };

  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        <div className="md:hidden w-full">
          <button className="w-full" onClick={handleClickAll}>
            <div className="flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30 mb-5 relative ">
              <div>{selectedItem}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
              {isShowAll && (
                <div className="w-full h-full  absolute top-[115%] left-0">
                  <ul className="p-5 flex flex-col gap-4 bg-black relative z-10">
                    <li>
                      <a href="/all">All</a>
                    </li>
                    <li>
                      <a href="/all/bags">Bags</a>
                    </li>
                    <li>
                      <a
                        href="/all/drinkware"
                        onClick={(event) =>
                          handleSelectItem(event, "Drinkware")
                        }
                      >
                        Drinkware
                      </a>
                    </li>
                    <li>
                      <a
                        href="/all/electronics"
                        onClick={(event) =>
                          handleSelectItem(event, "Electronics")
                        }
                      >
                        Electronics
                      </a>
                    </li>
                    <li>
                      <a href="/all/footware">Footware</a>
                    </li>
                    <li>
                      <a href="/all/headwear">Headwear</a>
                    </li>
                    <li>
                      <a href="/all/hoodies">Hoodies</a>
                    </li>
                    <li>
                      <a href="/all/jackets">Jackets</a>
                    </li>
                    <li>
                      <a href="/all/kids">Kids</a>
                    </li>
                    <li>
                      <a href="/all/pets">Pets</a>
                    </li>
                    <li>
                      <a href="/all/shirts">Shirts</a>
                    </li>
                    <li>
                      <a href="/all/stickers">Stickers</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </button>
          <button className="w-full" onClick={handleClickCollection}>
            <div className="flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30 relative">
              <div>Relevance</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
              {isShowCollection && (
                <div className=" w-full h-full  absolute top-[100%] left-0">
                  <ul className="p-5 flex flex-col gap-4 bg-black relative z-10">
                    <li>
                      <a>Relevance</a>
                    </li>
                    <li>
                      <a>Trending</a>
                    </li>
                    <li>
                      <a>Latest arrivals</a>
                    </li>
                    <li>
                      <a>Price: Low to high</a>
                    </li>
                    <li>
                      <a>Price: High to low</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </button>
        </div>

        <div className="order-first w-full flex-none md:max-w-[125px]">
          <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
            Collections
          </h3>
          <ul className="hidden md:block">
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                All
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all/bags"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Bags
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all/drinkware"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Drinkware
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all/electronics"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Electronics
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all/footware"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Footware
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all/headwear"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Headwear
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all/hoodies"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Hoodies
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all/jackets"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Jackets
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all/kids"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Kids
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all/pets"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Pets
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all/shirts"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Shirts
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/all/stickers"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Stickers
              </a>
            </li>
          </ul>
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          {children}
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
            Sort by
          </h3>
          <ul className="hidden md:block">
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Relevance
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Trending
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Latest arrivals
              </a>
            </li>
            <li
              className="mt-2 flex text-black dark:text-white"
              style={{ width: "max-content" }}
            >
              <a
                href="/"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline "
              >
                Price: Low to high
              </a>
            </li>
            <li className="mt-2 flex text-black dark:text-white">
              <a
                href="/"
                className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline"
              >
                Price: High to low
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default layout;
