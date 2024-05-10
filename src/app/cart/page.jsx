import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import "../../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Cart({ isOpen, onClose, hideCloseButton, ...props }) {
  console.log("props: ", props);
  const [products, setProducts] = useState(null);
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
    if (props.state !== undefined) {
      axios
        .get(`http://localhost:3000/apis/product/${props.state}`)
        .then((res) => {
          console.log("res: ", res);
          setProducts(res.data);
          let newTotal = 0;
          if (res.data) {
            res.data.forEach((product) => {
              newTotal += product.price * product.quantity; // assuming each product has a quantity property
            });
          }
          setTotal(newTotal);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
    }
  }, [props.state, loading]);

  console.log("products --->", products);

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
            <ModalBody className="h-[500px]">
              {!props.state && (
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
                  products &&
                  [products.product].map((product) => (
                    <div key={product._id}>
                      {product.image && (
                        <img
                          src={`data:image/jpeg;base64,${Buffer.from(
                            product.image.data
                          ).toString("base64")}`}
                          alt={product.name.trim()}
                        />
                      )}
                      <div>{product.name}</div>
                      <div>{product.price}</div>
                      <div>{product.quantity}</div>
                    </div>
                  ))
                )}
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}
