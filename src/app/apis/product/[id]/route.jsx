import mongoose from "mongoose";
import Product from "../../../../Models/ProductSchema";
import dbConnection from "../../../database";

export async function GET(req, params) {
  const id = params.params.id;
  console.log("id: ", id);

  // Check if id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("Invalid ObjectId", id);
    return Response.json({ error: "Invalid product id" });
  }

  try {
    await dbConnection();
    const product = await Product.findById(id);
    return Response.json({ product });
  } catch (err) {
    console.log("error in db connection", err);
    return Response.json({ error: "Error fetching product" });
  }
}
