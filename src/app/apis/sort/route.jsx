import database from "../../database";
import Product from "../../../Models/ProductSchema";

export async function POST(request) {
  await database();
  const res = await request.formData();
  const name = res.get("name");
  const price = res.get("price");

  const description = res.get("description");
  const image = res.get("image");
  // Convert ArrayBuffer to Buffer
  const buffer = Buffer.from(await image.arrayBuffer());

  const product = new Product({
    name,
    price,
    image: buffer, // Store the image as binary
    description,
  });

  // Save the product
  try {
    const res = await product.save();
    return Response.json({ message: "Product created successfully" });
  } catch (err) {
    console.log("err:-> ", err);
    return Response.json({ message: "Product creation failed" });
  }
}

export async function GET(req) {
  await database();
  let sort = await req.nextUrl.searchParams;
  const sortValue = sort.get("sort");
  console.log("sortValue:-> ", sortValue);
  if (!sortValue) {
    await database();
    const res = await Product.find();
    return Response.json({ res });
  }
  const res = await Product.find({ description: sortValue });
  return Response.json({ res });
}
