import { string } from "i/lib/util";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: Buffer,
  },
});

let Product;

if (mongoose.models.Product) {
  Product = mongoose.model("Product");
} else {
  Product = mongoose.model("Product", productSchema);
}

export default Product;
