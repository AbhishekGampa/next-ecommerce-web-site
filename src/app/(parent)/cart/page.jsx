import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
// import "../../global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useContext } from "react";
import { cartContext } from "../layout";

export default function Cart({ isOpen, onClose, hideCloseButton, ...props }) {
  let productid = useContext(cartContext);
  const [products, setProducts] = useState(null);
  console.log("products:---> ", products);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState();

  useEffect(() => {
    // Save the total to localStorage whenever it changes
    localStorage.setItem("total", JSON.stringify(total));
  }, [total]);

  useEffect(() => {
    if (loading) {
      console.log("loading");
    }
    if (productid) {
      console.log("working");
      Promise.all(
        productid.productid.map((id) =>
          axios.get(`http://localhost:3000/apis/product/${id}`)
        )
      )
        .then((responses) => {
          console.log("responses: ", responses);
          const products = responses.map((res) => res.data);
          console.log("res: ", products);
          setProducts(products);
          let newTotal = 0;
          products.forEach((product) => {
            newTotal += product.price * product.quantity; // assuming each product has a quantity property
          });
          setTotal(newTotal);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
    }
  }, [productid, loading]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className="bg-black h-[95%] flex w-full fixed right-3 top-0 sm:!m-0"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <ModalContent
          className="text-white flex justify-end h-full"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <>
            <ModalHeader>My Cart</ModalHeader>
            <ModalBody
              className="h-[500px] overflow-auto "
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {products && products.length < 1 && (
                <div
                  className="h-full flex justify-center"
                  style={{ alignItems: "center" }}
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="h-16 text-white "
                  />
                </div>
              )}
              <div>
                {products && products.error ? (
                  <div>{products.error}</div>
                ) : (
                  <table className="w-full" style={{ textAlign: "center" }}>
                    <thead>
                      <tr>
                        <th>S.NO</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    {loading && (
                      <div className="flex justify-center items-center h-screen">
                        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-white"></div>
                      </div>
                    )}
                    {products &&
                      products.map((product) => {
                        let base64Image = btoa(
                          product.product.image.data
                            .map((item) => String.fromCharCode(item))
                            .join("")
                        );
                        return (
                          <tbody className="justify-center align-middle">
                            <tr key={product.product._id}>
                              <td>1</td>
                              <td>
                                <img
                                  src={`data:${product.product.image.mimetype};base64,${base64Image}`}
                                  alt={product.product.name}
                                  className="w-16 h-16"
                                  style={{ margin: "auto" }}
                                />
                                <div>
                                  <h1>{product.product.name}</h1>
                                </div>
                              </td>
                              <td>{product.product.price}</td>
                              <td>{product.quantity}</td>
                            </tr>
                          </tbody>
                          // <div
                          //   key={product.product._id}
                          //   className="flex gap-3 items-center"
                          // >
                          //   <img
                          //     src={`data:${product.product.image.mimetype};base64,${base64Image}`}
                          //     alt={product.product.name}
                          //     className="w-16 h-16"
                          //   />
                          //   <div>
                          //     <h1>{product.product.name}</h1>
                          //     <p>Rs. {product.product.price}</p>
                          //   </div>
                          // </div>
                        );
                      })}
                  </table>
                )}
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}
