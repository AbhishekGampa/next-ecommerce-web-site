"use client";

import React from "react";
import logo from "../../../(parent)/Images/download.png";
import Image from "next/image";

function UserInformation() {
  return (
    <>
      <div className="bg-black p-4">
        <Image src={logo} alt="logo image" width={100} height={100} />
      </div>
    </>
  );
}

export default UserInformation;
