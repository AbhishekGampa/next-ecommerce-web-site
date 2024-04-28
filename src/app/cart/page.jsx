import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import "../../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Cart({ isOpen, onClose, hideCloseButton, ...props }) {
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
              <div
                className="h-full flex justify-center"
                style={{ alignItems: "center" }}
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="h-16 text-white "
                />
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}
