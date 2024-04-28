"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./style.css";

function ImageDeploy() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("data:-> ", data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    console.log("formData:-> ", formData);

    await fetch("http://localhost:3000/apis/sort", {
      method: "POST",
      body: formData, // send formData here
    })
      .then((res) => {
        console.log("res:-> ", res);
      })
      .catch((err) => {
        console.log("err:-> ", err);
        setIsError(true);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="text-white">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-10 text-center justify-center">
            <label>Product Name</label>
            <input
              className="border-2 border-gray-500 text-black p-2"
              type="text"
              {...register("name")}
            />
          </div>
          <div className="flex flex-row gap-10 text-center justify-center">
            <label>Product Price</label>
            <input
              className="border-2 border-gray-500 text-black p-2"
              type="number"
              {...register("price")}
            />
          </div>
          <div className="flex flex-row gap-10 text-center justify-center">
            <label>Product Description</label>
            <input
              className="border-2 border-gray-500 text-black p-2"
              type="text"
              {...register("description")}
            />
          </div>
          <div className="flex flex-row gap-10 text-center justify-center">
            <label>Product Image</label>
            <input
              className="border-2 border-gray-500 text-black p-2"
              type="file"
              {...register("image")}
            />
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg w-28 text-center justify-center"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ImageDeploy;
